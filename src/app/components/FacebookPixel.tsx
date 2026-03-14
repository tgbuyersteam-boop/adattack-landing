import { useEffect } from 'react';

const PIXEL_ID = '1618957135797200';

// Helper function to get Facebook Click ID from cookie
function getFbclid(): string | null {
  if (typeof document === 'undefined') return null;
  
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === '_fbc') {
      return value;
    }
  }
  
  // Fallback: check URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const fbclid = urlParams.get('fbclid');
  if (fbclid) {
    return `fb.1.${Date.now()}.${fbclid}`;
  }
  
  return null;
}

// Helper function to get Facebook Browser ID from cookie
function getFbp(): string | null {
  if (typeof document === 'undefined') return null;
  
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === '_fbp') {
      return value;
    }
  }
  
  // Generate fbp if it doesn't exist
  const newFbp = `fb.1.${Date.now()}.${Math.random().toString(36).substring(2, 15)}`;
  document.cookie = `_fbp=${newFbp}; path=/; max-age=7776000`; // 90 days
  return newFbp;
}

// Generate unique event ID for deduplication
function generateEventId(): string {
  return `${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
}

export function FacebookPixel() {
  useEffect(() => {
    // Ensure fbp cookie exists before pixel loads
    getFbp();
    
    // Load Facebook Pixel
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${PIXEL_ID}', {
        external_id: document.cookie.match(/_fbp=([^;]+)/)?.[1] || ''
      });
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    // Add noscript fallback
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = `https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    document.body.appendChild(noscript);

    return () => {
      document.head.removeChild(script);
      document.body.removeChild(noscript);
    };
  }, []);

  return null;
}

// Function to track custom events (browser-side)
export function trackFBEvent(eventName: string, data?: Record<string, any>, eventId?: string) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    const options = eventId ? { eventID: eventId } : {};
    console.log(`Browser Pixel: tracking ${eventName} with eventID: ${eventId}`);
    (window as any).fbq('track', eventName, data, options);
  }
}

// Function to send event to server (Conversions API)
export async function sendServerEvent(eventName: string, eventData?: {
  sourceUrl?: string;
  customData?: Record<string, any>;
  eventId?: string;
}) {
  try {
    // Get Facebook Click ID and Browser ID
    const fbc = getFbclid();
    const fbp = getFbp();
    
    // Get additional browser data
    const userAgent = navigator.userAgent;
    const language = navigator.language;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    
    const response = await fetch(
      `https://ielttxrutlcrghlpfmrv.supabase.co/functions/v1/make-server-ba113c98/fb-event`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbHR0eHJ1dGxjcmdobHBmbXJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwMDAyODMsImV4cCI6MjA4NzU3NjI4M30.fIRJL4EPWnOuOy_9XGh5V6pWqKrc3Zuvmr4iXPni3VY`,
        },
        body: JSON.stringify({
          eventName,
          eventData: {
            sourceUrl: eventData?.sourceUrl || window.location.href,
            customData: eventData?.customData,
            fbc: fbc,
            fbp: fbp,
            eventId: eventData?.eventId,
            userAgent: userAgent,
            language: language,
            screenWidth: screenWidth,
            screenHeight: screenHeight,
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error('Failed to send server event:', error);
      return false;
    }

    const result = await response.json();
    console.log('Server event sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Error sending server event:', error);
    return false;
  }
}

// Combined function: sends to both browser pixel and server
export async function trackLead(source: 'whatsapp' | 'telegram' | 'linkedin' | 'instagram') {
  // Generate unique event ID for deduplication
  const eventId = generateEventId();
  const fbc = getFbclid();
  const fbp = getFbp();
  
  console.log(`📊 Tracking Lead event:`, {
    eventId,
    source,
    fbc: fbc ? 'present ✓' : 'missing ✗',
    fbp: fbp ? 'present ✓' : 'missing ✗',
    userAgent: navigator.userAgent ? 'present ✓' : 'missing ✗'
  });
  
  // Browser pixel
  trackFBEvent('Lead', { source }, eventId);
  
  // Server Conversions API
  await sendServerEvent('Lead', { customData: { source }, eventId });
}
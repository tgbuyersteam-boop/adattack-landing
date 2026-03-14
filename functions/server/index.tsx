import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import crypto from "node:crypto";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-ba113c98/health", (c) => {
  return c.json({ status: "ok" });
});

// Facebook Conversions API endpoint
app.post("/make-server-ba113c98/fb-event", async (c) => {
  try {
    const { eventName, eventData } = await c.req.json();
    
    const pixelId = "1618957135797200";
    const accessToken = Deno.env.get("FB_ACCESS_TOKEN");
    
    if (!accessToken) {
      console.error("FB_ACCESS_TOKEN not found in environment");
      return c.json({ error: "Server configuration error" }, 500);
    }

    // Get client IP and user agent
    const forwardedFor = c.req.header("x-forwarded-for");
    let clientIp = c.req.header("x-real-ip") || "";
    
    // Parse x-forwarded-for to get the first IP
    if (forwardedFor) {
      const ips = forwardedFor.split(',').map(ip => ip.trim());
      clientIp = ips[0];
    }
    
    // Validate IPv4 format (simple regex check)
    const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const isValidIp = ipv4Regex.test(clientIp);
    
    // Use user agent from client data if available, otherwise from header
    const userAgent = eventData?.userAgent || c.req.header("user-agent") || "";

    // Prepare user_data object, only include IP if valid
    const userData: any = {
      client_user_agent: userAgent,
    };
    
    // Only add IP if it's valid IPv4
    if (isValidIp) {
      userData.client_ip_address = clientIp;
    }
    
    // Add Facebook Click ID (fbc) - CRITICAL for matching
    if (eventData?.fbc) {
      userData.fbc = eventData.fbc;
    }
    
    // Add Facebook Browser ID (fbp) - CRITICAL for matching
    if (eventData?.fbp) {
      userData.fbp = eventData.fbp;
    }
    
    // Add external_id (using fbp as unique identifier for better deduplication)
    if (eventData?.fbp) {
      userData.external_id = eventData.fbp;
    }

    // Prepare event payload
    const eventPayload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventData?.eventId || `${Date.now()}_${Math.random().toString(36).substring(2, 15)}`,
          action_source: "website",
          event_source_url: eventData?.sourceUrl || "https://adattack.example",
          user_data: userData,
          custom_data: eventData?.customData || {},
        },
      ],
    };

    console.log(`Sending event to FB CAPI: ${eventName}`, {
      eventId: eventData?.eventId,
      fbc: eventData?.fbc ? 'present' : 'missing',
      fbp: eventData?.fbp ? 'present' : 'missing',
      ip: isValidIp ? 'present' : 'missing',
      userAgent: userAgent ? 'present' : 'missing'
    });

    // Send to Facebook Conversions API
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventPayload),
      }
    );

    const result = await response.json();
    
    if (!response.ok) {
      console.error("Facebook API error:", result);
      return c.json({ error: "Failed to send event", details: result }, 500);
    }

    console.log(`Facebook event sent: ${eventName}`, result);
    return c.json({ success: true, result });
  } catch (error) {
    console.error("Error sending Facebook event:", error);
    return c.json({ error: error.message }, 500);
  }
});

Deno.serve(app.fetch);
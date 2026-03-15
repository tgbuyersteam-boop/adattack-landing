// Basic tracking and interaction logic
document.addEventListener('DOMContentLoaded', () => {
    console.log('NeuroFlow Lander Initialized');

    // 1. Capture UTM Parameters
    const urlParams = new URLSearchParams(window.location.search);
    const utms = {
        source: urlParams.get('utm_source') || 'direct',
        medium: urlParams.get('utm_medium') || 'none',
        campaign: urlParams.get('utm_campaign') || 'none'
    };
    
    // Log tracking (In production, this would go to Supabase)
    localStorage.setItem('landing_tracking', JSON.stringify(utms));
    console.log('Tracking initialized:', utms);

    // 2. Quiz Logic
    const quizOptions = document.querySelectorAll('.quiz-opt');
    quizOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            const val = opt.getAttribute('data-val');
            console.log('Goal selected:', val);
            
            // Visual feedback
            opt.style.background = '#6366f1';
            opt.style.transform = 'scale(1.05)';
            
            // Move to "next step" behavior (simulated)
            setTimeout(() => {
                alert(`Protocol for ${val.toUpperCase()} selected! Redirecting to exclusive offer...`);
                // In production: window.location.href = 'AFFILIATE_LINK';
            }, 800);
        });
    });

    // 3. Simple animation trigger for hero
    const heroImage = document.querySelector('.floating-capsule');
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroImage.style.transition = 'all 1s ease-out';
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateY(0)';
        }, 100);
    }
});

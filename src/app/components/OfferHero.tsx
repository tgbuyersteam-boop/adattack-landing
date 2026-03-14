import { ChevronDown } from 'lucide-react';

export function OfferHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-6 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Main Headline */}
        <div className="relative">
          <h1 className="relative text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-liquid-glass" style={{
            backgroundSize: '200% 200%',
          }}>
            Get 20 Meta creatives in 48h for $149
          </h1>
        </div>
        
        {/* Subheadline with subtle glow */}
        <div className="relative">
          <div className="absolute inset-0 blur-2xl bg-red-600/10 opacity-40"></div>
          <p className="relative text-xl sm:text-2xl lg:text-3xl text-white max-w-3xl mx-auto leading-relaxed font-light">
            Save time on production. Test faster. Find winners. Make profit sooner. Keep results stable with continuous creative testing
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="pt-8 flex justify-center animate-bounce">
          <ChevronDown className="w-8 h-8 text-red-600" />
        </div>
      </div>
    </section>
  );
}

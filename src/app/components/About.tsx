import { ChevronDown } from 'lucide-react';


export function About() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pb-8 pt-12">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          {/* Logo Circle */}
          <div className="flex justify-center mb-4 mt-8">
            <div className="relative w-36 h-36 sm:w-46 sm:h-46 lg:w-56 lg:h-56">
              {/* Rotating gradient rings */}
              <div className="absolute inset-0 rounded-full animate-spin-slow">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 via-transparent to-transparent opacity-100 blur-xl"></div>
              </div>
              <div className="absolute inset-0 rounded-full animate-spin-reverse">
                <div className="absolute inset-0 rounded-full bg-gradient-to-l from-red-500 via-transparent to-transparent opacity-90 blur-xl"></div>
              </div>
              <div className="absolute inset-0 rounded-full animate-spin-slow-delay">
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-red-700 via-transparent to-transparent opacity-80 blur-2xl"></div>
              </div>
              
              {/* Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-zinc-800/50 shadow-[0_0_30px_rgba(220,38,38,0.6),0_0_60px_rgba(220,38,38,0.3)] hover:scale-105 transition-transform duration-300">
                <img 
                  src={"https://via.placeholder.com/800"} 
                  alt="Milan" 
                  className="w-full h-full object-cover scale-120"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white" style={{ fontWeight: 'bold' }}>
            Creative strategist & winning ads production <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-liquid-glass" style={{ backgroundSize: '200% 200%' }}>AdAttack.</span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-white">
            6 years of Meta Ads expertise, I deliver winning creatives faster and cheaper, solving Creative Diversity and Creative Velocity for eCommerce brands
          </p>

          {/* Scroll indicator */}
          <div className="pt-8 flex justify-center animate-bounce">
            <ChevronDown className="w-8 h-8 text-red-600" />
          </div>
        </div>
      </div>
    </section>
  );
}

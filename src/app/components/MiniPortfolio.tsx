import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';









































const portfolioImages = Array(40).fill("https://via.placeholder.com/800");

export function MiniPortfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const pauseTimeoutRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(performance.now());
  const initializedRef = useRef(false);

  // Triple the array for seamless infinite scroll
  const infiniteImages = [...portfolioImages, ...portfolioImages, ...portfolioImages];

  // Auto-scroll animation - ТОЛЬКО ОДИН РАЗ при монтировании
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Initialize scroll position ТОЛЬКО ОДИН РАЗ
    if (!initializedRef.current) {
      const itemWidth = 140 + 8; // Half size: 280/2 + 16/2
      const singleSetWidth = portfolioImages.length * itemWidth;
      
      setTimeout(() => {
        if (container) {
          container.scrollLeft = singleSetWidth;
          initializedRef.current = true;
        }
      }, 100);
    }

    const scrollSpeed = 0.25;
    let isReady = false;

    setTimeout(() => {
      isReady = true;
    }, 300);

    const animate = (currentTime: number) => {
      if (container && isReady && !isPausedRef.current) {
        const deltaTime = currentTime - lastTimeRef.current;
        container.scrollLeft += scrollSpeed * deltaTime;

        const itemWidth = 140 + 8; // Half size
        const singleSetWidth = portfolioImages.length * itemWidth;

        // Сброс позиции ТОЛЬКО во время автопрокрутки
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        }

        if (container.scrollLeft <= 0) {
          container.scrollLeft += singleSetWidth;
        }
      }
      
      // Всегда обновляем lastTime
      lastTimeRef.current = currentTime;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []); // БЕЗ ЗАВИСИМОСТЕЙ - только один раз при монтировании!

  // Handle pause/resume on user interaction
  const handlePause = () => {
    isPausedRef.current = true;
    
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    pauseTimeoutRef.current = window.setTimeout(() => {
      isPausedRef.current = false;
    }, 2000);
  };

  // Arrow navigation
  const handleArrowClick = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 200; // Half of original
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });

    handlePause();
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="pt-16 pb-6 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => handleArrowClick('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-zinc-800/90 backdrop-blur-sm hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-xl"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => handleArrowClick('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-zinc-800/90 backdrop-blur-sm hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-xl"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Scrollable Gallery */}
          <div
            ref={scrollContainerRef}
            onTouchStart={handlePause}
            onMouseDown={handlePause}
            onWheel={handlePause}
            className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {infiniteImages.map((image, index) => (
              <div
                key={`${index}-${image}`}
                className="flex-shrink-0 w-[140px] aspect-[4/5] rounded-xl overflow-hidden bg-zinc-800 hover:scale-105 transition-transform duration-500 shadow-lg hover:shadow-red-600/20"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Creative ${(index % portfolioImages.length) + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-zinc-800 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-zinc-800 to-transparent pointer-events-none" />
        </div>

        {/* Text content below gallery */}
        <div className="max-w-4xl mx-auto text-center space-y-6 pt-6">
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
              Save your time on production. Test faster. Find winners. Make profit sooner. Keep results stable with continuous creative testing
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={() => {
                const contactForm = document.getElementById('contact-form');
                contactForm?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              className="group relative px-8 py-4 text-white font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50"
              style={{
                background: 'linear-gradient(135deg, #dc2626, #991b1b, #dc2626, #991b1b)',
                backgroundSize: '400% 400%',
                animation: 'gradient 8s ease infinite',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradient 3s ease infinite',
                }}
              ></div>
              <span className="relative">Get 20 Creatives</span>
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-8 flex justify-center animate-bounce">
            <ChevronDown className="w-8 h-8 text-red-600" />
          </div>
        </div>
      </div>
    </section>
  );
}

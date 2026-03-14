import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { trackLead } from './FacebookPixel';









































const portfolioImages = Array(40).fill("https://via.placeholder.com/800");

export function Portfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const pauseTimeoutRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(performance.now());
  const initializedRef = useRef(false);

  // Triple the array for seamless infinite scroll
  const infiniteImages = [...portfolioImages, ...portfolioImages, ...portfolioImages];

  const handleButtonClick = () => {
    trackLead('get_20_creatives_portfolio');
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Auto-scroll animation - ТОЛЬКО ОДИН РАЗ при монтировании
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Initialize scroll position ТОЛЬКО ОДИН РАЗ
    if (!initializedRef.current) {
      const itemWidth = 280 + 16;
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

        const itemWidth = 280 + 16;
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

    const scrollAmount = 400;
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
    <section className="pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Пример тестового пака для Pawira water fountain
          </h2>
        </div>

        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => handleArrowClick('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-zinc-800/90 backdrop-blur-sm hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-xl"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => handleArrowClick('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-zinc-800/90 backdrop-blur-sm hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-xl"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Gallery */}
          <div
            ref={scrollContainerRef}
            onTouchStart={handlePause}
            onMouseDown={handlePause}
            onWheel={handlePause}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {infiniteImages.map((image, index) => (
              <div
                key={`${index}-${image}`}
                className="flex-shrink-0 w-[280px] aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-800 hover:scale-105 transition-transform duration-500 shadow-lg hover:shadow-red-600/20"
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
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-800 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-800 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
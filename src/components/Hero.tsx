import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Property Assets
import imgBuilding from '@/assets/hero/building.jpg';
import imgFountain from '@/assets/hero/fountain.jpg';
import imgSignage from '@/assets/hero/signage.jpg';
import imgHallway from '@/assets/hero/hallway.jpg';
import imgGarden from '@/assets/hero/garden-chairs.jpg';

gsap.registerPlugin(ScrollTrigger);

const slides = [
  { img: imgBuilding, title: 'Baan Bussaba', sub: 'นิยามใหม่ของการอยู่อาศัยที่เงียบสงบ' },
  { img: imgFountain, title: 'Serene Sanctuary', sub: 'ความสงบในสวนส่วนตัว กลางย่านศรีนครินทร์' },
  { img: imgSignage, title: 'Heritage Living', sub: 'สัมผัสความอบอุ่นที่เรียบง่าย' },
  { img: imgHallway, title: 'Modern Comfort', sub: 'พื้นที่ที่ออกแบบมาเพื่อการพักผ่อนที่แท้จริง' },
  { img: imgGarden, title: 'Private Oasis', sub: 'มุมพักผ่อนที่โอบล้อมด้วยธรรมชาติ' },
];

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Initial Entrance Animation
  useGSAP(() => {
    if (!textGroupRef.current) return;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const btn = textGroupRef.current.querySelector('div');

    gsap.set([titleRef.current, subRef.current, btn], { 
      opacity: 0, 
      y: 40 
    });

    tl.to(titleRef.current, { opacity: 1, y: 0, duration: 1.5, delay: 0.5 })
      .to(subRef.current, { opacity: 1, y: 0, duration: 1.2 }, '-=1.0')
      .to(btn, { opacity: 1, y: 0, duration: 1 }, '-=0.8');

    // Subtle Parallax on Scroll
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: 200,
      ease: 'none'
    });

  }, { scope: containerRef });

  // Cinematic Slideshow Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide

    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    // Cross-fade and Ken Burns Effect
    slidesRef.current.forEach((slide, index) => {
      if (!slide) return;
      if (index === currentIndex) {
        // Active Slide: Fade in and start zoom
        gsap.to(slide, {
          opacity: 1,
          duration: 2,
          ease: 'power2.inOut',
          onStart: () => {
            gsap.fromTo(slide.querySelector('img'), 
              { scale: 1.0, x: index % 2 === 0 ? -20 : 20 }, 
              { scale: 1.15, x: 0, duration: 7, ease: 'none' }
            );
          }
        });
      } else {
        // Inactive Slides: Fade out
        gsap.to(slide, {
          opacity: 0,
          duration: 2,
          ease: 'power2.inOut'
        });
      }
    });

    // Subtitle mini-refresh animation on slide change
    if (subRef.current && currentIndex > 0) {
      gsap.fromTo(subRef.current, 
        { opacity: 0, y: 10 }, 
        { opacity: 1, y: 0, duration: 1, delay: 0.5 }
      );
    }

  }, [currentIndex]);

  const handleScrollToContent = (e: React.MouseEvent) => {
    e.preventDefault();
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo('#rooms', { duration: 1.5 });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100vh] overflow-hidden flex flex-col items-center justify-center text-center font-sans"
    >
      {/* Cinematic Slides Layer */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={(el) => { slidesRef.current[index] = el; }}
            className="absolute inset-0 opacity-0 bg-mahogany-900"
          >
            <img 
              src={slide.img} 
              alt="Baan Bussaba Property"
              className="w-full h-full object-cover"
            />
            {/* Cinematic Overlay - Deeper for visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-mahogany-900/40 via-transparent to-mahogany-900/60 mix-blend-multiply" />
          </div>
        ))}
      </div>

      {/* Main Content Overlay */}
      <div ref={textGroupRef} className="relative z-20 max-w-5xl px-6">
        <h1 
          ref={titleRef}
          className="text-white font-serif text-5xl md:text-8xl tracking-tight leading-tight mb-4 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
        >
          {slides[currentIndex].title}
        </h1>
        <p 
          ref={subRef}
          className="text-white/90 text-lg md:text-2xl font-light tracking-wide mb-12 max-w-2xl mx-auto drop-shadow-md"
        >
          {slides[currentIndex].sub}
        </p>
        <div>
          <a 
            href="#rooms" 
            onClick={handleScrollToContent}
            className="inline-block px-10 py-4 bg-white text-mahogany-900 font-medium uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-amber-500 hover:text-white transition-all duration-500 transform hover:scale-105 shadow-xl"
          >
            สัมผัสความสุขที่เรียบง่าย
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-50">
        <span className="text-white text-[9px] uppercase tracking-[0.4em] rotate-90 origin-left translate-x-[4px]">Discover</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};

export default Hero;

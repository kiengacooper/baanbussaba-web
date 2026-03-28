import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bedroomImg from '@/assets/bedroom-bg.png';
import loungeImg from '@/assets/lounge-bg.png';
import poolImg from '@/assets/pool-bg.png';

gsap.registerPlugin(ScrollTrigger);

const EstateGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax Grid Items
    const items = gsap.utils.toArray('.grid-item');
    items.forEach((item: any, i: number) => {
      const img = item.querySelector('img');
      const speed = i % 2 === 0 ? -15 : 15; // Alternating editorial depth

      gsap.fromTo(item, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none none',
          }
        }
      );

      // Subtle Image Parallax inside tile
      gsap.to(img, {
        yPercent: speed,
        ease: 'none',
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section id="estate" ref={containerRef} className="py-24 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="mb-4">Architectural Harmony</h2>
        <p className="text-mahogany-900/60 max-w-2xl mx-auto font-light">
          Baan Bussaba blends modern clean lines with the warmth of natural wood and stone, 
          creating a living space that feels like an extension of the botanical garden.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Large Main Feature */}
        <div className="md:col-span-8 grid-item">
          <div className="relative aspect-[16/9] overflow-hidden group rounded-sm border border-mahogany-900/5">
            <img 
              src={loungeImg} 
              alt="Lounge and Dining Area" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 text-white-50">
              <span className="text-xs uppercase tracking-widest bg-mahogany-900/40 backdrop-blur-sm px-3 py-1">The Living Space</span>
            </div>
          </div>
        </div>

        {/* Small Vertical Detail */}
        <div className="md:col-span-4 grid-item">
          <div className="relative aspect-[4/5] overflow-hidden group rounded-sm border border-mahogany-900/5">
            <img 
              src={poolImg} 
              alt="Pool Detail" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 text-white-50">
              <span className="text-xs uppercase tracking-widest bg-mahogany-900/40 backdrop-blur-sm px-3 py-1">Zen Poolside</span>
            </div>
          </div>
        </div>

        {/* Medium Bottom Feature */}
        <div className="md:col-span-12 grid-item">
          <div className="relative h-[400px] md:h-[600px] overflow-hidden group rounded-sm border border-mahogany-900/5">
            <img 
              src={bedroomImg} 
              alt="Luxury Bedroom" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute bottom-6 left-6 text-white-50">
              <span className="text-xs uppercase tracking-widest bg-mahogany-900/40 backdrop-blur-sm px-3 py-1">The Master Sanctuary</span>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none px-4">
              <h3 className="text-white-50 text-3xl md:text-5xl drop-shadow-2xl">A Place of Serenity</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstateGrid;

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import heroImg from '@/assets/hero-bg.png';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Initial state
    gsap.set([titleRef.current, subRef.current, btnRef.current], { 
      opacity: 0, 
      y: 40 
    });
    gsap.set(bgRef.current, { scale: 1.1 });

    // Sequence
    tl.to(bgRef.current, {
      scale: 1,
      duration: 2.5,
      ease: 'power2.out'
    })
    .to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
    }, '-=1.8')
    .to(subRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
    }, '-=0.8')
    .to(btnRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
    }, '-=0.6');

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-center px-4"
    >
      {/* Background with Parallax potential */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-mahogany-900/20 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <h1 
          ref={titleRef}
          className="text-white-50 mb-6 drop-shadow-2xl"
        >
          Baan Bussaba
        </h1>
        <p 
          ref={subRef}
          className="text-white-50/90 text-xl md:text-2xl font-serif italic mb-10 max-w-2xl mx-auto drop-shadow-lg"
        >
          An elevated Urban Oasis designed for serene luxury and architectural harmony.
        </p>
        <div ref={btnRef}>
          <a href="#estate" className="btn-primary !bg-white-50 !text-mahogany-900 hover:!bg-amber-500 hover:!text-white-50 border-none">
            Experience the Sanctuary
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-px h-12 bg-white-50/50 mx-auto" />
      </div>
    </section>
  );
};

export default Hero;

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const amenities = [
  {
    title: 'Secret Courtyard',
    description: 'A central botanical garden that brings natural light and fresh air into the heart of the home.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: 'Infinity Reflection',
    description: 'A custom-built salt-water pool framed by warm stone and tropical foliage.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12H3m18 4H3m18-8H3" />
      </svg>
    )
  },
  {
    title: 'Smart Sanctuary',
    description: 'Integrated smart-home technology allowing you to control lighting, climate, and security from your device.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: 'Architectural Wood',
    description: 'Hand-selected mahogany and teak paneling throughout the living spaces.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    )
  }
];

const AmenitiesGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.amenity-card', {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });
  }, { scope: containerRef });

  return (
    <section id="amenities" ref={containerRef} className="py-24 bg-mahogany-900 text-white-50">
      <div className="px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white-50 mb-4">Elevated Amenities</h2>
          <div className="w-12 h-px bg-white-50/20 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {amenities.map((amenity, idx) => (
            <div key={idx} className="amenity-card text-center group">
              <div className="mb-6 flex justify-center text-amber-500 transition-transform duration-500 group-hover:scale-110">
                {amenity.icon}
              </div>
              <h4 className="text-white-50 mb-3 text-lg font-serif tracking-wide">{amenity.title}</h4>
              <p className="text-white-50/60 text-sm font-light leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesGrid;

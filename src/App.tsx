import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EstateGrid from '@/components/EstateGrid';
import RoomSection from '@/components/RoomSection';
import ExperienceSection from '@/components/ExperienceSection';
import LocationSection from '@/components/LocationSection';
import ContactSection from '@/components/ContactSection';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-beige-100 min-h-screen">
      <Navbar />
      <Hero />
      <EstateGrid />
      <RoomSection />
      <ExperienceSection />
      <LocationSection />
      <ContactSection />
    </main>
  )
}

export default App

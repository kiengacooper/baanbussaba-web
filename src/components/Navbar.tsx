import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close menu on click
    const lenis = (window as any).lenis;
    if (lenis) {
      if (id === 'top') {
        lenis.scrollTo(0, { duration: 1.5, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      } else {
        lenis.scrollTo(`#${id}`, { duration: 1.5, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      }
    }
  };

  const navLinks = [
    { label: 'ห้องพัก', id: 'rooms' },
    { label: 'สิ่งอำนวยความสะดวก', id: 'experience' },
    { label: 'ทำเลที่ตั้ง', id: 'location' },
    { label: 'ติดต่อเรา', id: 'contact' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-8 h-20 bg-white border-b border-mahogany-900/5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] font-sans">
        <a 
          href="#" 
          onClick={handleScroll('top')}
          className="text-mahogany-900 font-serif text-2xl tracking-tight cursor-pointer hover:text-amber-500 transition-colors"
        >
          Baan Bussaba
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleScroll(item.id)}
              className="text-mahogany-900/80 hover:text-mahogany-900 text-xs uppercase tracking-[0.2em] transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-mahogany-900 text-xs uppercase tracking-widest cursor-pointer focus:outline-none"
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div className={`fixed inset-0 bg-white z-[90] transition-transform duration-500 ease-in-out md:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleScroll(item.id)}
              className="text-mahogany-900 text-2xl font-serif tracking-wide hover:text-amber-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;

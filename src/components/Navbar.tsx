import React from 'react';

const Navbar: React.FC = () => {
  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const lenis = (window as any).lenis;
    if (lenis) {
      if (id === 'top') {
        lenis.scrollTo(0, { duration: 1.5, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      } else {
        lenis.scrollTo(`#${id}`, { duration: 1.5, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 h-20 bg-white border-b border-mahogany-900/5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
      <a 
        href="#" 
        onClick={handleScroll('top')}
        className="text-mahogany-900 font-serif text-2xl tracking-tight cursor-pointer hover:text-amber-500 transition-colors"
      >
        Baan Bussaba
      </a>
      
      <div className="hidden md:flex gap-12 items-center">
        {[
          { label: 'ห้องพัก', id: 'rooms' },
          { label: 'สิ่งอำนวยความสะดวก', id: 'experience' },
          { label: 'ทำเลที่ตั้ง', id: 'location' },
          { label: 'ติดต่อเรา', id: 'contact' }
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={handleScroll(item.id)}
            className="text-mahogany-900/80 hover:text-mahogany-900 font-sans text-sm uppercase tracking-widest transition-colors duration-300"
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="md:hidden">
        {/* Mobile menu trigger could go here */}
        <span className="text-mahogany-900 text-sm uppercase tracking-widest cursor-pointer">Menu</span>
      </div>
    </nav>
  );
};

export default Navbar;

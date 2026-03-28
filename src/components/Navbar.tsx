import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-beige-100/10 backdrop-blur-md border-b border-mahogany-900/5">
      <div className="text-mahogany-900 font-serif text-2xl tracking-tight">
        Baan Bussaba
      </div>
      
      <div className="hidden md:flex gap-12 items-center">
        {['Estate', 'Amenities', 'Location', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-mahogany-900/80 hover:text-mahogany-900 font-sans text-sm uppercase tracking-widest transition-colors duration-300"
          >
            {item}
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

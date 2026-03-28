import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ContactSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.contact-reveal', {
      opacity: 0,
      y: 20,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      }
    });
  }, { scope: containerRef });

  return (
    <section id="contact" ref={containerRef} className="py-24 px-8 bg-beige-100">
      <div className="max-w-4xl mx-auto text-center contact-reveal">
        <span className="text-xs uppercase tracking-[0.4em] text-mahogany-900/40 block mb-8">Ready for Discovery</span>
        <h2 className="mb-10 font-thai tracking-tight uppercase">ยินดีต้อนรับสู่บ้านบุษบา</h2>
        
        <p className="text-mahogany-900/70 text-xl md:text-2xl font-thai font-light mb-12 max-w-3xl mx-auto leading-relaxed">
          หากคุณกำลังมองหาที่พักอาศัยที่เงียบสงบและเป็นส่วนตัว <br className="hidden md:block"/>
          เรายินดีให้ข้อมูลเพิ่มเติมและนัดหมายเพื่อเข้าชมโครงการ
        </p>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-mahogany-900/30 font-sans font-semibold">Call Our Manager</span>
            <a href="tel:089XXXXXXX" className="text-3xl font-serif tracking-tight text-mahogany-900 hover:text-amber-500 transition-colors">
              089-XXX-XXXX
            </a>
          </div>
          
          <div className="w-px h-16 bg-mahogany-900/10 hidden md:block" />

          <div className="flex flex-col gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-mahogany-900/30 font-sans font-semibold">LINE Inquiry</span>
            <a href="#" className="text-3xl font-serif tracking-tight text-mahogany-900 hover:text-amber-500 transition-colors">
              Add by Phone Number
            </a>
          </div>
        </div>

        <div className="mt-20 pt-16 border-t border-mahogany-900/5">
          <p className="text-[10px] uppercase tracking-widest text-mahogany-900/30 font-sans">
            &copy; 2026 Baan Bussaba Sanctuary. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import gardenImg from '@/assets/garden-bg.png';

const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.feature-card', {
      opacity: 0,
      y: 20,
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
    <section id="experience" ref={containerRef} className="py-24 bg-mahogany-900 text-white-50">
      <div className="px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* The "Soul" - Garden Highlight */}
        <div className="relative group overflow-hidden rounded-sm border border-white-50/10 h-[500px]">
          <img 
            src={gardenImg} 
            alt="Private Garden" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-mahogany-900/40" />
          <div className="absolute bottom-10 left-10 right-10">
            <h3 className="text-white-50 mb-4 tracking-wide">PRIVATE SANCTUARY</h3>
            <p className="text-white-50/80 font-light font-thai leading-relaxed">
              สัมผัสความสงบในสวนส่วนตัวสไตล์รีสอร์ท พื้นที่สีเขียวขนาดเล็กรอบตัวบ้าน 
              ออกแบบมาเพื่อการพักผ่อนอย่างแท้จริง มอบความรู้สึกเหมือนอยู่บ้านพักตากอากาศ
            </p>
          </div>
        </div>

        {/* The "Essentials" - Icons */}
        <div>
          <span className="text-xs uppercase tracking-[0.4em] text-white-50/30 block mb-6">LIVING AT BAAN BUSSABA</span>
          <h2 className="text-white-50 mb-12">ความสะดวกสบายที่ลงตัว</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
            <div className="feature-card">
              <div className="text-amber-500 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h4 className="text-white-50 mb-2 font-serif uppercase tracking-widest text-sm">High Speed WiFi</h4>
              <p className="text-white-50/50 text-xs font-light font-thai">อินเทอร์เน็ตความเร็วสูง ครอบคลุมทุกพื้นที่พักอาศัย</p>
            </div>

            <div className="feature-card">
              <div className="text-amber-500 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-white-50 mb-2 font-serif uppercase tracking-widest text-sm">CCTV Security</h4>
              <p className="text-white-50/50 text-xs font-light font-thai">ระบบรักษาความปลอดภัย กล้องวงจรปิดรอบอาคาร เพื่อความอุ่นใจตลอด 24 ชม.</p>
            </div>

            <div className="feature-card">
              <div className="text-amber-500 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
              <h4 className="text-white-50 mb-2 font-serif uppercase tracking-widest text-sm">Parking Space</h4>
              <p className="text-white-50/50 text-xs font-light font-thai">ที่จอดรถยนต์และจักรยานยนต์ที่ปลอดภัยและสะดวกสบาย</p>
            </div>

            <div className="feature-card">
              <div className="text-amber-500 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h4 className="text-white-50 mb-2 font-serif uppercase tracking-widest text-sm">Quiet Living</h4>
              <p className="text-white-50/50 text-xs font-light font-thai">บรรยากาศเงียบสงบ หลีกลีกความวุ่นวาย แต่ยังเชื่อมต่อกับย่านธุรกิจได้ง่าย</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

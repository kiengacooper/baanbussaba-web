import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import roomImg from '@/assets/room-bg.png';
import bedroomImg from '@/assets/bedroom-bg.png';

const RoomSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.room-reveal', {
      opacity: 0,
      y: 40,
      stagger: 0.3,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });
  }, { scope: containerRef });

  return (
    <section id="rooms" ref={containerRef} className="py-24 px-8 bg-white-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-mahogany-900/40 block mb-6">THE RESIDENCES</span>
          <h2 className="mb-4">พื้นที่พักอาศัยที่เหนือระดับ</h2>
          <p className="font-thai text-mahogany-900/60 max-w-2xl mx-auto">
            ห้องพักทุกห้องถูกออกแบบโดยเน้นความโปร่งสบาย วัสดุเกรดพรีเมียม 
            และบรรยากาศที่เงียบสงบ เพื่อรองรับการพักผ่อนอย่างเต็มที่
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Room Type 1 */}
          <div className="room-reveal group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6">
              <img 
                src={roomImg} 
                alt="Modern Studio" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-mahogany-900/5 group-hover:bg-transparent transition-colors" />
            </div>
            <h4 className="text-xl font-serif mb-2 tracking-tight">Modern Studio Apartment</h4>
            <p className="text-sm font-thai text-mahogany-900/60 leading-relaxed mb-6">
              พื้นที่ใช้สอยที่จัดวางอย่างลงตัว พร้อมเฟอร์นิเจอร์ไม้สไตล์เอกลักษณ์ 
              และมุมทำงานที่สว่างไสวด้วยแสงธรรมชาติ
            </p>
            <div className="flex gap-4">
              <span className="text-[10px] uppercase tracking-widest text-amber-600 font-sans border-b border-amber-600/30 pb-1">AVAILABLE SOON</span>
            </div>
          </div>

          {/* Room Type 2 */}
          <div className="room-reveal group cursor-pointer lg:mt-24">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6">
              <img 
                src={bedroomImg} 
                alt="The Sanctuary Suite" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-mahogany-900/5 group-hover:bg-transparent transition-colors" />
            </div>
            <h4 className="text-xl font-serif mb-2 tracking-tight">The Sanctuary Suite</h4>
            <p className="text-sm font-thai text-mahogany-900/60 leading-relaxed mb-6">
              สัมผัสความหรูหราที่เรียบง่าย ด้วยการออกแบบที่เชื่อมต่อกับธรรมชาติ 
              มอบคุณภาพการนอนหลับที่ดีที่สุดในบรรยากาศผ่อนคลาย
            </p>
            <div className="flex gap-4">
              <span className="text-[10px] uppercase tracking-widest text-amber-600 font-sans border-b border-amber-600/30 pb-1">VIEW GALLERY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomSection;

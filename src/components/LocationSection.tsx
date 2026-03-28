import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const LocationSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.location-content', {
      opacity: 0,
      x: -30,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });
  }, { scope: containerRef });

  return (
    <section id="location" ref={containerRef} className="py-24 px-8 bg-beige-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div className="location-content">
          <span className="text-xs uppercase tracking-[0.4em] text-mahogany-900/40 block mb-6">LOCATION & CONNECTIVITY</span>
          <h2 className="mb-10 uppercase tracking-tight">ทําเลศักยภาพ กลางย่านศรีนครินทร์</h2>
          
          <div className="space-y-12">
            <div>
              <h4 className="text-sm uppercase tracking-widest text-mahogany-900 mb-4 opacity-50 font-sans">Neighborhood</h4>
              <ul className="space-y-4 font-thai text-mahogany-900/80">
                <li className="flex gap-4 items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  ใกล้อีเทิลเทลล์ Seacon Square และ Paradise Park
                </li>
                <li className="flex gap-4 items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  พักผ่อนคลายในพื้นที่สีเขียวที่ สวนหลวง ร.9
                </li>
                <li className="flex gap-4 items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  เดินทางลัดสู่ ท่าอากาศยานสุวรรณภูมิ เพียงไม่กี่นาที
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-mahogany-900 mb-4 opacity-50 font-sans">Transportation</h4>
              <ul className="space-y-4 font-thai text-mahogany-900/80">
                <li className="flex gap-4 items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  รถไฟฟ้าสายสีเหลือง (MRT Yellow Line)
                </li>
                <li className="flex gap-4 items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  เชื่อมต่อ Airport Rail Link สู่ใจกลางเมืองและสุวรรณภูมิ
                </li>
                <li className="flex gap-4 items-center">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  ป้ายรถประจำทางในระยะที่เดินถึงได้สะดวก
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="w-full aspect-square md:aspect-video lg:aspect-square bg-mahogany-900/5 rounded-sm overflow-hidden border border-mahogany-900/10 grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.5414166258046!2d100.64831207590216!3d13.685651398864756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d61ef3395b00f%3A0xe5f99cc25624778!2zQmFhbiBCdXNzYWJhIChIQS1CQSkg4Lia4Liy4LiZ4Lia4Li44Liq4Liq4Liy4Lia4Liy!5e0!3m2!1sth!2sth!4v1711612000000!5m2!1sth!2sth" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

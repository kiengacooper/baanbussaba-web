import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

function App() {
  return (
    <main className="bg-beige-100">
      <Navbar />
      <Hero />
      
      {/* Section: The Estate (Content Reveal Demo) */}
      <section id="estate" className="py-24 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="mb-6">The Estate</h2>
          <p className="text-mahogany-900/70 leading-relaxed mb-8">
            Baan Bussaba is more than a residence; it is a meticulously crafted 
            sanctuary where modern architectural lines meet the untamed beauty 
            of a tropical garden. Every corner is designed to breathe.
          </p>
          <div className="flex gap-4">
            <span className="w-12 h-px bg-mahogany-900/20 self-center" />
            <span className="text-xs uppercase tracking-[0.3em] text-mahogany-900/40 font-sans">
              Discover the Harmony
            </span>
          </div>
        </div>
        <div className="aspect-[4/5] bg-mahogany-900/5 rounded-sm overflow-hidden border border-mahogany-900/10 flex items-center justify-center italic text-mahogany-900/20">
          [Image Grid Coming Soon]
        </div>
      </section>
      
      {/* Footer / Contact Placeholder */}
      <footer className="py-20 text-center text-mahogany-900/40 text-sm uppercase tracking-widest">
        &copy; 2026 Baan Bussaba. All Rights Reserved.
      </footer>
    </main>
  )
}

export default App

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

function App() {
  return (
    <main className="bg-beige-100">
      <Navbar />
      <Hero />
      
      {/* Footer / Contact Placeholder */}
      <footer className="py-20 text-center text-mahogany-900/40 text-sm uppercase tracking-widest">
        &copy; 2026 Baan Bussaba. All Rights Reserved.
      </footer>
    </main>
  )
}

export default App

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EstateGrid from '@/components/EstateGrid';
import AmenitiesGrid from '@/components/AmenitiesGrid';
import ContactSection from '@/components/ContactSection';

function App() {
  return (
    <main className="bg-beige-100 min-h-screen">
      <Navbar />
      <Hero />
      <EstateGrid />
      <AmenitiesGrid />
      <ContactSection />
    </main>
  )
}

export default App

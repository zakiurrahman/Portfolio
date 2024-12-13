import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';

export default async function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <Contact />
    </div>
  );
}

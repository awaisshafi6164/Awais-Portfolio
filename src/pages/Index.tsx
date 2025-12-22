import Header from '@/components/Header';
import SpotlightCursor from '@/components/SpotlightCursor';
import SocialSidebar from '@/components/SocialSidebar';
import FooterSimple from '@/components/FooterSimple';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Work from '@/sections/Work';
import Contact from '@/sections/Contact';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <SpotlightCursor />
      <Header />
      <SocialSidebar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      <FooterSimple />
    </div>
  );
};

export default Index;

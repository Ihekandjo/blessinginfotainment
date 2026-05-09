import { LazyMotion, domAnimation } from 'framer-motion';
import { useState } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Navbar } from './components/Navbar';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { ProjectModal } from './components/ProjectModal';
import { ScrollProgress } from './components/ScrollProgress';
import { Services } from './components/Services';
import type { PortfolioItem } from './data/site';

function App() {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  return (
    <LazyMotion features={domAnimation}>
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Marquee />
        <Services />
        <Process />
        <Portfolio onSelect={setSelected} />
        <Contact />
      </main>

      <Footer />
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </LazyMotion>
  );
}

export default App;

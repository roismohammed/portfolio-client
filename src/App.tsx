
import { Hero } from './components/Hero';
import { SkillBar } from './components/SkillBar';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Hero />
      <SkillBar />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;

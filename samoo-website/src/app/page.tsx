import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Podcast from './components/Podcast';
import FitMind from './components/FitMind';
import Formation from './components/Formation';
import Collaborations from './components/Collaborations';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Podcast />
      <FitMind />
      <Formation />
      <Collaborations />
      <ComingSoon />
      <Footer />
    </main>
  );
}

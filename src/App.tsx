import { Hero } from './features/landing-page/components/Hero';
import { Services } from './features/landing-page/components/Services';
import { Pricing } from './features/landing-page/components/Pricing';
import { Testimonials } from './features/landing-page/components/Testimonials';
import { Contact } from './features/landing-page/components/Contact';

function App() {
  return (
    <main className="antialiased selection:bg-tempe-primary selection:text-white">
      <Hero />
      <Services />
      <Pricing />
      <Testimonials />
      <Contact />
      <footer className="bg-slate-950 py-12 text-center text-slate-600 border-t border-slate-900">
        <p className="mb-2 font-bold">Tempe Tech Solutions</p>
        <p className="text-sm">Built with React 19 & Tailwind v4 🌵 Phoenix, AZ</p>
      </footer>
    </main>
  );
}

export default App;

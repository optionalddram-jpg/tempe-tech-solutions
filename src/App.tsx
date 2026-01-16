import { Hero } from './features/landing-page/components/Hero';
import { Services } from './features/landing-page/components/Services';
import { Pricing } from './features/landing-page/components/Pricing';

function App() {
  return (
    <main className="antialiased">
      <Hero />
      <Services />
      <Pricing />
      <footer className="bg-slate-950 py-10 text-center text-slate-500 border-t border-slate-900">
        © 2026 Tempe Tech Solutions. Built in the Valley.
      </footer>
    </main>
  );
}

export default App;

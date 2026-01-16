export const Testimonials = () => (
  <section className="bg-slate-900 py-20 px-6 border-t border-slate-800">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Trusted by Valley Entrepreneurs</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { name: "Sarah J.", role: "Founder, Mill Ave Coffee", quote: "Tempe Tech transformed our online ordering. We saw a 40% increase in sales within two months." },
          { name: "Marcus L.", role: "Owner, Phoenix Realty", quote: "Professional, fast, and local. They understood our market better than any big agency could." }
        ].map(t => (
          <div key={t.name} className="p-8 rounded-2xl bg-slate-950 border border-slate-800 italic text-slate-300">
            <p className="mb-4">"{t.quote}"</p>
            <div className="text-tempe-primary font-bold not-italic">{t.name} — <span className="text-slate-500 font-normal">{t.role}</span></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

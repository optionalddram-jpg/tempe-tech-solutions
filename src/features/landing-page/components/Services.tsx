const services = [
  { title: "Custom Web Apps", desc: "High-performance React applications tailored to your business logic." },
  { title: "E-Commerce", desc: "Scalable online stores with seamless payment integration." },
  { title: "SEO Optimization", desc: "Making sure your Tempe business ranks where local customers are looking." }
];

export const Services = () => (
  <section className="bg-slate-900 py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map(s => (
          <div key={s.title} className="p-8 rounded-xl bg-slate-800 border border-slate-700 hover:border-tempe-primary transition-colors">
            <h3 className="text-xl font-bold text-tempe-primary mb-4">{s.title}</h3>
            <p className="text-slate-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Pricing = () => (
  <section className="bg-tempe-dark py-20 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-white mb-12">Straightforward Pricing</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900">
          <h3 className="text-xl text-white font-bold">The MVP</h3>
          <div className="text-4xl font-bold text-tempe-primary my-4">,500</div>
          <ul className="text-slate-400 space-y-2 mb-8">
            <li>✓ Single Page Application</li>
            <li>✓ Mobile Optimized</li>
            <li>✓ 1 Year Hosting</li>
          </ul>
          <button className="w-full py-3 bg-slate-800 text-white rounded-lg font-bold">Get Started</button>
        </div>
        <div className="p-8 rounded-2xl border-2 border-tempe-primary bg-slate-900 relative">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-tempe-primary text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
          <h3 className="text-xl text-white font-bold">Business Suite</h3>
          <div className="text-4xl font-bold text-tempe-primary my-4">,000</div>
          <ul className="text-slate-400 space-y-2 mb-8">
            <li>✓ Multi-page Website</li>
            <li>✓ CMS Integration</li>
            <li>✓ Advanced SEO Pack</li>
          </ul>
          <button className="w-full py-3 bg-tempe-primary text-white rounded-lg font-bold">Select Plan</button>
        </div>
      </div>
    </div>
  </section>
);

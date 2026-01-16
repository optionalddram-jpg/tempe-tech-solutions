export const Contact = () => (
  <section className="bg-tempe-dark py-20 px-6">
    <div className="max-w-3xl mx-auto bg-slate-900 p-10 rounded-3xl border border-slate-800">
      <h2 className="text-3xl font-bold text-white mb-4 text-center">Ready to Start?</h2>
      <p className="text-slate-400 text-center mb-10">Get a free consultation for your next project.</p>
      
      <form name="contact" method="POST" data-netlify="true" className="space-y-6">
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label className="block text-slate-400 mb-2">Name</label>
          <input type="text" name="name" className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white focus:border-tempe-primary outline-none" required />
        </div>
        <div>
          <label className="block text-slate-400 mb-2">Email</label>
          <input type="email" name="email" className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white focus:border-tempe-primary outline-none" required />
        </div>
        <div>
          <label className="block text-slate-400 mb-2">Project Details</label>
          <textarea name="message" rows={4} className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-white focus:border-tempe-primary outline-none" required></textarea>
        </div>
        <button type="submit" className="w-full py-4 bg-tempe-primary text-white font-bold rounded-xl hover:bg-tempe-accent transition-all">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

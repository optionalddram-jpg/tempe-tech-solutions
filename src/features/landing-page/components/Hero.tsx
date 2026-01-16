export const Hero = () => {
  return (
    <section className="bg-tempe-dark min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Modern Web Solutions for <br />
          <span className="text-tempe-primary italic">Tempe & Phoenix</span>
        </h1>
        <p className="mt-6 text-xl text-tempe-light/70 max-w-2xl mx-auto">
          We build high-performance, production-ready platforms for local businesses 
          in the Valley of the Sun.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="bg-tempe-primary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105">
            Explore Packages
          </button>
          <button className="border border-tempe-accent text-tempe-accent hover:bg-tempe-accent hover:text-white px-8 py-4 rounded-lg font-bold transition-all">
            Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

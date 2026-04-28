import hero from "@/assets/hero.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-20 mix-blend-multiply">
        <img src={hero} alt="" width={1600} height={1200} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--cream))] via-[hsl(var(--cream))]/70 to-transparent" />

      <div className="relative container mx-auto px-6 lg:px-12 pt-40 lg:pt-48 pb-24 lg:pb-32">
        <div className="max-w-3xl">
          <div className="reveal flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--cream))]/70">
              Independent · Vendor-Neutral · Since 2004
            </span>
          </div>

          <h1 className="reveal reveal-delay-1 font-serif text-[hsl(var(--cream))] text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] mb-8">
            Implementations that <em className="text-gold not-italic font-light italic">outlast</em> the software you choose.
          </h1>

          <p className="reveal reveal-delay-2 text-lg md:text-xl text-[hsl(var(--cream))]/75 leading-relaxed max-w-2xl mb-12">
            Two decades of system implementation and business analysis across industries — delivered through a software-agnostic methodology that adapts to any platform, on any scale.
          </p>

          <div className="reveal reveal-delay-3 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-gold text-[hsl(var(--ink))] px-8 py-4 rounded-sm text-sm uppercase tracking-[0.2em] font-medium hover:opacity-90 transition"
            >
              Start an evaluation
              <span aria-hidden>→</span>
            </a>
            <a
              href="#approach"
              className="inline-flex items-center gap-3 text-[hsl(var(--cream))] px-6 py-4 text-sm uppercase tracking-[0.2em] border border-[hsl(var(--cream))]/20 hover:border-gold hover:text-gold transition"
            >
              Our approach
            </a>
          </div>
        </div>

        <div className="reveal reveal-delay-3 mt-24 lg:mt-32 grid grid-cols-2 md:grid-cols-4 gap-px bg-[hsl(var(--cream))]/10 border border-[hsl(var(--cream))]/10">
          {[
            { k: "20+", v: "Years of practice" },
            { k: "12", v: "Industries served" },
            { k: "100%", v: "Software-agnostic" },
            { k: "0", v: "Vendor incentives" },
          ].map((s) => (
            <div key={s.v} className="bg-[hsl(var(--ink-deep))] p-6 lg:p-8">
              <div className="font-serif text-4xl lg:text-5xl text-gold mb-2">{s.k}</div>
              <div className="text-xs uppercase tracking-[0.18em] text-[hsl(var(--cream))]/60">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

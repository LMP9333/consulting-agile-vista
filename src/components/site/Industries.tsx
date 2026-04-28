const industries = [
  "Financial Services", "Manufacturing", "Healthcare", "Retail & eCommerce",
  "Logistics", "Energy & Utilities", "Professional Services", "Public Sector",
  "Telecommunications", "Hospitality", "Construction", "Non-Profit",
];

const Industries = () => {
  return (
    <section id="industries" className="relative py-28 lg:py-40 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[hsl(var(--ink))]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--ink))]/60">Industries</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[hsl(var(--ink))]">
              Twenty years. <em className="font-light italic text-[hsl(var(--gold))]">Twelve sectors.</em> One discipline.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg text-[hsl(var(--ink))]/70 leading-relaxed">
              The mechanics of a strong implementation are universal. The judgment to apply them — that comes from
              having done it again, and again, and again, in environments where the stakes were real.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[hsl(var(--ink))]/10 border border-[hsl(var(--ink))]/10">
          {industries.map((i) => (
            <div
              key={i}
              className="bg-cream p-6 lg:p-8 text-[hsl(var(--ink))] hover:bg-[hsl(var(--ink))] hover:text-cream transition-colors duration-500"
            >
              <span className="font-serif text-lg lg:text-xl">{i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

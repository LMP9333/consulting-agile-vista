const steps = [
  {
    n: "01",
    t: "Discover",
    d: "We begin with your business — priorities, constraints, and the outcomes that actually move the needle. Software is the last variable, not the first.",
  },
  {
    n: "02",
    t: "Evaluate",
    d: "Independent, criteria-driven evaluation of platforms against your needs. No partnerships, no commissions, no hidden allegiances.",
  },
  {
    n: "03",
    t: "Implement",
    d: "A repeatable methodology that flexes to any system — ERP, CRM, finance, supply chain, custom builds — without losing rigor.",
  },
  {
    n: "04",
    t: "Adopt",
    d: "Change management and analyst enablement so the value of the implementation compounds long after we leave.",
  },
];

const Approach = () => {
  return (
    <section id="approach" className="relative py-28 lg:py-40 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[hsl(var(--ink))]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--ink))]/60">The Method</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[hsl(var(--ink))]">
              One methodology. <em className="font-light italic text-[hsl(var(--gold))]">Any system.</em>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-[hsl(var(--ink))]/75">
              Most consultancies are tied to a vendor — and so is their advice. We are not. Our software-agnostic
              approach means the implementation playbook is the same whether you're rolling out a global ERP,
              modernizing a finance suite, or replacing a legacy line-of-business application. The only thing that
              changes is what's right for <em className="italic">you</em>.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(var(--ink))]/10 border border-[hsl(var(--ink))]/10">
          {steps.map((s) => (
            <div key={s.n} className="bg-cream p-8 lg:p-10 group hover:bg-[hsl(var(--ink))] transition-colors duration-500">
              <div className="font-serif text-gold text-sm tracking-[0.3em] mb-6">{s.n}</div>
              <h3 className="font-serif text-2xl mb-4 text-[hsl(var(--ink))] group-hover:text-cream transition-colors">{s.t}</h3>
              <p className="text-sm leading-relaxed text-[hsl(var(--ink))]/70 group-hover:text-[hsl(var(--cream))]/80 transition-colors">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;

const services = [
  {
    t: "System Implementation",
    d: "End-to-end delivery for ERP, CRM, finance, HRIS, and custom platforms. We lead, augment, or rescue programs at any phase.",
    items: ["Program leadership", "Solution design", "Data migration", "Cutover & hypercare"],
  },
  {
    t: "Business Consulting",
    d: "Translate strategy into requirements, processes, and decisions that engineering and vendors can actually build against.",
    items: ["Process mapping", "Requirements engineering", "Stakeholder facilitation", "Operating model design"],
  },
  {
    t: "Software-Agnostic Evaluation",
    d: "An independent selection process scored against your priorities — never a vendor's. You get the right tool, with the receipts.",
    items: ["Needs assessment", "Vendor scoring matrix", "Total cost modeling", "Procurement support"],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-28 lg:py-40 bg-[hsl(var(--ink))] text-cream overflow-hidden">
      <div className="absolute inset-0 grain opacity-50" aria-hidden />
      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--cream))]/60">What we do</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Three engagements. <em className="font-light italic text-gold">One outcome.</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((s, i) => (
            <article
              key={s.t}
              className="relative border-t border-[hsl(var(--cream))]/15 pt-8 group"
            >
              <div className="absolute top-0 left-0 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />
              <div className="font-serif text-gold text-sm tracking-[0.3em] mb-6">0{i + 1}</div>
              <h3 className="font-serif text-3xl mb-5">{s.t}</h3>
              <p className="text-[hsl(var(--cream))]/70 leading-relaxed mb-8">{s.d}</p>
              <ul className="space-y-3">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-sm text-[hsl(var(--cream))]/85">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

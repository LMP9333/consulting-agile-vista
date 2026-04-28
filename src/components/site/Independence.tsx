const Independence = () => {
  return (
    <section className="relative py-28 lg:py-40 bg-[hsl(var(--ink-deep))] text-cream overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--cream))]/60">Why independence matters</span>
          </div>
          <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-[hsl(var(--cream))]">
            <span className="text-gold">“</span>We don't sell software. We don't resell software. We aren't paid by anyone who does.
            That single fact changes every recommendation we make<span className="text-gold">.”</span>
          </p>
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-[hsl(var(--cream))]/20" />
            <span className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--cream))]/60">The AL Advisory Principle</span>
            <div className="h-px flex-1 bg-[hsl(var(--cream))]/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Independence;

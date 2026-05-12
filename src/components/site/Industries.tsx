const Industries = () => {
  return (
    <section id="industries" className="relative py-28 lg:py-40 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-12 flex items-center gap-3">
          <span className="h-px w-10 bg-[hsl(var(--ink))]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--ink))]/60">Industries</span>
        </div>

        <div className="max-w-4xl">
          <p className="font-serif text-2xl md:text-3xl leading-snug text-[hsl(var(--ink))]/85">
            Our work spans a broad range of sectors — from regulated and operationally complex
            environments to fast-moving commercial and service-led businesses. The common thread is
            not the industry, but the rigor we bring to every engagement.
          </p>
          <p className="mt-8 text-lg text-[hsl(var(--ink))]/70 leading-relaxed">
            Whether the context is a global enterprise or a growing mid-market organization, the
            approach holds: understand the business first, design with intent, and implement with
            discipline. That is what makes the method portable across sectors — and what makes the
            outcomes consistent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;

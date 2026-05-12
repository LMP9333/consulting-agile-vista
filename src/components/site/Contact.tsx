const Contact = () => {
  return (
    <section id="contact" className="relative py-28 lg:py-40 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[hsl(var(--ink))]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--ink))]/60">Begin</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[hsl(var(--ink))] mb-8">
              Tell us what you're <em className="font-light italic text-[hsl(var(--gold))]">trying to change.</em>
            </h2>
            <p className="text-lg text-[hsl(var(--ink))]/70 leading-relaxed mb-10">
              A 30-minute conversation is usually enough to know whether we can help — and to give you something
              useful either way.
            </p>
            <div className="space-y-4 text-[hsl(var(--ink))]">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--ink))]/50 mb-1">Email</div>
                <a href="mailto:info@aladvisory.co.za" className="font-serif text-2xl hover:text-gold transition">info@aladvisory.co.za</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[hsl(var(--ink))] text-cream p-8 lg:p-12 shadow-elegant flex flex-col justify-center">
            <div className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--cream))]/60 mb-4">Get in touch</div>
            <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
              Send us a note and we'll be in touch within one business day.
            </h3>
            <p className="text-[hsl(var(--cream))]/70 leading-relaxed mb-10">
              Share a little about your business, the system you're considering, or the challenge
              you're trying to solve — and we'll take it from there.
            </p>
            <a
              href="mailto:info@aladvisory.co.za?subject=Enquiry%20%E2%80%94%20AL%20Advisory"
              className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-[hsl(var(--ink))] py-4 px-8 rounded-sm text-sm uppercase tracking-[0.25em] font-medium hover:opacity-90 transition self-start"
            >
              Email us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

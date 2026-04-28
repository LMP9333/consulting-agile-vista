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
                <a href="mailto:hello@aladvisory.com" className="font-serif text-2xl hover:text-gold transition">hello@aladvisory.com</a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--ink))]/50 mb-1">Direct</div>
                <a href="tel:+15555550123" className="font-serif text-2xl hover:text-gold transition">+1 (555) 555-0123</a>
              </div>
            </div>
          </div>

          <form
            className="lg:col-span-6 bg-[hsl(var(--ink))] text-cream p-8 lg:p-12 shadow-elegant"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--cream))]/60">Name</span>
                <input className="mt-2 w-full bg-transparent border-b border-[hsl(var(--cream))]/20 py-3 focus:border-gold outline-none transition" />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--cream))]/60">Company</span>
                <input className="mt-2 w-full bg-transparent border-b border-[hsl(var(--cream))]/20 py-3 focus:border-gold outline-none transition" />
              </label>
            </div>
            <label className="block mb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--cream))]/60">Email</span>
              <input type="email" className="mt-2 w-full bg-transparent border-b border-[hsl(var(--cream))]/20 py-3 focus:border-gold outline-none transition" />
            </label>
            <label className="block mb-8">
              <span className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--cream))]/60">What are you working on?</span>
              <textarea rows={4} className="mt-2 w-full bg-transparent border-b border-[hsl(var(--cream))]/20 py-3 focus:border-gold outline-none transition resize-none" />
            </label>
            <button
              type="submit"
              className="w-full bg-gradient-gold text-[hsl(var(--ink))] py-4 rounded-sm text-sm uppercase tracking-[0.25em] font-medium hover:opacity-90 transition"
            >
              Request a conversation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

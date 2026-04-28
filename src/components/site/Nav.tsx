const Nav = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-serif text-2xl tracking-tight text-[hsl(var(--ink-deep))]">Meridian</span>
          <span className="text-[hsl(var(--gold))] text-2xl font-serif leading-none">·</span>
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-[hsl(var(--ink))]/70">Advisory</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-[hsl(var(--ink))]/80">
          <a href="#approach" className="hover:text-[hsl(var(--gold))] transition-colors">Approach</a>
          <a href="#services" className="hover:text-[hsl(var(--gold))] transition-colors">Services</a>
          <a href="#industries" className="hover:text-[hsl(var(--gold))] transition-colors">Industries</a>
          <a href="#contact" className="hover:text-[hsl(var(--gold))] transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[hsl(var(--cream))] bg-gradient-gold px-5 py-3 rounded-sm hover:opacity-90 transition-opacity"
        >
          Book a call
        </a>
      </div>
    </header>
  );
};

export default Nav;

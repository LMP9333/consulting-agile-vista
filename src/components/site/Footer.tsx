const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--ink-deep))] text-[hsl(var(--cream))]/70">
      <div className="container mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-serif text-xl text-cream">Meridian</span>
          <span className="text-gold font-serif">·</span>
          <span className="text-xs uppercase tracking-[0.25em]">Advisory</span>
        </div>
        <p className="text-xs">© {new Date().getFullYear()} Meridian Advisory. Independent by design.</p>
      </div>
    </footer>
  );
};

export default Footer;

const Nav = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
        <button onClick={() => scrollToSection("top")} className="flex items-center gap-2 bg-transparent border-none cursor-pointer">
          <span className="font-serif text-2xl tracking-tight text-[hsl(var(--ink-deep))]">AL</span>
          <span className="text-[hsl(var(--gold))] text-2xl font-serif leading-none">·</span>
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-[hsl(var(--ink))]/70">Advisory</span>
        </button>
        <nav className="hidden md:flex items-center gap-10 text-sm text-[hsl(var(--ink))]/80">
          <button onClick={() => scrollToSection("approach")} className="hover:text-[hsl(var(--gold))] transition-colors bg-transparent border-none cursor-pointer p-0">Approach</button>
          <button onClick={() => scrollToSection("services")} className="hover:text-[hsl(var(--gold))] transition-colors bg-transparent border-none cursor-pointer p-0">Services</button>
          <button onClick={() => scrollToSection("industries")} className="hover:text-[hsl(var(--gold))] transition-colors bg-transparent border-none cursor-pointer p-0">Industries</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-[hsl(var(--gold))] transition-colors bg-transparent border-none cursor-pointer p-0">Contact</button>
        </nav>
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[hsl(var(--cream))] bg-gradient-gold px-5 py-3 rounded-sm hover:opacity-90 transition-opacity border-none cursor-pointer"
        >
          Book a call
        </button>
      </div>
    </header>
  );
};

export default Nav;


// const Nav = () => {
//   return (
//     <header className="absolute top-0 left-0 right-0 z-50">
//       <div className="container mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
//         <a href="#top" className="flex items-center gap-2">
//           <span className="font-serif text-2xl tracking-tight text-[hsl(var(--ink-deep))]">AL</span>
//           <span className="text-[hsl(var(--gold))] text-2xl font-serif leading-none">·</span>
//           <span className="font-sans text-xs uppercase tracking-[0.25em] text-[hsl(var(--ink))]/70">Advisory</span>
//         </a>
//         <nav className="hidden md:flex items-center gap-10 text-sm text-[hsl(var(--ink))]/80">
//           <a href="#approach" className="hover:text-[hsl(var(--gold))] transition-colors">Approach</a>
//           <a href="#services" className="hover:text-[hsl(var(--gold))] transition-colors">Services</a>
//           <a href="#industries" className="hover:text-[hsl(var(--gold))] transition-colors">Industries</a>
//           <a href="#contact" className="hover:text-[hsl(var(--gold))] transition-colors">Contact</a>
//         </nav>
//         <a
//           href="#contact"
//           className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[hsl(var(--cream))] bg-gradient-gold px-5 py-3 rounded-sm hover:opacity-90 transition-opacity"
//         >
//           Book a call
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Nav;

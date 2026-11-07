import Image from "next/image";
import logo from "../../public/ngine-logo.png";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <Image src={logo} alt="NGINE logo" width={32} priority />
          <span className="text-lg font-semibold tracking-wide">NGINE</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="brand-gradient rounded-full px-5 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}

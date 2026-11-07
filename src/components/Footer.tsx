import Image from "next/image";
import logo from "../../public/ngine-logo.png";
import { CONTACT_EMAIL } from "./Contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="NGINE logo" width={22} />
          <span>NGINE · Tallinn, Estonia</span>
        </div>
        <p>© {year} NGINE. All rights reserved.</p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-foreground">
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  );
}

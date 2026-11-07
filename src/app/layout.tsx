import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://nginetech.eu";
const title = "NGINE — Senior React & TypeScript contract development";
const description =
  "Contract web development from Tallinn, Estonia. Senior React, Next.js, TypeScript and Node.js engineering — 13 years building enterprise platforms and shipping AI-powered products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "React contractor",
    "TypeScript developer",
    "Next.js developer",
    "frontend contractor Estonia",
    "web development Tallinn",
    "freelance frontend tech lead",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "NGINE",
    type: "website",
    locale: "en_GB",
  },
  twitter: { card: "summary", title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NGINE",
  url: siteUrl,
  email: "sl@nginetech.eu",
  description,
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tallinn",
    addressCountry: "EE",
  },
  knowsAbout: ["React", "TypeScript", "Next.js", "Node.js", "Web performance", "AI integration"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

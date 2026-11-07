const reasons = [
  {
    title: "Senior from day one",
    description: "13 years of production experience means less ramp-up and fewer surprises.",
  },
  {
    title: "Enterprise-tested",
    description: "Background in large media platforms where performance and reliability are non-negotiable.",
  },
  {
    title: "Product-minded",
    description: "I build and run my own products, so I care about outcomes, not just tickets.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-widest text-magenta">About</h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Hi, I&apos;m Stan
          </p>
          <p className="mt-4 text-muted">
            I&apos;m a senior frontend developer and tech lead based in Tallinn,
            Estonia. For 13 years I&apos;ve built web applications in React and
            TypeScript — most recently leading frontend teams on enterprise
            media platforms, with Node.js microservices on the backend.
          </p>
          <p className="mt-4 text-muted">
            NGINE is my contracting studio. I work directly with founders,
            agencies and product teams across Europe and the UK — remotely or
            on site in Tallinn.
          </p>
        </div>

        <div className="grid gap-4">
          {reasons.map((r) => (
            <div key={r.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

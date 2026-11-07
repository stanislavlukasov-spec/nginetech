const steps = [
  {
    n: "01",
    title: "Intro call",
    description: "A free 30-minute call to understand your goals, stack and timeline.",
  },
  {
    n: "02",
    title: "Proposal",
    description: "A clear scope, estimate and engagement model — fixed price or day rate.",
  },
  {
    n: "03",
    title: "Build",
    description: "Weekly demos, readable code and direct communication. No middlemen.",
  },
  {
    n: "04",
    title: "Handover",
    description: "Docs, tests and a clean handover — or ongoing support if you need it.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <h2 className="text-sm font-medium uppercase tracking-widest text-cyan">Process</h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Simple, transparent, predictable
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="rounded-2xl border border-border bg-card p-6">
              <span className="brand-gradient-text text-sm font-semibold">{s.n}</span>
              <h3 className="mt-2 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

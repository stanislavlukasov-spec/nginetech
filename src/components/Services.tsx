const services = [
  {
    title: "Frontend development",
    description:
      "Fast, accessible React and Next.js apps in strict TypeScript. Design systems, complex UIs, dashboards and marketing sites.",
  },
  {
    title: "Tech lead on contract",
    description:
      "Architecture, code reviews, mentoring and delivery planning. I can lead your frontend team or bootstrap a new one.",
  },
  {
    title: "Full-stack MVPs",
    description:
      "From idea to production: Next.js front end, Node.js APIs and microservices, deployed and monitored.",
  },
  {
    title: "AI features",
    description:
      "Practical LLM integrations — assistants, content generation, image understanding and prediction models wired into real products.",
  },
  {
    title: "Rescue & modernisation",
    description:
      "Legacy JavaScript to TypeScript, class components to hooks, slow pages to fast ones. Upgrades without a rewrite.",
  },
  {
    title: "Performance & SEO audits",
    description:
      "Core Web Vitals, bundle size, rendering strategy and technical SEO — with a prioritised, actionable fix list.",
  },
];

const stack = [
  "React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "GraphQL",
  "REST", "Jest", "Playwright", "CI/CD", "AWS", "OpenAI / Claude APIs",
];

export default function Services() {
  return (
    <section id="services" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <h2 className="text-sm font-medium uppercase tracking-widest text-cyan">Services</h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            What I can do for your team
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-cyan/40">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {stack.map((t) => (
            <span key={t} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

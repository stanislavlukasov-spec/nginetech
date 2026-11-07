const stats = [
  { value: "13+", label: "years shipping production web apps" },
  { value: "Tech lead", label: "experience running frontend teams" },
  { value: "EU / UK", label: "timezone-friendly, based in Tallinn" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-24 pt-24 sm:pt-32">
      <div className="grid-fade pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 opacity-30 blur-3xl"
        style={{ backgroundImage: "linear-gradient(90deg, #1ddcfd, #a86bee, #f60fd9)" }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted">
          <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
          Available for new contracts
        </span>

        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Senior <span className="brand-gradient-text">React &amp; TypeScript</span> engineering,
          on contract
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
          I help teams build, rescue and scale web products — from enterprise
          platforms to AI-powered apps. Plug a senior tech lead into your
          project without the hiring overhead.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="brand-gradient w-full rounded-full px-6 py-3 text-sm font-semibold text-black sm:w-auto"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="w-full rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-cyan/60 sm:w-auto"
          >
            See recent work
          </a>
        </div>
      </div>

      <dl className="relative mx-auto mt-20 grid max-w-4xl gap-6 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card/60 p-6 text-center">
            <dt className="sr-only">{s.label}</dt>
            <dd className="brand-gradient-text text-3xl font-semibold">{s.value}</dd>
            <dd className="mt-2 text-sm text-muted">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

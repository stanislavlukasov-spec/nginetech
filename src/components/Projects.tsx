type Project = {
  name: string;
  tagline: string;
  description: string;
  href?: string;
  status: "Live" | "Coming soon";
  tags: string[];
};

const projects: Project[] = [
  {
    name: "PredictBet.ai",
    tagline: "AI football predictions & betting tips",
    description:
      "AI-powered match predictions across 40+ football leagues, with daily confidence scores, sure wins, and accumulator tips — all free, no account required.",
    href: "https://predictbet.ai",
    status: "Live",
    tags: ["AI", "Sports data", "Web"],
  },
  {
    name: "PredictBet App",
    tagline: "The PredictBet experience, in your pocket",
    description:
      "A native mobile companion to PredictBet.ai — push alerts for high-confidence tips, saved predictions, and a cleaner way to follow your leagues on the go.",
    status: "Coming soon",
    tags: ["Mobile", "iOS", "Android"],
  },
  {
    name: "Snappy Study",
    tagline: "Homework help for kids, powered by AI",
    description:
      "Snap a photo of any worksheet and get an instant, age-appropriate explanation in 16 languages — with read-aloud audio and a parent activity dashboard.",
    href: "https://www.snappystudy.com",
    status: "Live",
    tags: ["AI", "Education", "Mobile"],
  },
];

export default function Projects() {
  return (
    <section id="work" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <h2 className="text-sm font-medium uppercase tracking-widest text-cyan">
            Recent work
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Products I&apos;ve designed, built and shipped
          </p>
          <p className="mt-4 text-muted">
            Own products built end-to-end — the same standard of work I bring to client projects.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const CardInner = (
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors group-hover:border-cyan/50">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      project.status === "Live"
                        ? "bg-cyan/10 text-cyan"
                        : "bg-white/5 text-muted"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-muted">
                  {project.tagline}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.href && (
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                    Visit site
                    <span aria-hidden className="brand-gradient-text">
                      →
                    </span>
                  </span>
                )}
              </div>
            );

            return project.href ? (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                {CardInner}
              </a>
            ) : (
              <div key={project.name} className="group">
                {CardInner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

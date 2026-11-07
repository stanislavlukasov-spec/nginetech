export const CONTACT_EMAIL = "sl@nginetech.eu";

export default function Contact() {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Project enquiry")}&body=${encodeURIComponent(
    "Hi Stan,\n\nProject:\nTimeline:\nBudget / engagement:\n\n"
  )}`;

  return (
    <section id="contact" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="brand-border-glow rounded-3xl bg-card px-8 py-14 text-center sm:px-16">
          <h2 className="text-sm font-medium uppercase tracking-widest text-cyan">Contact</h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build something
          </p>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Tell me about your project, timeline and team. I reply within one
            working day — every email comes straight to me.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href={mailto}
              className="brand-gradient w-full rounded-full px-6 py-3 text-sm font-semibold text-black sm:w-auto"
            >
              Email {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

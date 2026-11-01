import Head from "next/head";

const features = [
  {
    title: "Answers every call",
    body: "Your AI voice agent picks up instantly, day or night, and handles every inbound conversation with a natural tone.",
  },
  {
    title: "Books and qualifies",
    body: "Captures details, checks availability, and schedules appointments or hands warm leads straight to your team.",
  },
  {
    title: "Learns your business",
    body: "Trained on your services, policies, and FAQs so every answer is accurate, on-brand, and easy to update.",
  },
];

const steps = [
  { number: "01", title: "Discover", body: "We map your call flows and the moments that matter most." },
  { number: "02", title: "Design", body: "We craft a voice, personality, and script that sounds like your brand." },
  { number: "03", title: "Deploy", body: "Go live in days, then we refine performance with real call data." },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Lunchcraft | Voice AI Agency</title>
        <meta
          name="description"
          content="Lunchcraft designs and deploys voice AI agents that answer calls, book appointments, and grow your business."
        />
      </Head>

      <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <span className="text-lg font-semibold tracking-tight">Lunchcraft</span>
            <a
              href="#contact"
              className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-medium text-zinc-950 transition hover:bg-cyan-300"
            >
              Book a demo
            </a>
          </nav>
        </header>

        <main>
          <section className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 -z-0">
              <div className="absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
            </div>
            <div className="relative mx-auto max-w-4xl px-6 py-32 text-center md:py-40">
              <p className="mb-6 inline-block rounded-full border border-cyan-400/30 px-4 py-1 text-xs uppercase tracking-widest text-cyan-300">
                Voice AI for modern businesses
              </p>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Every call answered. Every lead captured.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
                Lunchcraft builds AI voice agents that sound human, work around the clock, and turn conversations into revenue.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-cyan-400 px-8 py-3 text-sm font-medium text-zinc-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Book a demo
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-full border border-white/10 px-8 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/30 hover:bg-white/5"
                >
                  See how it works
                </a>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-24">
            <div className="grid gap-6 md:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
                >
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-3 leading-relaxed text-zinc-400">{feature.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="how-it-works" className="border-y border-white/5 bg-zinc-900/40">
            <div className="mx-auto max-w-6xl px-6 py-24">
              <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">How it works</h2>
              <div className="mt-16 grid gap-10 md:grid-cols-3">
                {steps.map((step) => (
                  <div key={step.number}>
                    <span className="font-mono text-sm text-cyan-300">{step.number}</span>
                    <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                    <p className="mt-3 leading-relaxed text-zinc-400">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Ready to hear it in action?</h2>
            <p className="mt-4 text-zinc-400">Tell us about your business and we will set up a live voice demo.</p>
            <a
              href="mailto:hello@lunchcraft.ai"
              className="mt-8 inline-block rounded-full bg-cyan-400 px-8 py-3 text-sm font-medium text-zinc-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Get in touch
            </a>
          </section>
        </main>

        <footer className="border-t border-white/5 px-6 py-8 text-center text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Lunchcraft. All rights reserved.
        </footer>
      </div>
    </>
  );
}

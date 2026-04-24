export default function HighQualityWebsite() {
  const services = [
    {
      title: "Security Architecture",
      description:
        "Secure-by-design architecture for cloud, hybrid, and enterprise platforms with strong governance and resilience.",
    },
    {
      title: "Cloud Transformation",
      description:
        "Azure, AWS, and multi-cloud architecture with landing zones, segmentation, and operational assurance built in.",
    },
    {
      title: "Risk & Assurance",
      description:
        "Threat modelling, security requirements, control design, and governance-ready documentation for regulated environments.",
    },
  ];

  const highlights = [
    "Enterprise-grade design",
    "Modern premium interface",
    "Mobile-first responsive layout",
    "Conversion-focused sections",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_25%),radial-gradient(circle_at_left,rgba(168,85,247,0.18),transparent_20%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-8">
          <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
            <div className="text-lg font-semibold tracking-wide">Nirvan Cyber Security</div>
            <nav className="hidden gap-8 text-sm text-white/80 md:flex">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
            <a
              href="#contact"
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:scale-[1.02]"
            >
              Book a Call
            </a>
          </header>

          <div className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
                Trusted architecture for secure digital transformation
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
                High-quality digital experiences built with security and style.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                We design premium websites and secure technology platforms that combine modern aesthetics,
                strong performance, and enterprise-grade credibility.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-blue-500 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
                >
                  Start Your Project
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  Explore Services
                </a>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-blue-500/20 to-violet-500/20 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/90 p-6">
                  <div className="mb-6 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="grid gap-4">
                    <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 p-5">
                      <div className="text-sm text-white/80">Security-first design</div>
                      <div className="mt-2 text-2xl font-semibold">Modern architecture for serious organisations</div>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <div className="text-sm text-slate-400">Performance</div>
                        <div className="mt-2 text-3xl font-semibold">99.9%</div>
                        <p className="mt-2 text-sm text-slate-300">Designed for speed, resilience, and reliability.</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <div className="text-sm text-slate-400">Governance</div>
                        <div className="mt-2 text-3xl font-semibold">Built-in</div>
                        <p className="mt-2 text-sm text-slate-300">Assurance-ready structure for regulated delivery.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">Services</div>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">A premium website backed by real technical depth.</h2>
          <p className="mt-4 text-lg text-slate-300">
            Built for consultants, technology businesses, and modern brands that want a strong first impression.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">Why this site works</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Designed to look premium and convert serious clients.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              This design balances strong visual impact with trust, clarity, and structure. It is ideal for a
              consultancy, architect portfolio, cyber security business, or technology advisory brand.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              "Elegant typography and spacing",
              "Clear calls to action",
              "Trust-building service sections",
              "Responsive design ready for deployment",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-500/20 via-slate-900 to-violet-500/20 p-8 md:p-12">
          <div className="max-w-3xl">
            <div className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">Contact</div>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Ready to build a high-quality website?</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Use this page as your premium starting point and customise the branding, copy, and sections to fit your business.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:hello@example.com"
                className="rounded-2xl bg-white px-6 py-3 font-medium text-slate-950"
              >
                hello@example.com
              </a>
              <a
                href="tel:+440000000000"
                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white"
              >
                +44 0000 000000
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

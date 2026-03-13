import horizontalLogo from "./assets/branding/summit-logic-horizontal.svg";
import iconLogo from "./assets/branding/summit-logic-icon.svg";

export default function SummitLogicSplashPage() {
  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Why Summit Logic", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    {
      title: "Traceability Systems",
      description:
        "Scan-based inventory and production traceability for small-to-mid manufacturers, including lot tracking, work orders, label workflows, and reporting.",
    },
    {
      title: "Legacy System Modernization",
      description:
        "Replace outdated Access databases, Excel trackers, and legacy desktop applications with modern web-based systems and reliable databases.",
    },
    {
      title: "PLC & Machine Integration",
      description:
        "Connect production equipment to dashboards, data logging, and reporting systems with practical, plant-ready integration approaches.",
    },
    {
      title: "Industrial Web Applications",
      description:
        "Custom web applications for production dashboards, quality portals, inventory systems, and plant-floor visibility.",
    },
    {
      title: "Assessments & Consulting",
      description:
        "Plant system assessments, traceability roadmaps, and modernization planning built around real operational needs and realistic implementation paths.",
    },
  ];

  const outcomes = [
    "Better inventory visibility",
    "Reliable lot and production traceability",
    "Less dependence on spreadsheets and paper logs",
    "Improved reporting and process visibility",
    "Practical modernization without enterprise software overhead",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" className="flex items-center">
            <img
              src={horizontalLogo}
              alt="Summit Logic"
              className="h-10 w-auto md:h-11"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Talk Through Your Project
            </a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <img
                src={iconLogo}
                alt="Summit Logic icon"
                className="h-16 w-16 rounded-full shadow-2xl shadow-cyan-950/40"
              />
              <div>
                <div className="text-2xl font-semibold tracking-[0.16em] text-white">
                  SUMMIT LOGIC
                </div>
                <div className="text-sm text-slate-400">
                  Practical software systems for modern manufacturing
                </div>
              </div>
            </div>

            <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
              Summit Logic · Manufacturing Software & Automation Solutions
            </div>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Modern software for manufacturers running on outdated systems.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Summit Logic helps small-to-mid manufacturers improve traceability,
              modernize legacy software, integrate machine data, and build practical
              web-based tools for the plant floor.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Request a Consultation
              </a>
            </div>
          </div>

          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                <div className="text-sm text-slate-400">Focus</div>
                <div className="mt-2 text-xl font-semibold">Manufacturing</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                <div className="text-sm text-slate-400">Specialty</div>
                <div className="mt-2 text-xl font-semibold">
                  Traceability & Modernization
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 sm:col-span-2">
                <div className="text-sm text-slate-400">Ideal Clients</div>
                <div className="mt-2 text-xl font-semibold">
                  Small-to-mid manufacturers that need practical systems, not
                  enterprise complexity.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10" id="services">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Core service offerings
          </h2>
          <p className="mt-4 text-slate-300">
            Focused solutions for manufacturers that need better data visibility,
            stronger traceability, and a realistic path away from outdated systems.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="why-us" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:px-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.18em] text-cyan-200">
              Why Summit Logic
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for plants that need results, not software bloat.
            </h2>
            <p className="mt-4 text-slate-300">
              Summit Logic combines manufacturing systems thinking with practical
              software development. The goal is not to sell enterprise complexity.
              The goal is to solve operational problems with systems that operators
              can actually use and managers can actually trust.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                <div className="text-sm font-medium text-white">
                  Manufacturing-first approach
                </div>
                <div className="mt-2 text-sm leading-7 text-slate-300">
                  Solutions are designed around production flow, traceability,
                  plant-floor usability, and operational accountability.
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                <div className="text-sm font-medium text-white">
                  Modernization without disruption
                </div>
                <div className="mt-2 text-sm leading-7 text-slate-300">
                  Improve visibility and replace outdated tools without forcing a
                  massive enterprise software rollout.
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {outcomes.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 text-slate-200"
              >
                {item}
              </div>
            ))}

            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-4 text-slate-100">
              <div className="font-medium text-white">
                Why clients choose Summit Logic
              </div>
              <div className="mt-2 text-sm leading-7 text-slate-200">
                A rare combination of software development, industrial automation,
                and systems architecture focused on real manufacturing environments.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="text-sm uppercase tracking-[0.18em] text-cyan-200">
              Typical Engagements
            </div>
            <h2 className="mt-3 text-3xl font-semibold">
              How Summit Logic helps
            </h2>

            <div className="mt-6 space-y-5 text-slate-300">
              <div>
                <div className="font-medium text-white">Assessment & Roadmap</div>
                <div className="mt-1 text-sm leading-7">
                  Review current systems, identify weak points, and deliver a
                  modernization plan.
                </div>
              </div>

              <div>
                <div className="font-medium text-white">Targeted Project Work</div>
                <div className="mt-1 text-sm leading-7">
                  Build a dashboard, modernize a legacy tool, add traceability
                  workflows, or integrate production data.
                </div>
              </div>

              <div>
                <div className="font-medium text-white">
                  Longer-Term Platform Direction
                </div>
                <div className="mt-1 text-sm leading-7">
                  Establish scalable systems that can grow from a single workflow
                  to a broader operational platform.
                </div>
              </div>
            </div>
          </div>

          <div
            className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8"
            id="contact"
          >
            <div className="text-sm uppercase tracking-[0.18em] text-cyan-200">
              Contact
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Start with a conversation
            </h2>
            <p className="mt-4 text-slate-200">
              Looking at traceability, modernization, machine data capture, or a
              legacy software replacement? Let’s discuss the current state of your
              operation and what a practical next step looks like.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-100">
              <div>
                <div className="text-slate-300">Email</div>
                <div className="mt-1 text-base font-medium">
                  summit.logic10@gmail.com
                </div>
              </div>


              <div>
                <div className="text-slate-300">Service Area</div>
                <div className="mt-1 text-base font-medium">
                  Northeast Ohio manufacturers
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-sm leading-7 text-slate-200">
              Summit Logic focuses on practical software and automation solutions
              for manufacturers that need better visibility, stronger traceability,
              and a realistic path forward from outdated systems.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import { Helmet } from "react-helmet-async";
import { Code2, Search, Bot, PenLine, ArrowUpRight } from "lucide-react";

const builds = [
  {
    title: "RentSawa",
    url: "https://rentsawa.com/",
    status: "Live",
    description:
      "Property management SaaS for Kenyan landlords and tenants, with billing, payments and maintenance workflows.",
    stack: ["React", "FastAPI", "PostgreSQL", "Railway"],
  },
  {
    title: "WhownsKenya.com",
    url: "https://whownskenya.com/",
    status: "Live",
    description:
      "Large content platform with 1,900+ posts, where I work as senior developer.",
    stack: ["WordPress", "PHP", "Technical SEO"],
  },
  {
    title: "Edunotes",
    url: "https://edunotes.co.ke/",
    status: "Live",
    description: "Notes and past papers platform for Kenyan students.",
    stack: ["WordPress", "PHP", "SEO"],
  },
  {
    title: "FootXtra",
    url: "https://footxtra.com/",
    status: "Live",
    description: "Live football data hub on a custom WordPress child theme.",
    stack: ["WordPress", "Kadence", "PHP"],
  },
  {
    title: "Website Intelligence Engine",
    url: "https://github.com/frankmash/website-intelligence-engine",
    status: "Open source",
    description:
      "Analyzes site content and structure to surface SEO and content insights.",
    stack: ["Python", "SEO"],
  },
  {
    title: "Echo Game",
    url: "https://echo-game-jade.vercel.app/",
    status: "Live",
    description: "Browser game built around memory and pattern recognition.",
    stack: ["JavaScript", "Vercel"],
  },
];

const layers = [
  ["Frontend", "React, Tailwind CSS, JavaScript, HTML and CSS"],
  ["Backend", "FastAPI, Node.js, PHP, Laravel"],
  ["Data", "PostgreSQL, MySQL, REST APIs"],
  ["WordPress", "Custom themes and plugins, WooCommerce"],
  ["Automation", "Python, Telegram bots, scrapers, custom workflows"],
  ["Search", "Technical SEO, GEO, Google Analytics, Search Console"],
  ["Shipping", "Railway, Vercel, cPanel, Git and GitHub"],
];

const services = [
  [Code2, "Web Development"],
  [Search, "SEO & GEO"],
  [Bot, "Automation & Bots"],
  [PenLine, "Content & Blogging"],
];

const work = [
  {
    role: "Founder & Developer",
    company: "Rent Sawa Technologies",
    period: "Ongoing",
    description:
      "Built and run a property management SaaS for Kenyan landlords and tenants (React, FastAPI, PostgreSQL).",
  },
  {
    role: "Full-Stack Developer | WordPress, Automation & SEO/GEO",
    company: "Schlacht Media",
    period: "2024 - Present",
    description:
      "Manage and maintain client websites, work with APIs and analytics, handle technical SEO.",
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2022 - Present",
    description: "Build websites, web apps and automation tools for clients.",
  },
  {
    role: "ICT Attachment",
    company: "Nakuru County Government - Shabab Digital Centre",
    period: "Sep - Nov 2023",
    description:
      "Resolved hardware and software issues, supported LAN management and on-site ICT support, and configured antivirus and system security.",
  },
  {
    role: "AI Data Annotator / Content Reviewer",
    company: "Remotasks",
    period: "Jan - Dec 2023",
    description: "Reviewed and evaluated AI-generated content.",
  },
  {
    role: "Content Writer",
    company: "Various Media Platforms",
    period: "2019 - 2022",
    description:
      "Researched and published SEO-optimized news and entertainment content.",
  },
];

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Frankline Macharia - Full-Stack Developer | WordPress, Automation & SEO/GEO</title>
        <meta
          name="description"
          content="Full-stack developer in Nakuru, Kenya building SaaS platforms, WordPress systems, bots and automation. See live products and work history."
        />
      </Helmet>

      <section>
        <p className="text-sm font-medium text-emerald-600">Full-Stack Developer</p>
        <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-neutral-950 sm:text-4xl">
          I build software that ships, and keeps running.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
          SaaS platforms, WordPress systems, bots and automation, designed,
          built and deployed end to end. Below is the proof.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#builds"
            className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700"
          >
            See what I've built
          </a>
          <a
            href="/contact"
            className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm text-neutral-700 transition hover:border-emerald-500 hover:text-emerald-600"
          >
            Get in touch
          </a>
        </div>
      </section>

      <section id="builds" className="mt-16 scroll-mt-8">
        <p className="text-sm font-medium text-emerald-600">Featured builds</p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-neutral-950">
          Real products, real stacks
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {builds.map((b) => (
            <a
              key={b.title}
              href={b.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-lg border border-neutral-200 bg-white p-5 transition-colors hover:border-emerald-500"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-neutral-950">{b.title}</h3>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-neutral-400 transition-colors group-hover:text-emerald-600"
                />
              </div>
              <span className="mt-1 flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {b.status}
              </span>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{b.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {b.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
        <a
          href="/projects"
          className="mt-5 inline-block text-sm text-neutral-500 transition-colors hover:text-emerald-600"
        >
          All projects →
        </a>
      </section>

      <section className="mt-16">
        <p className="text-sm font-medium text-emerald-600">Stack</p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-neutral-950">
          What I build with
        </h2>
        <dl className="mt-6 divide-y divide-neutral-200 border-t border-neutral-200">
          {layers.map(([label, tools]) => (
            <div key={label} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
              <dt className="w-28 shrink-0 text-sm font-semibold text-neutral-950">{label}</dt>
              <dd className="text-sm text-neutral-600">{tools}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-16">
        <p className="text-sm font-medium text-emerald-600">Services</p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-neutral-950">
          What I can help with
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {services.map(([Icon, title]) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-md border border-neutral-200 bg-white px-4 py-3"
            >
              <Icon size={18} className="shrink-0 text-emerald-600" />
              <span className="text-sm font-medium text-neutral-800">{title}</span>
            </div>
          ))}
        </div>
        <a
          href="/services"
          className="mt-4 inline-block text-sm text-neutral-500 transition-colors hover:text-emerald-600"
        >
          See all services →
        </a>
      </section>

      <section className="mt-16">
        <p className="text-sm font-medium text-emerald-600">Work</p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-neutral-950">
          Where I've worked
        </h2>
        <div className="mt-6 divide-y divide-neutral-200 border-t border-neutral-200">
          {work.map((job) => (
            <div key={`${job.role}-${job.company}`} className="py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-medium text-neutral-950">
                  {job.role} <span className="font-normal text-neutral-500">@ {job.company}</span>
                </h3>
                <span className="shrink-0 text-sm text-neutral-500">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-neutral-500">{job.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-lg border border-emerald-200 bg-emerald-50 p-6">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-950">
          Have something that needs building?
        </h2>
        <p className="mt-2 max-w-md text-sm leading-6 text-neutral-600">
          Tell me what you need and I'll tell you honestly how I'd build it.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-block rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700"
        >
          Get in touch →
        </a>
      </section>
    </div>
  );
}
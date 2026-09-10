import { Helmet } from "react-helmet-async";

const projects = [
  {
    title: "RentSawa",
    description:
      "Property management platform for landlords and tenants.",
    url: "https://rentsawa.com/",
  },
  {
    title: "Edunotes",
    description:
      "Educational platform for notes, past papers and learning resources.",
    url: "https://edunotes.co.ke/",
  },
  {
    title: "Website Intelligence Engine",
    description:
      "Website analysis tool focused on SEO and content insights.",
    url: "https://github.com/frankmash/website-intelligence-engine",
  },
  {
    title: "Echo Game",
    description:
      "Interactive browser game built around memory and pattern recognition.",
    url: "https://echo-game-jade.vercel.app/",
  },
];

const otherProjectsCount = 5; // WhownsKenya.com, WhownsAfrica.com, Punsly, EA Feed, RVNP Bot

const work = [
  {
    role: "Founder & Developer",
    company: "Rent Sawa Technologies",
    period: "Ongoing",
    description:
      "Built and run a property management SaaS for Kenyan landlords and tenants (React, FastAPI, PostgreSQL).",
  },
  {
    role: "Front-End & Software Developer | SEO & GEO Specialist",
    company: "Schlacht Media",
    period: "2024 — Present",
    description:
      "Manage and maintain client websites, work with APIs and analytics, handle technical SEO.",
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2022 — Present",
    description:
      "Build websites, web apps and automation tools for clients.",
  },
  {
    role: "AI Data Annotator / Content Reviewer",
    company: "Remotasks",
    period: "Jan — Dec 2023",
    description: "Reviewed and evaluated AI-generated content.",
  },
  {
    role: "Content Writer",
    company: "Various Media Platforms",
    period: "2019 — 2022",
    description:
      "Researched and published SEO-optimized news and entertainment content.",
  },
];

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Frankline Macharia — Front-End & Software Developer | SEO & GEO Specialist</title>
        <meta
          name="description"
          content="Front-end & software developer, SEO/GEO specialist in Nakuru, Kenya. Founder of Rent Sawa Technologies. See selected projects and work history."
        />
      </Helmet>

      {/* SELECTED WORK / PROJECTS */}
      <section>
        <p className="text-sm font-medium text-emerald-600">Selected work</p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-neutral-950">
          Things I've built
        </h2>

        <ul className="mt-8 divide-y divide-neutral-200 border-t border-neutral-200">
          {projects.map((project) => (
            <li key={project.title}>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-baseline justify-between gap-4 py-5"
              >
                <span>
                  <span className="font-medium text-neutral-950 transition-colors group-hover:text-emerald-600">
                    {project.title}
                  </span>
                  <span className="ml-2 text-sm text-neutral-500">
                    — {project.description}
                  </span>
                </span>

                <span className="shrink-0 text-neutral-300 transition-colors group-hover:text-emerald-600">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/projects"
          className="mt-5 inline-block text-sm text-neutral-500 transition-colors hover:text-emerald-600"
        >
          + {otherProjectsCount} more projects →
        </a>
      </section>

      {/* WORK / EMPLOYMENT HISTORY */}
      <section className="mt-16">
        <p className="text-sm font-medium text-emerald-600">Work</p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight text-neutral-950">
          Where I've worked
        </h2>

        <div className="mt-8 divide-y divide-neutral-200 border-t border-neutral-200">
          {work.map((job) => (
            <div key={`${job.role}-${job.company}`} className="py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-medium text-neutral-950">
                  {job.role}{" "}
                  <span className="font-normal text-neutral-500">
                    @ {job.company}
                  </span>
                </h3>
                <span className="shrink-0 text-sm text-neutral-500">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-500">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="mt-16 max-w-lg">
        <p className="text-sm font-medium text-emerald-600">About</p>
        <p className="mt-2 text-base leading-7 text-neutral-600">
          I build websites, web apps and automation tools that solve
          practical problems — currently focused on web development and
          SEO at Schlacht Media, alongside founding Rent Sawa Technologies
          and freelance work.
        </p>
      </section>
    </div>
  );
}
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
  {
    title: "WhownsKenya.com",
    description: "Content platform covering people and topics in Kenya.",
    url: "https://whownskenya.com/",
  },
  {
    title: "WhownsAfrica.com",
    description: "Content platform covering people and topics across Africa.",
    url: "https://whownsafrica.com/",
  },
  {
    title: "Punsly",
    description: "Content and entertainment website.",
    url: "https://punsly.com/",
  },
  {
    title: "EA Feed",
    description: "News and content aggregation site.",
    url: "https://eafeed.com/",
  },
  {
    title: "RVNP Customer Service Bot",
    description:
      "Chatbot for Rift Valley National Polytechnic helping students with queries on courses, accommodation and HELB loans. Built as a contributor, 2025.",
    url: "https://github.com/nevil-ing/customer-service-bot--RVNP",
  },
];

export default function Projects() {
  return (
    <div>
      <Helmet>
        <title>Projects — Frankline Macharia</title>
        <meta
          name="description"
          content="Projects built by Frankline Macharia, including RentSawa, Edunotes, Website Intelligence Engine and more."
        />
      </Helmet>

      <p className="text-sm font-medium text-emerald-600">Projects</p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight text-neutral-950">
        Things I've built
      </h1>

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
    </div>
  );
}
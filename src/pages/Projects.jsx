import StackCard from "../components/StackCard";
import { ArrowUpRight } from "lucide-react";
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
    title: "FootXtra",
    description: "Live football data hub on a custom WordPress child theme.",
    url: "https://footxtra.com/",
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
        <title>Projects - Frankline Macharia</title>
        <meta name="description" content="Projects built by Frankline Macharia, including RentSawa, Edunotes, FootXtra and more." />
      </Helmet>
      <StackCard index={0}>
        <p className="text-sm font-medium text-emerald-600">Projects</p>
        <h1 className="mt-1 text-2xl font-bold text-neutral-950">Things I've built</h1>
      </StackCard>
      {projects.map((p, i) => (
        <StackCard key={p.title} index={i + 1}>
          <a href={p.url} target="_blank" rel="noreferrer" className="group flex items-start justify-between gap-4">
            <span>
              <span className="font-semibold text-neutral-950 transition-colors group-hover:text-emerald-600">{p.title}</span>
              <span className="mt-1 block text-sm leading-6 text-neutral-600">{p.description}</span>
            </span>
            <ArrowUpRight size={18} className="mt-1 shrink-0 text-neutral-400 transition-colors group-hover:text-emerald-600" />
          </a>
        </StackCard>
      ))}
    </div>
  );
}
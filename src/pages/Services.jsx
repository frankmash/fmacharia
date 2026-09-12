import { Helmet } from "react-helmet-async";
import { Code2, Search, Bot, PenLine } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom websites, web apps and WordPress builds. From a landing page to a full SaaS platform, built with React, PHP, or WordPress depending on what the job actually needs.",
  },
  {
    icon: Search,
    title: "SEO & GEO",
    description:
      "Technical SEO and Generative Engine Optimization, helping sites rank in traditional search and get surfaced by AI answer engines like ChatGPT and Google AI Overviews.",
  },
  {
    icon: Bot,
    title: "Automation & Bots",
    description:
      "Telegram bots, workflow automation and custom tools that remove repetitive manual work, built in Python.",
  },
  {
    icon: PenLine,
    title: "Content & Blogging",
    description:
      "SEO-optimized content writing for blogs and websites that need to actually rank and hold a reader's attention, not just fill space.",
  },
];

export default function Services() {
  return (
    <div>
      <Helmet>
        <title>Services — Frankline Macharia</title>
        <meta
          name="description"
          content="Web development, SEO/GEO, automation and content services from Frankline Macharia, a front-end & software developer based in Nakuru, Kenya."
        />
      </Helmet>

      <p className="text-sm font-medium text-emerald-600">Services</p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight text-neutral-950">
        What I can help with
      </h1>

      <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
        Take an idea, build it, make it grow. Here's where I can help.
      </p>

      <div className="mt-8 divide-y divide-neutral-200 border-t border-neutral-200">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="flex gap-4 py-6">
              <Icon size={22} className="mt-0.5 shrink-0 text-emerald-600" />
              <div>
                <h3 className="text-base font-medium text-neutral-950">
                  {service.title}
                </h3>
                <p className="mt-1 max-w-xl text-sm leading-6 text-neutral-500">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <a
        href="/contact"
        className="mt-8 inline-block rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700"
      >
        Get in touch →
      </a>
    </div>
  );
}

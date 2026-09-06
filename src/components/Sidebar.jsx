import { Link, useLocation } from "react-router-dom";
import { Code2, Briefcase, Mail, Newspaper } from "lucide-react";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.42-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/writing", label: "Writing" },
  { to: "/cv", label: "CV" },
  { to: "/contact", label: "Contact" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="flex shrink-0 flex-col gap-8 sm:sticky sm:top-16 sm:h-fit sm:w-56">
      <div>
        <div className="flex flex-row-reverse items-center justify-end gap-4 sm:flex-col sm:items-start sm:justify-start sm:gap-0">
          {/* PHOTO ZOOM: to zoom in more, raise the number in scale(1.15) below.
              1.0 = no zoom (full photo), 1.15 = current, 2.0 = much closer.
              To move which part of the photo shows, adjust objectPosition:
              "50% 0%" = horizontally centered, top of photo aligned to top
              (shows your forehead). Raise the second number (e.g. "50% 15%")
              to crop in from the top and show more chest/shoulders instead. */}
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-emerald-500 bg-white sm:h-20 sm:w-20">
            <img
              src="/images/frank.jpg"
              alt="Frankline Macharia"
              className="h-full w-full object-cover"
              style={{ objectPosition: "50% 0%", transform: "scale(1.15)" }}
            />
          </div>

          <h1 className="mt-1 flex items-baseline gap-2 whitespace-nowrap sm:mt-4">
            <span className="text-2xl font-extrabold tracking-tight text-neutral-950">
              Frankline
            </span>
            <span className="font-script text-3xl leading-none text-emerald-600">
              Macharia
            </span>
          </h1>
        </div>

        <p className="mt-1 text-sm text-neutral-500">
          Web Developer & SEO Specialist
        </p>
        <p className="text-sm text-neutral-500">Eldoret, Kenya</p>

        <ul className="mt-4 space-y-2 text-sm text-neutral-500">
          <li className="flex items-center gap-2">
            <Code2 size={15} className="shrink-0 text-emerald-600" />
            4+ years building for the web
          </li>
          <li className="flex items-center gap-2">
            <Briefcase size={15} className="shrink-0 text-emerald-600" />
            Currently at Schlacht Media
          </li>
        </ul>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <a
            href="mailto:franklinemacharia0@gmail.com"
            title="Email"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 transition-colors hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600"
          >
            <Mail size={17} />
          </a>
          <a
            href="https://github.com/frankmash"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 transition-colors hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600"
          >
            <GithubIcon width={17} height={17} />
          </a>
          <a
            href="https://linkedin.com/in/frankline-macharia/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 transition-colors hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600"
          >
            <LinkedinIcon width={17} height={17} />
          </a>
          <a
            href="https://muckrack.com/frankline-macharia/bio"
            target="_blank"
            rel="noreferrer"
            title="MuckRack"
            aria-label="MuckRack"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 transition-colors hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600"
          >
            <Newspaper size={17} />
          </a>
        </div>
      </div>

      <nav className="flex flex-row flex-wrap gap-x-5 gap-y-2 text-sm text-neutral-500 sm:flex-col sm:gap-2">
        {navLinks.map((link) => {
          const active = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={
                active
                  ? "font-medium text-emerald-600"
                  : "transition-colors hover:text-emerald-600"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
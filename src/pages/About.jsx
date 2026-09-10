import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <div className="max-w-2xl">
      <Helmet>
        <title>About — Frankline Macharia</title>
        <meta
          name="description"
          content="About Frankline Macharia — front-end & software developer and SEO/GEO specialist based in Nakuru, Kenya, currently at Schlacht Media and founder of Rent Sawa Technologies."
        />
      </Helmet>

      <p className="text-sm font-medium text-emerald-600">About</p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight text-neutral-950">
        Frankline Macharia
      </h1>

      <div className="mt-6 space-y-5 text-base leading-7 text-neutral-600">
        <p>
          I'm a front-end & software developer and SEO/GEO specialist based in Nakuru,
          Kenya, with over four years of hands-on experience building
          websites, web applications, automation tools and content
          platforms.
        </p>
        <p>
          I currently work at Schlacht Media, where I manage and maintain
          client websites, work with APIs and analytics, and handle
          technical SEO. Alongside that, I'm the founder and developer of
          Rent Sawa Technologies, a property management SaaS for Kenyan
          landlords and tenants, and I take on freelance projects and
          maintain a handful of my own products and content platforms.
        </p>
        <p>
          I studied IT, and my day-to-day work spans JavaScript, PHP,
          Python, WordPress, REST APIs and SQL databases. I care as much
          about a site actually ranking and performing as I do about it
          working.
        </p>
      </div>

      <div className="mt-10">
        <p className="text-sm text-neutral-500">Skills</p>
        <div className="mt-3 space-y-2 text-sm">
          <p>
            <span className="font-medium text-neutral-950">
              Programming:
            </span>{" "}
            <span className="text-neutral-500">
              JavaScript, PHP, Python, HTML, CSS
            </span>
          </p>
          <p>
            <span className="font-medium text-neutral-950">
              Web & Databases:
            </span>{" "}
            <span className="text-neutral-500">
              WordPress, MySQL, REST APIs, JSON
            </span>
          </p>
          <p>
            <span className="font-medium text-neutral-950">Tools:</span>{" "}
            <span className="text-neutral-500">
              Git, GitHub, VS Code, cPanel, Chrome DevTools
            </span>
          </p>
        </div>
      </div>

      <div className="mt-10 flex gap-3">
        <a
          href="/cv"
          className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 transition hover:border-emerald-500 hover:text-emerald-600"
        >
          View CV
        </a>
        <a
          href="/contact"
          className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 transition hover:border-emerald-500 hover:text-emerald-600"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}
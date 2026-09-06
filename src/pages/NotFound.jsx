import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center py-10 text-center sm:items-start sm:text-left">
      <Helmet>
        <title>Page Not Found — Frankline Macharia</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="relative mx-auto sm:mx-0">
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          className="animate-float-ghost"
        >
          <path
            d="M70 20c-24 0-42 18-42 42v46c0 4 4 6 7 4l9-7 9 7c2 2 5 2 7 0l10-8 10 8c2 2 5 2 7 0l9-7 9 7c3 2 7 0 7-4V62c0-24-18-42-42-42z"
            fill="#059669"
            opacity="0.12"
          />
          <path
            d="M70 24c-21 0-38 17-38 38v50l7-6 8 6 8-6 7 6 8-6 8 6 7-6V62c0-21-17-38-38-38z"
            fill="#059669"
          />
          <circle cx="56" cy="60" r="6" fill="#fafafa" />
          <circle cx="84" cy="60" r="6" fill="#fafafa" />
          <circle cx="56" cy="60" r="2.5" fill="#0a0a0a" />
          <circle cx="84" cy="60" r="2.5" fill="#0a0a0a" />
          <path
            d="M60 78c3 4 17 4 20 0"
            stroke="#fafafa"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        <div
          className="mx-auto h-3 w-20 rounded-full bg-neutral-900/10 blur-sm animate-float-shadow sm:mx-0"
          aria-hidden="true"
        />
      </div>

      <p className="mt-8 text-sm font-medium text-emerald-600">404</p>
      <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
        Boo — this page doesn't exist.
      </h1>
      <p className="mt-4 max-w-md text-base leading-7 text-neutral-600">
        Whatever you were looking for wandered off. It might have moved,
        or the link might just be wrong.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
        <a
          href="/"
          className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700"
        >
          ← Back home
        </a>
        <a
          href="/projects"
          className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm text-neutral-700 transition hover:border-emerald-500 hover:text-emerald-600"
        >
          See projects
        </a>
        <a
          href="/contact"
          className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm text-neutral-700 transition hover:border-emerald-500 hover:text-emerald-600"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

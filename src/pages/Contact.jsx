import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <div className="max-w-2xl">
      <Helmet>
        <title>Contact — Frankline Macharia</title>
        <meta
          name="description"
          content="Get in touch with Frankline Macharia — email, GitHub, LinkedIn and MuckRack."
        />
      </Helmet>

      <p className="text-sm font-medium text-emerald-600">Contact</p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight text-neutral-950">
        Let's talk
      </h1>

      <p className="mt-4 text-base leading-7 text-neutral-600">
        Have an opportunity, a project, or just want to say hi — email is
        the fastest way to reach me.
      </p>

      <div className="mt-8 space-y-3 text-sm">
        <p>
          <span className="text-neutral-500">Email</span>{" "}
          <a
            href="mailto:franklinemacharia0@gmail.com"
            className="text-neutral-950 underline decoration-emerald-300 underline-offset-4 hover:decoration-emerald-600 hover:text-emerald-700"
          >
            franklinemacharia0@gmail.com
          </a>
        </p>
        <p>
          <span className="text-neutral-500">GitHub</span>{" "}
          <a
            href="https://github.com/frankmash"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-950 underline decoration-emerald-300 underline-offset-4 hover:decoration-emerald-600 hover:text-emerald-700"
          >
            github.com/frankmash
          </a>
        </p>
        <p>
          <span className="text-neutral-500">LinkedIn</span>{" "}
          <a
            href="https://linkedin.com/in/frankline-macharia/"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-950 underline decoration-emerald-300 underline-offset-4 hover:decoration-emerald-600 hover:text-emerald-700"
          >
            linkedin.com/in/frankline-macharia
          </a>
        </p>
        <p>
          <span className="text-neutral-500">MuckRack</span>{" "}
          <a
            href="https://muckrack.com/frankline-macharia/bio"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-950 underline decoration-emerald-300 underline-offset-4 hover:decoration-emerald-600 hover:text-emerald-700"
          >
            muckrack.com/frankline-macharia
          </a>
        </p>
      </div>
    </div>
  );
}
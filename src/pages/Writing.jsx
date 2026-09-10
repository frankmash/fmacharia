import { Helmet } from "react-helmet-async";

export default function Writing() {
  return (
    <div className="max-w-2xl">
      <Helmet>
        <title>Writing - Frankline Macharia</title>
        <meta
          name="description"
          content="Journalism and articles by Frankline Macharia, freelance journalist covering finance and politics."
        />
      </Helmet>

      <p className="text-sm font-medium text-emerald-600">Writing</p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight text-neutral-950">
        Journalism
      </h1>

      <p className="mt-4 text-base leading-7 text-neutral-600">
        Alongside web development, I write as a freelance journalist,
        covering finance and politics for a range of outlets. My full,
        up-to-date list of published articles lives on MuckRack.
      </p>

      <a
        href="https://muckrack.com/frankline-macharia/articles"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700"
      >
        View my articles on MuckRack ↗
      </a>
    </div>
  );
}
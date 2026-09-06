import { Helmet } from "react-helmet-async";

export default function Cv() {
  return (
    <div className="max-w-2xl">
      <Helmet>
        <title>CV — Frankline Macharia</title>
        <meta
          name="description"
          content="Download the CV of Frankline Macharia, web developer and SEO/SEM specialist based in Eldoret, Kenya."
        />
      </Helmet>

      <p className="text-sm font-medium text-emerald-600">CV</p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight text-neutral-950">
        Curriculum Vitae
      </h1>

      <p className="mt-4 text-base leading-7 text-neutral-600">
        Web developer & SEO/SEM specialist — experience, projects and
        skills, in one PDF.
      </p>

      <a
        href="/files/Frankline_Macharia_CV.pdf"
        download
        className="mt-6 inline-block rounded-full border border-neutral-300 px-5 py-2.5 text-sm text-neutral-700 transition hover:border-emerald-500 hover:text-emerald-600"
      >
        Download CV (PDF) ↓
      </a>

      <div className="mt-10 overflow-hidden rounded-xl border border-neutral-200">
        <iframe
          src="/files/Frankline_Macharia_CV.pdf"
          title="Frankline Macharia CV"
          className="h-[70vh] w-full"
        />
      </div>
    </div>
  );
}
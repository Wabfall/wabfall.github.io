import { about, personal } from "../data/portfolio";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";
import { ArrowRight, Download } from "lucide-react";

export default function About() {
  const { lang } = useLang();

  return (
    <section id="about" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="text-slate-500 text-xs font-medium uppercase tracking-widest mb-10">
          {ui.about.sectionLabel[lang]}
        </p>

        <div className="grid md:grid-cols-[5fr_7fr] gap-14 items-start">
          {/* Left — Hook + CTA */}
          <div className="md:sticky md:top-28">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              {about.hook[0][lang]}
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-300 leading-tight">
              {about.hook[1][lang]}
            </h2>

            <div className="mt-10 flex flex-col gap-3">
              <a
                href={personal.cv}
                download
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors group"
              >
                <Download size={15} className="text-slate-500 group-hover:text-slate-300 transition-colors" />
                {ui.about.downloadCV[lang]}
                <ArrowRight size={13} className="opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors"
              >
                {personal.email}
              </a>
            </div>
          </div>

          {/* Right — Paragraphs */}
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-slate-300 text-base leading-relaxed">
                {p[lang]}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

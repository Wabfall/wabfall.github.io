import { personal, stats } from "../data/portfolio";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";
import { MapPin, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Hero() {
  const { lang } = useLang();

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-medium mb-8 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
          {personal.badge[lang]}
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
          {personal.name}
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 font-medium mb-2">
          {personal.title[lang]}
        </p>
        <p className="text-lg text-slate-500 mb-6">{personal.subtitle[lang]}</p>

        <div className="flex items-center justify-center gap-2 text-slate-600 text-sm mb-10">
          <MapPin size={14} />
          <span>{personal.location}</span>
        </div>

        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          {personal.tagline[lang]}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition-colors"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <a
            href={personal.cv}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 hover:border-slate-600 transition-colors"
          >
            <Download size={15} />
            {ui.hero.downloadCV[lang]}
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-500 font-semibold text-sm transition-colors"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-500 font-semibold text-sm transition-colors"
          >
            <Mail size={15} />
            {ui.hero.contact[lang]}
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 pt-10 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-lg mx-auto">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-white tracking-tight">{s.value}</p>
              <p className="text-slate-600 text-xs mt-1 uppercase tracking-wider">{s.label[lang]}</p>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 flex justify-center">
          <a href="#about" className="text-slate-700 hover:text-slate-500 transition-colors">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

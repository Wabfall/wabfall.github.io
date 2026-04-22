import { personal } from "../data/portfolio";
import { useLang } from "../lib/lang";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="py-12 px-6 border-t border-slate-200 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-slate-900 font-extrabold text-lg">{personal.name}</p>
          <p className="text-slate-400 text-sm font-medium">{personal.title[lang]}</p>
        </div>

        <div className="flex items-center gap-3">
          <a href={personal.github} target="_blank" rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all border border-slate-200"
            aria-label="GitHub">
            <GithubIcon size={17} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-indigo-50 text-indigo-400 hover:text-indigo-600 hover:bg-indigo-100 transition-all border border-indigo-200"
            aria-label="LinkedIn">
            <LinkedinIcon size={17} />
          </a>
          <a href={`mailto:${personal.email}`}
            className="px-4 py-2 rounded-xl bg-slate-50 text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all border border-slate-200 text-sm font-mono">
            {personal.email}
          </a>
        </div>

        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Etienne Chevrollier
        </p>
      </div>
    </footer>
  );
}

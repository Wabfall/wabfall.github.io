import { personal } from "../data/portfolio";
import { useLang } from "../lib/lang";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="py-12 px-6 border-t border-slate-800">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-white font-bold text-lg">{personal.name}</p>
          <p className="text-slate-400 text-sm">{personal.title[lang]}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-600"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-indigo-300 hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-600"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="px-4 py-2 rounded-xl bg-slate-800 text-slate-400 hover:text-indigo-300 hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-600 text-sm font-medium"
          >
            {personal.email}
          </a>
        </div>

        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Etienne Chevrollier
        </p>
      </div>
    </footer>
  );
}

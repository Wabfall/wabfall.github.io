import { projects } from "../data/portfolio";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";
import { SectionHeader } from "./Experience";
import { FolderOpen, Star } from "lucide-react";
import { GithubIcon } from "./Icons";
import { Link } from "react-router-dom";

export default function Projects() {
  const { lang } = useLang();
  const featured = projects.filter((p) => p.highlight);
  const others = projects.filter((p) => !p.highlight);

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeader icon={<FolderOpen size={20} />} title={ui.sections.projects[lang]} />

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featured.map((p, i) => (
            <ProjectCard key={i} project={p} featured />
          ))}
        </div>

        {/* Other projects */}
        <h3 className="text-slate-400 font-medium text-sm uppercase tracking-widest mb-6">
          {ui.projects.others[lang]}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[0];
  featured?: boolean;
}) {
  const { lang } = useLang();

  return (
    <div className={`relative bg-slate-800/40 border rounded-2xl p-6 flex flex-col transition-colors duration-200 ${
      featured ? "border-slate-600 hover:border-slate-500" : "border-slate-700/60 hover:border-slate-600"
    }`}>
      {featured && (
        <div className="absolute top-4 right-4 flex items-center gap-1 text-slate-500 text-xs">
          <Star size={11} fill="currentColor" />
          <span>{ui.projects.featured[lang]}</span>
        </div>
      )}

      <div className="mb-3">
        <FolderOpen size={20} className="text-slate-500" />
      </div>

      <h3 className="text-white font-bold text-base mb-3 pr-16 leading-snug">
        {project.title[lang]}
      </h3>

      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
        {project.description[lang]}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="px-2 py-0.5 rounded-md bg-slate-700/80 text-slate-300 text-xs">
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <GithubIcon size={14} />
            Code
          </a>
        ) : (
          <span className="text-xs text-slate-600 italic">{ui.projects.internal[lang]}</span>
        )}

        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 font-medium transition-colors"
        >
          {ui.projects.viewProject[lang]}
        </Link>
      </div>
    </div>
  );
}

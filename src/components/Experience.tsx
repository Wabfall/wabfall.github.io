import { experiences, type Category, type ProjectCategory } from "../data/portfolio";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";
import { Briefcase, MapPin, Calendar, Code2, Database, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";

export function categoryConfig(category: Category) {
  if (category === "software") return {
    label: "Software",
    accent: "border-l-violet-400",
    dotBorder: "border-slate-200",
    dotIcon: "text-slate-400",
    badge: "bg-violet-50 border-violet-200 text-violet-700",
    icon: <Code2 size={10} />,
  };
  if (category === "data") return {
    label: "Data",
    accent: "border-l-emerald-400",
    dotBorder: "border-slate-200",
    dotIcon: "text-slate-400",
    badge: "bg-emerald-50 border-emerald-200 text-emerald-700",
    icon: <Database size={10} />,
  };
  if (category === "both") return {
    label: "Data & Software",
    accent: "border-l-indigo-400",
    dotBorder: "border-slate-200",
    dotIcon: "text-slate-400",
    badge: "bg-indigo-50 border-indigo-200 text-indigo-700",
    icon: <Layers size={10} />,
  };
  return null;
}

export function projectCategoryConfig(cat: ProjectCategory) {
  if (cat === "fullstack") return {
    label: "Full-Stack",
    badge: "bg-violet-50 border-violet-200 text-violet-700",
    icon: <Layers size={10} />,
  };
  if (cat === "api") return {
    label: "API & Backend",
    badge: "bg-blue-50 border-blue-200 text-blue-700",
    icon: <Code2 size={10} />,
  };
  if (cat === "data") return {
    label: "Data",
    badge: "bg-emerald-50 border-emerald-200 text-emerald-700",
    icon: <Database size={10} />,
  };
}

export default function Experience() {
  const { lang } = useLang();

  return (
    <section id="experience" className="py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeader icon={<Briefcase size={18} />} title={ui.sections.experience[lang]} />

        <div className="space-y-6">
          {experiences.map((exp, i) => {
            const cat = categoryConfig(exp.category);
            return (
              <div key={i} className={`bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border-l-4 ${cat?.accent ?? "border-l-slate-300"}`}>
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div className="flex items-start gap-4">
                      {exp.icon ? (
                        <div className="h-11 rounded-xl bg-slate-50 px-3 py-1.5 flex items-center justify-center flex-shrink-0 ring-1 ring-slate-200">
                          <img src={exp.icon} alt={exp.company} className="h-full w-auto max-w-[110px] object-contain" />
                        </div>
                      ) : (
                        <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0">
                          <Briefcase size={18} className="text-slate-400" />
                        </div>
                      )}
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-0.5">
                          <h3 className="text-slate-900 font-bold text-lg leading-tight">{exp.role[lang]}</h3>
                          {cat && (
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-semibold ${cat.badge}`}>
                              {cat.icon} {cat.label}
                            </span>
                          )}
                        </div>
                        <p className="text-indigo-600 font-bold text-base">{exp.company}</p>
                        <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-slate-400 font-medium">
                          <span className="flex items-center gap-1"><Calendar size={11} />{exp.period}</span>
                          <span className="flex items-center gap-1"><MapPin size={11} />{exp.location}</span>
                          <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">{exp.type[lang]}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights[lang].map((h, j) => (
                      <li key={j} className="text-slate-600 text-sm flex gap-2.5 leading-relaxed">
                        <span className="text-indigo-400 mt-1 flex-shrink-0 font-bold">·</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>

                  {exp.github && (
                    <a href={exp.github} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-xs text-slate-400 hover:text-indigo-600 transition-colors font-medium">
                      <GithubIcon size={13} /> {ui.projects.viewGithub[lang]}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="mb-10">
      <div className="inline-flex items-center gap-2 text-indigo-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">
        <div className="p-1.5 rounded-lg bg-indigo-50 border border-indigo-100">
          {icon}
        </div>
      </div>
      <h2 className="text-4xl font-extrabold text-slate-900">{title}</h2>
    </div>
  );
}

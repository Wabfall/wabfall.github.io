import { experiences, type Category } from "../data/portfolio";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";
import { Briefcase, MapPin, Calendar, Code2, Database, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";

export function categoryConfig(category: Category) {
  if (category === "software") return {
    label: "Software",
    dotBorder: "border-slate-500",
    dotIcon: "text-slate-400",
    badge: "bg-slate-700/50 border-slate-600 text-slate-300",
    icon: <Code2 size={10} />,
  };
  if (category === "data") return {
    label: "Data",
    dotBorder: "border-slate-500",
    dotIcon: "text-slate-400",
    badge: "bg-slate-700/50 border-slate-600 text-slate-300",
    icon: <Database size={10} />,
  };
  if (category === "both") return {
    label: "Software & Data",
    dotBorder: "border-slate-500",
    dotIcon: "text-slate-400",
    badge: "bg-slate-700/50 border-slate-600 text-slate-300",
    icon: <Layers size={10} />,
  };
  return null;
}

export default function Experience() {
  const { lang } = useLang();

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader icon={<Briefcase size={20} />} title={ui.sections.experience[lang]} />

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-slate-600 to-transparent ml-5 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => {
              const cat = categoryConfig(exp.category);
              return (
                <div key={i} className="relative md:pl-16">
                  <div className={`hidden md:flex absolute left-0 top-6 w-10 h-10 rounded-full bg-white border-2 ${cat?.dotBorder ?? "border-indigo-500"} items-center justify-center overflow-hidden`}>
                    {exp.icon ? (
                      <img src={exp.icon} alt={exp.company} className="w-7 h-7 object-contain" />
                    ) : (
                      <Briefcase size={14} className={cat?.dotIcon ?? "text-indigo-400"} />
                    )}
                  </div>

                  <div className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6 hover:border-slate-600 hover:bg-slate-800/60 transition-colors duration-200">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        {exp.icon ? (
                          <div className="h-12 rounded-xl bg-white px-3 py-1.5 flex items-center justify-center flex-shrink-0 shadow-md ring-1 ring-slate-600/40">
                            <img src={exp.icon} alt={exp.company} className="h-full w-auto max-w-[120px] object-contain" />
                          </div>
                        ) : (
                          <div className={`w-12 h-12 rounded-2xl bg-slate-700/60 border-2 ${cat?.dotBorder ?? "border-indigo-500"} flex items-center justify-center flex-shrink-0`}>
                            <Briefcase size={20} className={cat?.dotIcon ?? "text-indigo-400"} />
                          </div>
                        )}
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-white font-bold text-lg">{exp.role[lang]}</h3>
                            {cat && (
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-xs font-medium ${cat.badge}`}>
                                {cat.icon}{cat.label}
                              </span>
                            )}
                          </div>
                          <p className="text-slate-300 font-semibold">{exp.company}</p>
                          <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-slate-400">
                            <span className="flex items-center gap-1"><Calendar size={11} />{exp.period}</span>
                            <span className="flex items-center gap-1"><MapPin size={11} />{exp.location}</span>
                            <span className="px-2 py-0.5 rounded-md bg-slate-700 text-slate-300 text-xs">{exp.type[lang]}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.highlights[lang].map((h, j) => (
                        <li key={j} className="text-slate-300 text-sm flex gap-2">
                          <span className="text-slate-600 mt-1 flex-shrink-0">›</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-700/50 border border-slate-600/50 text-slate-400 text-xs font-medium">
                          {t}
                        </span>
                      ))}
                    </div>

                    {exp.github && (
                      <a href={exp.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-sm text-slate-400 hover:text-indigo-300 transition-colors">
                        <GithubIcon size={14} />
                        {ui.projects.viewGithub[lang]}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-12">
      <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400">
        {icon}
      </div>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent ml-2" />
    </div>
  );
}

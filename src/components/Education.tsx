import { education, type Category } from "../data/portfolio";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";
import { SectionHeader, categoryConfig } from "./Experience";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  const { lang } = useLang();

  return (
    <section id="education" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-4xl mx-auto">
        <SectionHeader icon={<GraduationCap size={20} />} title={ui.sections.education[lang]} />

        <div className="space-y-6">
          {education.map((edu, i) => {
            const cat = categoryConfig(edu.category as Category);
            return (
              <div key={i} className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6 hover:border-slate-600 transition-colors duration-200">
                <div className="flex items-start gap-4 mb-4">
                  {edu.icon ? (
                    <div className="h-12 rounded-xl bg-white px-3 py-1.5 flex items-center justify-center flex-shrink-0 shadow-md ring-1 ring-slate-600/40">
                      <img src={edu.icon} alt={edu.school} className="h-full w-auto max-w-[120px] object-contain" />
                    </div>
                  ) : (
                    <div className={`w-12 h-12 rounded-2xl bg-slate-700/60 border-2 ${cat?.dotBorder ?? "border-slate-600"} flex items-center justify-center flex-shrink-0`}>
                      <GraduationCap size={20} className={cat?.dotIcon ?? "text-slate-400"} />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-white font-bold text-base">{edu.school}</h3>
                      {cat && (
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-xs font-medium ${cat.badge}`}>
                          {cat.icon}{cat.label}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 text-sm mt-0.5">{edu.degree[lang]}</p>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs mt-1">
                      <Calendar size={11} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-1.5">
                  {edu.details[lang].map((d, j) => (
                    <li key={j} className="text-slate-300 text-sm flex gap-2">
                      <span className="text-slate-600 mt-0.5 flex-shrink-0">›</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { education, type Category } from "../data/portfolio";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";
import { SectionHeader, categoryConfig } from "./Experience";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  const { lang } = useLang();

  return (
    <section id="education" className="py-28 px-6 bg-slate-50 border-y border-slate-100">
      <div className="max-w-4xl mx-auto">
        <SectionHeader icon={<GraduationCap size={18} />} title={ui.sections.education[lang]} />

        <div className="space-y-4">
          {education.map((edu, i) => {
            const cat = categoryConfig(edu.category as Category);
            return (
              <div key={i} className={`bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border-l-4 ${cat?.accent ?? "border-l-slate-200"}`}>
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    {edu.icon ? (
                      <div className="h-10 rounded-xl bg-slate-50 px-3 py-1.5 flex items-center justify-center flex-shrink-0 ring-1 ring-slate-200">
                        <img src={edu.icon} alt={edu.school[lang]} className="h-full w-auto max-w-[110px] object-contain" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0">
                        <GraduationCap size={16} className="text-slate-400" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-0.5">
                        <h3 className="text-slate-900 font-bold text-base">{edu.school[lang]}</h3>
                        {cat && (
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-semibold ${cat.badge}`}>
                            {cat.icon} {cat.label}
                          </span>
                        )}
                      </div>
                      <p className="text-indigo-600 font-semibold text-sm">{edu.degree[lang]}</p>
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs mt-1 font-medium">
                        <Calendar size={11} /><span>{edu.period}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-1.5 pl-14">
                    {edu.details[lang].map((d, j) => (
                      <li key={j} className="text-slate-500 text-sm flex gap-2 leading-relaxed">
                        <span className="text-indigo-300 mt-0.5 flex-shrink-0 font-bold">·</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

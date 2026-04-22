import { skills } from "../data/portfolio";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";
import { SectionHeader } from "./Experience";
import { Cpu } from "lucide-react";

const categoryAccents = [
  { bg: "bg-indigo-50", border: "border-indigo-100", dot: "bg-indigo-400", tag: "bg-indigo-50 border-indigo-200 text-indigo-700" },
  { bg: "bg-emerald-50", border: "border-emerald-100", dot: "bg-emerald-400", tag: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { bg: "bg-violet-50", border: "border-violet-100", dot: "bg-violet-400", tag: "bg-violet-50 border-violet-200 text-violet-700" },
  { bg: "bg-amber-50", border: "border-amber-100", dot: "bg-amber-400", tag: "bg-amber-50 border-amber-200 text-amber-700" },
  { bg: "bg-sky-50", border: "border-sky-100", dot: "bg-sky-400", tag: "bg-sky-50 border-sky-200 text-sky-700" },
];

export default function Skills() {
  const { lang } = useLang();

  return (
    <section id="skills" className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeader icon={<Cpu size={18} />} title={ui.sections.skills[lang]} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((cat, idx) => {
            const acc = categoryAccents[idx % categoryAccents.length];
            return (
              <div key={cat.name.en} className={`${acc.bg} border ${acc.border} rounded-2xl p-5 flex flex-col gap-4`}>
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${acc.dot}`} />
                  <h3 className="text-slate-900 font-bold text-sm">{cat.name[lang]}</h3>
                </div>

                {cat.capabilities[lang].length > 0 && (
                  <ul className="space-y-1.5">
                    {cat.capabilities[lang].map((cap, j) => (
                      <li key={j} className="text-slate-600 text-xs flex gap-2 leading-relaxed">
                        <span className="text-slate-300 mt-0.5 flex-shrink-0">—</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {cat.tools.length > 0 && (
                  <div className={`flex flex-wrap gap-1.5 pt-1 ${cat.capabilities[lang].length > 0 ? "border-t border-white/60" : ""}`}>
                    {cat.tools.map((tool) => (
                      <span key={tool} className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${acc.tag}`}>
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

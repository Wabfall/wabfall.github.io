import { skills } from "../data/portfolio";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";
import { SectionHeader } from "./Experience";
import { Cpu } from "lucide-react";

const neutral = { bg: "bg-slate-700/50", border: "border-slate-600/50", text: "text-slate-400", dot: "bg-slate-500" };

export default function Skills() {
  const { lang } = useLang();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader icon={<Cpu size={20} />} title={ui.sections.skills[lang]} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((cat) => {
            const c = neutral;
            return (
              <div key={cat.name.en} className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-5 hover:border-slate-600 transition-colors flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
                  <h3 className="text-white font-semibold text-sm">{cat.name[lang]}</h3>
                </div>

                {cat.capabilities[lang].length > 0 && (
                  <ul className="space-y-1.5">
                    {cat.capabilities[lang].map((cap, j) => (
                      <li key={j} className="text-slate-400 text-xs flex gap-2">
                        <span className="text-slate-600 mt-0.5 flex-shrink-0">›</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {cat.tools.length > 0 && (
                  <div className={`flex flex-wrap gap-1.5 pt-1 ${cat.capabilities[lang].length > 0 ? "border-t border-slate-700/60" : ""}`}>
                    {cat.tools.map((tool) => (
                      <span key={tool} className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${c.bg} ${c.border} ${c.text}`}>
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

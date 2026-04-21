import { testimonials } from "../data/portfolio";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";
import { SectionHeader } from "./Experience";
import { Quote } from "lucide-react";
import { LinkedinIcon } from "./Icons";

export default function Testimonials() {
  const { lang } = useLang();

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-24 px-6 bg-slate-900/40">
      <div className="max-w-4xl mx-auto">
        <SectionHeader icon={<Quote size={20} />} title={ui.sections.testimonials[lang]} />

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6 hover:border-slate-600 transition-colors flex flex-col gap-4">
              <Quote size={28} className="text-slate-700 flex-shrink-0" />

              <p className="text-slate-300 text-sm leading-relaxed flex-1 italic">
                "{t.quote[lang]}"
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-slate-700/60">
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{t.role[lang]} · {t.company}</p>
                </div>
                {t.linkedinUrl && (
                  <a
                    href={t.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-indigo-300 transition-colors"
                    aria-label="View on LinkedIn"
                  >
                    <LinkedinIcon size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

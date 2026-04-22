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
    <section id="testimonials" className="py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeader icon={<Quote size={18} />} title={ui.sections.testimonials[lang]} />

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 flex flex-col gap-4 hover:border-indigo-200 transition-colors">
              <Quote size={24} className="text-indigo-300 flex-shrink-0" />

              <p className="text-slate-700 text-sm leading-relaxed flex-1 italic">
                "{t.quote[lang]}"
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-indigo-100">
                <div>
                  <p className="text-slate-900 font-bold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{t.role[lang]} · {t.company}</p>
                </div>
                {t.linkedinUrl && (
                  <a href={t.linkedinUrl} target="_blank" rel="noopener noreferrer"
                    className="text-indigo-300 hover:text-indigo-600 transition-colors" aria-label="View on LinkedIn">
                    <LinkedinIcon size={15} />
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

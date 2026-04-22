import { linkedinPosts } from "../data/portfolio";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";
import { SectionHeader } from "./Experience";
import { Newspaper, ArrowUpRight } from "lucide-react";

const tagStyles: Record<string, string> = {
  "Data Engineering": "bg-emerald-50 border-emerald-200 text-emerald-700",
  "Software":         "bg-violet-50 border-violet-200 text-violet-700",
  "AI & Data":        "bg-indigo-50 border-indigo-200 text-indigo-700",
  "Data Platform":    "bg-sky-50 border-sky-200 text-sky-700",
};

function tagStyle(tag: string) {
  return tagStyles[tag] ?? "bg-slate-100 border-slate-200 text-slate-600";
}

function formatDate(iso: string, lang: "en" | "fr") {
  return new Date(iso).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", { month: "short", year: "numeric" });
}

export default function Posts() {
  const { lang } = useLang();
  if (linkedinPosts.length === 0) return null;

  return (
    <section id="posts" className="py-28 px-6 bg-slate-50 border-y border-slate-100">
      <div className="max-w-4xl mx-auto">
        <SectionHeader icon={<Newspaper size={18} />} title={ui.sections.posts[lang]} />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {linkedinPosts.map((post, i) => (
            <a key={i} href={post.url ?? "https://linkedin.com/in/etienne-chevrollier"}
              target="_blank" rel="noopener noreferrer"
              className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col gap-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-semibold ${tagStyle(post.tag)}`}>
                  {post.tag}
                </span>
                <ArrowUpRight size={14} className="text-slate-300 group-hover:text-indigo-500 transition-colors" />
              </div>

              <h3 className="text-slate-900 font-bold text-sm leading-snug group-hover:text-indigo-700 transition-colors">
                {post.title}
              </h3>

              <p className="text-slate-500 text-xs leading-relaxed flex-1">{post.excerpt}</p>
              <p className="text-slate-400 text-[11px] font-medium">{formatDate(post.date, lang)}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

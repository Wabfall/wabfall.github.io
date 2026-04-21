import { linkedinPosts } from "../data/portfolio";
import { useLang } from "../lib/lang";
import { ui } from "../data/ui";
import { SectionHeader } from "./Experience";
import { Newspaper, ArrowUpRight } from "lucide-react";

const tagColors: Record<string, string> = {
  "Data Engineering": "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
  "Software":         "bg-violet-500/10 border-violet-500/20 text-violet-300",
  "AI & Data":        "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
  "Data Platform":    "bg-blue-500/10 border-blue-500/20 text-blue-300",
};

function tagStyle(tag: string) {
  return tagColors[tag] ?? "bg-slate-700/50 border-slate-600 text-slate-300";
}

function formatDate(iso: string, lang: "en" | "fr") {
  return new Date(iso).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", {
    month: "short",
    year: "numeric",
  });
}

export default function Posts() {
  const { lang } = useLang();

  if (linkedinPosts.length === 0) return null;

  return (
    <section id="posts" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader icon={<Newspaper size={20} />} title={ui.sections.posts[lang]} />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {linkedinPosts.map((post, i) => (
            <a
              key={i}
              href={post.url ?? "https://linkedin.com/in/etienne-chevrollier"}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800/40 border border-slate-700/60 rounded-2xl p-5 hover:border-slate-600 transition-colors flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className={`px-2 py-0.5 rounded-md border text-xs font-medium ${tagStyle(post.tag)}`}>
                  {post.tag}
                </span>
                <ArrowUpRight size={14} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
              </div>

              <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-slate-200 transition-colors">
                {post.title}
              </h3>

              <p className="text-slate-400 text-xs leading-relaxed flex-1">{post.excerpt}</p>

              <p className="text-slate-600 text-xs">{formatDate(post.date, lang)}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

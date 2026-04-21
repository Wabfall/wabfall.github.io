import { createContext, useContext, useState } from "react";

export type Lang = "en" | "fr";
export type Bil = { en: string; fr: string };
export type BilArr = { en: string[]; fr: string[] };

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem("lang");
    return stored === "fr" ? "fr" : "en";
  });

  return (
    <LangContext.Provider
      value={{
        lang,
        setLang: (l) => {
          setLang(l);
          localStorage.setItem("lang", l);
        },
      }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

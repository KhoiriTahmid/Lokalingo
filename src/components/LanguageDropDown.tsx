import { ChevronDownSvg } from "./Svgs";
import { useState } from "react";
import languages from "~/utils/languages";
import Link from "next/link";
import { Flag } from "./Flag";

export const LanguageDropDown = () => {
  const [languagesShown, setLanguagesShown] = useState(false);
  return (
    <div
      className="relative hidden cursor-pointer items-center md:flex "
      onMouseEnter={() => setLanguagesShown(true)}
      onMouseLeave={() => setLanguagesShown(false)}
      aria-haspopup={true}
      aria-expanded={languagesShown}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setLanguagesShown((isShown) => !isShown);
        }
      }}
    >
      <span className="text-md uppercase">Bahasa Situs : Indonesia</span>{" "}
      <ChevronDownSvg />
      {languagesShown && (
        <ul className="absolute right-0 top-full grid w-[500px] grid-cols-2 rounded-2xl border-2 border-[#2b124c] bg-[#dfb6b2] p-6 font-light text-[#2b124c]">
          {languages.map((language) => {
            return (
              <li key={language.name}>
                <Link
                  href={`https://${language.name}.duolingo.com/`}
                  tabIndex={0}
                  className="flex items-center gap-3 whitespace-nowrap rounded-xl p-3 hover:bg-[#fbe4d8]"
                >
                  <Flag language={language} width={24} />
                  {language.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

import type { NextPage } from "next";
import Link from "next/link";
import languages from "~/utils/languages";
import { LanguageHeader } from "~/components/LanguageHeader";
import { useBoundStore } from "~/hooks/useBoundStore";
import { Flag } from "~/components/Flag";

const Register: NextPage = () => {
  const setLanguage = useBoundStore((x) => x.setLanguage);
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#fbe4d8] text-white">
      <LanguageHeader />
      <div className="container flex grow flex-col items-center justify-center gap-20 px-4 py-16">
        <h1 className="mt-20 text-center text-3xl font-bold tracking-tight text-[#2B124C]">
          Aku ingin belajar bahasa.....
        </h1>
        <section className="mx-auto grid w-full max-w-5xl grid-cols-1 flex-col gap-x-2 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {languages.map((language) => (
            <Link
              key={language.name}
              href="/learn"
              className={
                "flex cursor-pointer flex-col items-center gap-4 rounded-2xl border-2 border-b-4 border-[#2B214C] bg-[#854F6C] px-5 py-8 text-xl font-bold text-[#dfb6b2] hover:bg-[#522B5B] "
              }
              onClick={() => setLanguage(language)}
            >
              <Flag language={language} />
              <span>{language.name}</span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Register;

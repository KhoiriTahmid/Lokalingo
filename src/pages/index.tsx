import { type NextPage } from "next";
import Link from "next/link";
import { GlobeSvg } from "~/components/Svgs";
import React from "react";
import { LanguageHeader } from "~/components/LanguageHeader";
import { useLoginScreen, LoginScreen } from "~/components/LoginScreen";
import { LanguageCarousel } from "~/components/LanguageCarousel";

const Home: NextPage = () => {
  const { loginScreenState, setLoginScreenState } = useLoginScreen();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#fbe4d8] text-[#2b124c]">
      <LanguageHeader />
      <div className="md:gap-30 flex w-full flex-col items-center justify-center gap-3 px-16 py-16 md:flex-row">
        <GlobeSvg className="h-fit w-7/12 md:w-[360px]" />
        <div>
          <p className="mb-6 max-w-[600px] text-center text-3xl font-bold md:mb-12">
            Sebuah cara baru yang asik, seru, dan efektif dalam belajar bahasa
            daerah!
          </p>
          <div className="mx-auto mt-4 flex w-fit flex-col items-center gap-3 text-white">
            <Link
              href="/register"
              className="w-full rounded-2xl border-b-4 border-[#2b124c] bg-[#854f6c] px-10 py-3 text-center font-bold uppercase transition hover:border-[#072e33] hover:bg-opacity-50 md:min-w-[320px]"
            >
              Mari Mulai!
            </Link>
            <button
              className="w-full rounded-2xl border-2 border-b-4 border-[#05161a] bg-[#2b124c] px-8 py-3 font-bold uppercase transition hover:border-opacity-50 hover:bg-opacity-50 md:min-w-[320px]"
              onClick={() => setLoginScreenState("LOGIN")}
            >
              Saya sudah memiliki akun
            </button>
          </div>
        </div>
      </div>
      <LanguageCarousel />
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </main>
  );
};

export default Home;

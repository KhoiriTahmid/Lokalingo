import Link from "next/link";
import type { ComponentProps } from "react";
import React, { useState } from "react";
import type { Tab } from "./BottomBar";
import { useBottomBarItems } from "./BottomBar";
import type { LoginScreenState } from "./LoginScreen";
import { LoginScreen } from "./LoginScreen";
import { GlobeIconSvg, PodcastIconSvg } from "./Svgs";
import { useBoundStore } from "~/hooks/useBoundStore";

const LeftBarMoreMenuSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 104 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.879395"
        y="0.677277"
        width="103"
        height="88.8386"
        rx="30"
        fill="#FBE5D8"
      />
      <path
        d="M22.6313 45.0966C22.6313 49.3302 26.0634 52.7623 30.2971 52.7623C34.5308 52.7623 37.9628 49.3302 37.9628 45.0966C37.9628 40.8629 34.5308 37.4308 30.2971 37.4308C26.0634 37.4308 22.6313 40.8629 22.6313 45.0966Z"
        fill="#512A59"
      />
      <path
        d="M44.7134 45.0966C44.7134 49.3302 48.1454 52.7623 52.3791 52.7623C56.6128 52.7623 60.0449 49.3302 60.0449 45.0966C60.0449 40.8629 56.6128 37.4308 52.3791 37.4308C48.1454 37.4308 44.7134 40.8629 44.7134 45.0966Z"
        fill="#512A59"
      />
      <path
        d="M66.7959 45.0966C66.7959 49.3302 70.228 52.7623 74.4616 52.7623C78.6953 52.7623 82.1274 49.3302 82.1274 45.0966C82.1274 40.8629 78.6953 37.4308 74.4616 37.4308C70.228 37.4308 66.7959 40.8629 66.7959 45.0966Z"
        fill="#512A59"
      />
    </svg>
  );
};

export const LeftBar = ({ selectedTab }: { selectedTab: Tab | null }) => {
  const loggedIn = useBoundStore((x) => x.loggedIn);
  const logOut = useBoundStore((x) => x.logOut);

  const [moreMenuShown, setMoreMenuShown] = useState(false);
  const [loginScreenState, setLoginScreenState] =
    useState<LoginScreenState>("HIDDEN");

  const bottomBarItems = useBottomBarItems();

  return (
    <>
      <nav className="fixed bottom-0 left-0 top-0 hidden flex-col gap-5 border-r-2 border-[#dfb6b2] bg-[#fbe4d8] p-3 md:flex lg:w-64 lg:p-5">
        <Link
          href="/learn"
          className="mb-5 ml-5 mt-5 hidden text-3xl font-bold text-[#2b124c] lg:block"
        >
          Lokal<span className="text-[#854f6c]">ingo</span>
        </Link>
        <ul className="flex flex-col items-stretch gap-3">
          {bottomBarItems.map((item) => {
            return (
              <li key={item.href} className="flex flex-1">
                {item.name === selectedTab ? (
                  <Link
                    href={item.href}
                    className="flex grow items-center gap-3 rounded-xl border-2 border-[#854f6c] bg-[#dfb6b2] px-2 py-1 text-sm font-bold uppercase text-[#2b124c]"
                  >
                    {item.icon}{" "}
                    <span className="sr-only lg:not-sr-only">{item.name}</span>
                  </Link>
                ) : (
                  <Link
                    href={item.href}
                    className="flex grow items-center gap-3 rounded-xl px-2 py-1 text-sm font-bold uppercase text-[#522b5b] hover:bg-[#dfb6b2]"
                  >
                    {item.icon}{" "}
                    <span className="sr-only lg:not-sr-only">{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
          <div
            className="relative flex grow cursor-default items-center gap-3 rounded-xl px-2 py-1 font-bold uppercase text-[#522b5b] hover:bg-[#dfb6b2]"
            onClick={() => setMoreMenuShown((x) => !x)}
            onMouseEnter={() => setMoreMenuShown(true)}
            onMouseLeave={() => setMoreMenuShown(false)}
            role="button"
            tabIndex={0}
          >
            <LeftBarMoreMenuSvg />{" "}
            <span className="hidden text-sm lg:inline">lainnya</span>
            <div
              className={[
                "absolute left-full top-[-10px] min-w-[300px] rounded-2xl border-2 border-[#2b124c] bg-[#dfb6b2] text-left text-[#2b124c]",
                moreMenuShown ? "" : "hidden",
              ].join(" ")}
            >
              <div className="z-40 flex flex-col py-2">
                <Link
                  className="flex items-center gap-4 px-5 py-2 text-left uppercase hover:bg-gray-100"
                  href="https://schools.duolingo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GlobeIconSvg className="h-10 w-10" />
                  Schools
                </Link>
                <Link
                  className="flex items-center gap-4 px-5 py-2 text-left uppercase hover:bg-gray-100"
                  href="https://podcast.duolingo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PodcastIconSvg className="h-10 w-10" />
                  Podcast
                </Link>
              </div>
              <div className="flex flex-col border-t-2 border-[#2b124c] py-2">
                {!loggedIn && (
                  <button
                    className="px-5 py-2 text-left uppercase hover:bg-gray-100"
                    onClick={() => setLoginScreenState("SIGNUP")}
                  >
                    Buat Profil
                  </button>
                )}
                <Link
                  className="px-5 py-2 text-left uppercase hover:bg-gray-100"
                  href={loggedIn ? "/settings/account" : "/settings/sound"}
                >
                  Pengaturan
                </Link>
                <Link
                  className="px-5 py-2 text-left uppercase hover:bg-gray-100"
                  href="https://support.duolingo.com/hc/en-us"
                >
                  Bantuan
                </Link>
                {!loggedIn && (
                  <button
                    className="px-5 py-2 text-left uppercase hover:bg-gray-100"
                    onClick={() => setLoginScreenState("LOGIN")}
                  >
                    Masuk
                  </button>
                )}
                {loggedIn && (
                  <button
                    className="px-5 py-2 text-left uppercase hover:bg-gray-100"
                    onClick={logOut}
                  >
                    Keluar
                  </button>
                )}
              </div>
            </div>
          </div>
        </ul>
      </nav>
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </>
  );
};

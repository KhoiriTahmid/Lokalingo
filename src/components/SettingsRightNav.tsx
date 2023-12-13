import Link from "next/link";
import React from "react";
import { useBoundStore } from "~/hooks/useBoundStore";

type SettingsTitle = ReturnType<typeof useSettingsPages>[number]["title"];

const useSettingsPages = () => {
  const loggedIn = useBoundStore((x) => x.loggedIn);
  return loggedIn
    ? ([
        { title: "Akun", href: "/settings/account" },
        { title: "Suara", href: "/settings/sound" },
        { title: "Target Harian", href: "/settings/coach" },
      ] as const)
    : ([
        { title: "Suara", href: "/settings/sound" },
        { title: "Target Harian", href: "/settings/coach" },
      ] as const);
};

export const SettingsRightNav = ({
  selectedTab,
}: {
  selectedTab: SettingsTitle;
}) => {
  const settingsPages = useSettingsPages();
  return (
    <div className="hidden h-fit w-80 flex-col gap-1 rounded-2xl border-2 border-[#2B124C] bg-[#fbe3d8] p-5 lg:flex">
      {settingsPages.map(({ title, href }) => {
        return (
          <Link
            key={title}
            href={href}
            className={[
              "rounded-2xl p-4 font-bold hover:bg-[#DFB6B2]",
              title === selectedTab ? "bg-[#DFB6B2]" : "",
            ].join(" ")}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};

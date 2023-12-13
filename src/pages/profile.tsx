import type { NextPage } from "next";
import { BottomBar } from "~/components/BottomBar";
import { LeftBar } from "~/components/LeftBar";
import {
  BronzeLeagueSvg,
  EditPencilSvg,
  EmptyFireSvg,
  FireSvg,
  LightningProgressSvg,
  EmptyMedalSvg,
  ProfileFriendsSvg,
  ProfileTimeJoinedSvg,
  SettingsGearSvg,
} from "~/components/Svgs";
import Link from "next/link";
import { Flag } from "~/components/Flag";
import { useBoundStore } from "~/hooks/useBoundStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Profile: NextPage = () => {
  return (
    <div>
      <ProfileTopBar />
      <LeftBar selectedTab="Profil" />
      <div className="flex justify-center gap-3 bg-[#fbe4d8] pt-14 md:ml-24 lg:ml-64 lg:gap-12">
        <div className="flex w-full max-w-4xl flex-col gap-5 p-5">
          <ProfileTopSection />
          <ProfileStatsSection />
          <ProfileFriendsSection />
        </div>
      </div>
      <div className="bg-[#fbe4d8] pt-[90px]"></div>
      <BottomBar selectedTab="Profil" />
    </div>
  );
};

export default Profile;

const ProfileTopBar = () => {
  return (
    <div className="fixed left-0 right-0 top-0 flex h-16 items-center justify-between border-b-2 border-[#2b124c] bg-white px-5 text-xl font-bold text-gray-300 md:hidden">
      <div className="invisible" aria-hidden={true}>
        <SettingsGearSvg />
      </div>
      <span className="text-gray-400">Profile</span>
      <Link href="/settings/account">
        <SettingsGearSvg />
        <span className="sr-only">Settings</span>
      </Link>
    </div>
  );
};

const ProfileTopSection = () => {
  const router = useRouter();
  const loggedIn = useBoundStore((x) => x.loggedIn);
  const name = useBoundStore((x) => x.name);
  const username = useBoundStore((x) => x.username);
  const joinedAt = useBoundStore((x) => x.joinedAt).format("MMMM YYYY");
  const followingCount = 0;
  const followersCount = 0;
  const language = useBoundStore((x) => x.language);

  useEffect(() => {
    if (!loggedIn) {
      void router.push("/");
    }
  }, [loggedIn, router]);

  return (
    <section className="flex flex-row-reverse border-b-2 border-[#2b124c] pb-8 md:flex-row md:gap-8">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-[#2b124c] text-3xl font-bold text-[#2b124c] md:h-44 md:w-44 md:text-7xl">
        {username.charAt(0).toUpperCase()}
      </div>
      <div className="flex grow flex-col justify-between gap-3">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <div className="text-sm text-[#2b124c]">{username}</div>
          </div>
          <div className="flex items-center gap-3">
            <ProfileTimeJoinedSvg />
            <span className="text-[#2b124c]">{`Bergabung ${joinedAt}`}</span>
          </div>
          <div className="flex items-center gap-3">
            <ProfileFriendsSvg />
            <span className="text-[#2b124c]">{`${followingCount} Mengikuti / ${followersCount} Pengikut`}</span>
          </div>
        </div>

        <Flag language={language} width={40} />
      </div>
      <Link
        href="/settings/account"
        className="hidden items-center gap-2 self-start rounded-2xl border-b-4 border-[#2b124c] bg-[#854f6c] px-5 py-3 font-bold uppercase text-white transition hover:brightness-110 md:flex"
      >
        <EditPencilSvg />
        UBAH PROFILMU
      </Link>
    </section>
  );
};

const ProfileStatsSection = () => {
  const streak = useBoundStore((x) => x.streak);
  const totalXp = 125;
  const league = "Perunggu";
  const top3Finishes = 0;

  return (
    <section>
      <h2 className="mb-5 text-2xl font-bold">Statistik</h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex gap-2 rounded-2xl border-2 border-[#2b124c] bg-[#dfb6b2] p-2 md:gap-3 md:px-6 md:py-4">
          {streak === 0 ? <EmptyFireSvg /> : <FireSvg />}
          <div className="flex flex-col">
            <span
              className={[
                "text-xl font-bold",
                streak === 0 ? "text-[#190019]" : "",
              ].join(" ")}
            >
              {streak}
            </span>
            <span className="text-sm text-[#2b124c] md:text-base">
              Runtunan Hari
            </span>
          </div>
        </div>
        <div className="flex gap-2 rounded-2xl border-2 border-[#2b124c] bg-[#dfb6b2] p-2 md:gap-3 md:px-6 md:py-4">
          <LightningProgressSvg size={35} />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-[#190019]">{totalXp}</span>
            <span className="text-sm text-[#2b124c] md:text-base">
              Total XP
            </span>
          </div>
        </div>
        <div className="flex gap-2 rounded-2xl border-2 border-[#2b124c] bg-[#dfb6b2] p-2 md:gap-3 md:px-6 md:py-4">
          <BronzeLeagueSvg width={25} height={35} />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-[#190019]">{league}</span>
            <span className="text-sm text-[#2b124c] md:text-base">
              Liga saat ini
            </span>
          </div>
        </div>
        <div className="flex gap-2 rounded-2xl border-2 border-[#2b124c] bg-[#dfb6b2] p-2 md:gap-3 md:px-6 md:py-4">
          {top3Finishes === 0 ? <EmptyMedalSvg /> : <EmptyMedalSvg />}
          <div className="flex flex-col">
            <span
              className={[
                "text-xl font-bold",
                top3Finishes === 0 ? "text-[#190019]" : "",
              ].join(" ")}
            >
              {top3Finishes}
            </span>
            <span className="text-sm text-[#2b124c] md:text-base">
              Top 3 finishes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileFriendsSection = () => {
  const [state, setState] = useState<"FOLLOWING" | "FOLLOWERS">("FOLLOWING");
  return (
    <section>
      <h2 className="mb-5 text-2xl font-bold">Teman</h2>
      <div className="rounded-2xl border-2 border-gray-200">
        <div className="flex">
          <button
            className={[
              "flex w-1/2 items-center justify-center border-b-2 py-3 font-bold uppercase hover:border-[#854f6c] hover:text-[#854f6c]",
              state === "FOLLOWING"
                ? "border-[#2b124c] text-[#2b124c]"
                : "border-[#854f6c] border-opacity-40 text-[#854f6c] text-opacity-40",
            ].join(" ")}
            onClick={() => setState("FOLLOWING")}
          >
            Mengikuti
          </button>
          <button
            className={[
              "flex w-1/2 items-center justify-center border-b-2 py-3 font-bold uppercase hover:border-[#854f6c] hover:text-[#854f6c]",
              state === "FOLLOWERS"
                ? "border-[#2b124c] text-[#2b124c]"
                : "border-[#854f6c] border-opacity-40 text-[#854f6c] text-opacity-40",
            ].join(" ")}
            onClick={() => setState("FOLLOWERS")}
          >
            Pengikut
          </button>
        </div>
        <div className="flex items-center justify-center py-10 text-center text-[#2b124c]">
          {state === "FOLLOWING"
            ? "Belum mengikuti siapapun"
            : "Belum memiliki pengikut"}
        </div>
      </div>
    </section>
  );
};

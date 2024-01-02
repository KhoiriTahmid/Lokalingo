import Link from "next/link";
import type { ComponentProps } from "react";
import React, { useState } from "react";
import dayjs from "dayjs";
import {
  BronzeLeagueSvg,
  EmptyFireSvg,
  EmptyGemSvg,
  FireSvg,
  GemSvg,
  LightningProgressSvg,
  LingotsTreasureChestSvg,
  TreasureProgressSvg,
} from "./Svgs";
import { Calendar } from "./Calendar";
import { useBoundStore } from "~/hooks/useBoundStore";
import { Flag } from "./Flag";
import type { LoginScreenState } from "./LoginScreen";
import { LoginScreen } from "./LoginScreen";
import { useLeaderboardRank } from "~/hooks/useLeaderboard";

export const RightBar = () => {
  const loggedIn = useBoundStore((x) => x.loggedIn);
  const lingots = useBoundStore((x) => x.lingots);
  const streak = useBoundStore((x) => x.streak);
  const language = useBoundStore((x) => x.language);
  const lessonsCompleted = useBoundStore((x) => x.lessonsCompleted);

  const [languagesShown, setLanguagesShown] = useState(false);

  const [streakShown, setStreakShown] = useState(false);
  const [now, setNow] = useState(dayjs());

  const [gemsShown, setGemsShown] = useState(false);

  const [loginScreenState, setLoginScreenState] =
    useState<LoginScreenState>("HIDDEN");

  return (
    <>
      <aside className="sticky top-0 hidden w-96 flex-col gap-6 self-start bg-[#fbe4d8] sm:flex">
        <article className="my-6 flex justify-between gap-4 ">
          <div
            className="relative flex cursor-default items-center gap-2 rounded-xl p-3 font-bold uppercase text-[#2b124c] hover:bg-[#dfb6b2]"
            onMouseEnter={() => setLanguagesShown(true)}
            onMouseLeave={() => setLanguagesShown(false)}
            onClick={() => setLanguagesShown((x) => !x)}
            role="button"
            tabIndex={0}
          >
            <Flag language={language} width={45} />
            <div>{language.name}</div>
            <div
              className="absolute top-full z-10 rounded-2xl border-2 border-[#2B124C] bg-[#FBE4D8]"
              style={{
                left: "calc(50% - 150px)",
                width: 300,
                display: languagesShown ? "block" : "none",
              }}
            >
              <h2 className="px-5 py-3 font-bold uppercase text-[#2B124C]">
                Bahasaku
              </h2>
              <button className="flex w-full items-center gap-3 border-t-2 border-[#2B124C] bg-[#DFB6B2] px-5 py-3 text-left font-bold">
                <Flag language={language} width={45} />
                <span className="text-[#2B124C]">{language.name}</span>
              </button>
              <Link
                className="flex w-full items-center gap-3 rounded-b-2xl border-t-2 border-[#2B124C] px-5 py-3 text-left font-bold hover:bg-[#DFB6B2]"
                href="/register"
              >
                <span className="flex items-center justify-center rounded-lg border-2 border-[#2B124C] px-2 text-lg font-bold text-[#2B124C]">
                  +
                </span>
                <span className="text-[#2B124C]">Tambah bahasa baru</span>
              </Link>
            </div>
          </div>
          <span
            className="relative flex items-center gap-2 rounded-xl p-3 font-bold text-orange-500 hover:bg-[#dfb6b2]"
            onMouseEnter={() => setStreakShown(true)}
            onMouseLeave={() => {
              setStreakShown(false);
              setNow(dayjs());
            }}
            onClick={(event) => {
              if (event.target !== event.currentTarget) return;
              setStreakShown((x) => !x);
              setNow(dayjs());
            }}
            role="button"
            tabIndex={0}
          >
            <div className="pointer-events-none">
              {streak > 0 ? <FireSvg /> : <EmptyFireSvg />}
            </div>
            <span className={streak > 0 ? "text-orange-500" : "text-[#2B124C]"}>
              {streak}
            </span>
            <div
              className="absolute top-full z-10 flex flex-col gap-5 rounded-2xl border-2 border-[#2B124C] bg-[#FBE4D8] p-5 text-[#2B124C]"
              style={{
                left: "calc(50% - 250px)",
                width: 400,
                display: streakShown ? "flex" : "none",
              }}
            >
              <h2 className="text-center text-lg font-bold">Runtunan</h2>
              <p className="text-center text-sm font-normal text-[#2b124c]">
                {`Namun runtunanmu akan hilang jika kamu tidak latihan besok, berhati-hatilah!`}
              </p>
              <Calendar now={now} setNow={setNow} />
            </div>
          </span>
          <span
            className="relative flex items-center gap-2 rounded-xl p-3 font-bold text-red-500 hover:bg-[#dfb6b2]"
            onMouseEnter={() => setGemsShown(true)}
            onMouseLeave={() => setGemsShown(false)}
            onClick={() => setGemsShown((x) => !x)}
            role="button"
            tabIndex={0}
          >
            {lingots > 0 ? <GemSvg /> : <EmptyGemSvg />}
            <span className={lingots > 0 ? "text-red-500" : "text-[#2b124c]"}>
              {lingots}
            </span>
            <div
              className="absolute top-full z-10 flex w-72 items-center gap-3 rounded-2xl border-2 border-[#2b124c] bg-[#fbe4d6] p-5"
              style={{
                left: "calc(50% - 250px)",
                display: gemsShown ? "flex" : "none",
              }}
            >
              <LingotsTreasureChestSvg className="w-24" />
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-bold text-[#190019]">Permata</h2>
                <p className="text-sm font-normal text-[#2b124c]">
                  Kamu memiliki {lingots} {lingots === 1 ? "lingot" : "permata"}
                  .
                </p>
                <Link
                  className="uppercase text-[#7286d3] transition hover:brightness-110"
                  href="/shop"
                >
                  Pergi ke toko
                </Link>
              </div>
            </div>
          </span>
        </article>
        {loggedIn && lessonsCompleted < 10 ? (
          <UnlockLeaderboardsSection />
        ) : loggedIn && lessonsCompleted >= 10 ? (
          <LeaderboardRankSection />
        ) : null}
        <DailyQuestsSection />
        <XpProgressSection />
        {!loggedIn && (
          <CreateAProfileSection setLoginScreenState={setLoginScreenState} />
        )}
      </aside>
      <LoginScreen
        loginScreenState={loginScreenState}
        setLoginScreenState={setLoginScreenState}
      />
    </>
  );
};

const UnlockLeaderboardsSection = () => {
  const lessonsCompleted = useBoundStore((x) => x.lessonsCompleted);

  if (lessonsCompleted >= 10) {
    return null;
  }

  const lessonsNeededToUnlockLeaderboards = 10 - lessonsCompleted;

  return (
    <article className="flex flex-col gap-5 rounded-2xl border-2 border-[#2b124c] bg-[#DFB6B2] p-6 text-[#2b124c]">
      <h2 className="text-xl font-bold">Buka papan skor!</h2>
      <div className="flex items-center gap-6">
        <LockedLeaderboardsSvg />
        <p className="text-sm leading-6 text-[#2b124c] ">
          Selesaikan {lessonsNeededToUnlockLeaderboards} latihan lagi untuk
          mulai bersaing
        </p>
      </div>
    </article>
  );
};

const LeaderboardRankSection = () => {
  const xpThisWeek = useBoundStore((x) => x.xpThisWeek());
  const rank = useLeaderboardRank();
  const leaderboardLeague = "Liga Perunggu";
  return (
    <article className="flex flex-col gap-5 rounded-2xl border-2 border-[#2b124c] bg-[#dfb6b2] p-6 text-[#2b124c]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{leaderboardLeague}</h2>
        <Link
          href="/leaderboard"
          className="font-bold uppercase text-[#7286d3]"
        >
          Lihat Liga
        </Link>
      </div>
      <div className="flex gap-6">
        <BronzeLeagueSvg />
        <div className="flex flex-col gap-5">
          {rank !== null && (
            <p className="text-lg font-bold text-[#190019]">
              {`Kamu diperingkat #${rank}`}
            </p>
          )}
          <p className="text-sm leading-6 text-[#522b5b]">
            Kamu telah mendapat {xpThisWeek} XP minggu ini
          </p>
        </div>
      </div>
    </article>
  );
};

const DailyQuestsSection = () => {
  const xpToday = useBoundStore((x) => x.xpToday());
  const goalXp = useBoundStore((x) => x.goalXp);
  return (
    <article className="flex flex-col gap-5 rounded-2xl border-2 border-[#2b124c] bg-[#dfb6b2] p-6 font-bold text-[#2b124c]">
      <h2 className="text-xl">Misi harian</h2>
      <div className="flex items-center gap-4">
        <LightningProgressSvg />
        <div className="flex flex-col gap-2">
          <h3>Dapatkan {goalXp} XP</h3>
          <div className="flex items-center">
            <div className="relative h-5 w-52 rounded-l-full bg-gray-200">
              <div
                className={[
                  "relative h-full rounded-l-full bg-yellow-400",
                  xpToday === 0 ? "" : "px-2",
                ].join(" ")}
                style={{ width: `${Math.min(1, xpToday / goalXp) * 100}%` }}
              >
                <div className="absolute left-2 right-0 top-1 h-2 rounded-l-full bg-yellow-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center text-sm text-gray-400">
                {xpToday} / {goalXp}
              </div>
            </div>
            <TreasureProgressSvg />
          </div>
        </div>
      </div>
    </article>
  );
};

const LockedLeaderboardsSvg = () => {
  return (
    <svg width="40" height="46" viewBox="0 0 40 46" fill="none">
      <path
        d="M6.82875 3.41476L33.1701 3.41476C36.9418 3.41476 39.9993 6.47231 39.9993 10.244V26.3415C39.9993 36.8483 31.4819 45.3658 20.975 45.3658H19.0238C8.51698 45.3658 -0.000488281 36.8483 -0.000488281 26.3415L-0.000488281 10.244C-0.000488281 6.47231 3.05707 3.41476 6.82875 3.41476Z"
        fill="#AAC1D4"
      />
      <path
        d="M23.544 3.41476L33.1698 3.41476C36.9415 3.41476 39.9991 6.47231 39.9991 10.244V14.554L10.9707 43.5824C4.66224 40.6308 0.240328 34.3187 0.00878906 26.95L23.544 3.41476Z"
        fill="#C2D1DD"
      />
      <path
        d="M6.82875 -1.52588e-05L33.1701 -1.52588e-05C36.9418 -1.52588e-05 39.9993 3.05754 39.9993 6.82922V23.9023C39.9993 33.8703 31.9187 41.951 21.9506 41.951H18.0482C8.08019 41.951 -0.000488281 33.8703 -0.000488281 23.9023L-0.000488281 6.82922C-0.000488281 3.05754 3.05707 -1.52588e-05 6.82875 -1.52588e-05Z"
        fill="#C2D1DD"
      />
      <path
        d="M6.82875 4.39021C5.48172 4.39021 4.38974 5.48219 4.38974 6.82922L4.38974 23.9023C4.38974 31.4457 10.5048 37.5608 18.0482 37.5608H21.9506C29.494 37.5608 35.6091 31.4457 35.6091 23.9023V6.82922C35.6091 5.48219 34.5171 4.39021 33.1701 4.39021L6.82875 4.39021ZM6.82875 -1.52588e-05L33.1701 -1.52588e-05C36.9418 -1.52588e-05 39.9993 3.05754 39.9993 6.82922V23.9023C39.9993 33.8703 31.9187 41.951 21.9506 41.951H18.0482C8.08019 41.951 -0.000488281 33.8703 -0.000488281 23.9023L-0.000488281 6.82922C-0.000488281 3.05754 3.05707 -1.52588e-05 6.82875 -1.52588e-05Z"
        fill="#D6E4EF"
      />
      <path
        d="M26.9597 -1.52588e-05L33.1709 -1.52588e-05C36.9426 -1.52588e-05 40.0002 3.05754 40.0002 6.82922V14.5539L13.2484 41.3056C6.49782 39.4476 1.33102 33.7672 0.221802 26.7379L26.9597 -1.52588e-05Z"
        fill="#D1DCE5"
      />
      <path
        d="M4.39056 22.5692V23.9023C4.39056 31.1031 9.96287 37.0024 17.0306 37.5234L13.2484 41.3056C6.49782 39.4476 1.33102 33.7672 0.221802 26.7379L4.39056 22.5692ZM35.6099 18.9441V6.82922C35.6099 5.48219 34.518 4.39021 33.1709 4.39021L22.5695 4.39021L26.9597 -1.52588e-05L33.1709 -1.52588e-05C36.9426 -1.52588e-05 40.0002 3.05754 40.0002 6.82922V14.5539L35.6099 18.9441Z"
        fill="#E0EAF3"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0277 22.1682C15.8255 21.312 15.0474 19.9455 15.0474 18.4059C15.0474 15.813 17.2544 13.7111 19.9769 13.7111C22.6994 13.7111 24.9064 15.813 24.9064 18.4059C24.9064 19.9765 24.0966 21.3669 22.853 22.2192L24.1155 25.5237C24.4553 26.4131 23.9457 27.3871 22.9772 27.6992C22.7794 27.7629 22.5714 27.7954 22.3619 27.7954H17.4994C16.473 27.7954 15.6409 27.0313 15.6409 26.0887C15.6409 25.8963 15.6764 25.7053 15.7458 25.5237L17.0277 22.1682Z"
        fill="#8097AA"
      />
    </svg>
  );
};

const TreasureClosedSvg = (props: ComponentProps<"svg">) => {
  return (
    <svg
      width="76"
      height="76"
      viewBox="0 0 76 76"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M61.3472 63.1209C63.405 63.1209 65.0731 61.4528 65.0731 59.3951V38.5609H46.6082V40.9796C46.6082 43.1887 44.8173 44.9796 42.6082 44.9796H33.3841C31.1749 44.9796 29.3841 43.1887 29.3841 40.9796V38.5609L10.9269 38.5609V59.3951C10.9269 61.4528 12.595 63.1209 14.6528 63.1209H61.3472Z"
        fill="#AA572A"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.72582 71.3076C1.66811 71.3076 0 69.6395 0 67.5818V29.0816H10.9269H29.3841V38.5609L10.9269 38.5609V59.3951C10.9269 61.4528 12.595 63.1209 14.6528 63.1209H61.3472C63.405 63.1209 65.0731 61.4528 65.0731 59.3951V38.5609H46.6082V29.0816H65.0731H76V67.5818C76 69.6395 74.3319 71.3076 72.2742 71.3076H3.72582Z"
        fill="#FFBC00"
      />
      <path
        d="M42.6082 44.9796C44.8173 44.9796 46.6082 43.1887 46.6082 40.9796V38.5609V29.0816V29.0816C46.6082 27.3684 45.2193 25.9796 43.5061 25.9796H32.4861C30.7729 25.9796 29.3841 27.3684 29.3841 29.0816V29.0816V38.5609V40.9796C29.3841 43.1887 31.1749 44.9796 33.3841 44.9796H42.6082Z"
        fill="#FFBC00"
      />
      <path
        d="M10.9269 29.0816H29.3841V29.0816C29.3841 27.3684 30.7729 25.9796 32.4861 25.9796H43.5061C45.2193 25.9796 46.6082 27.3684 46.6082 29.0816V29.0816H65.0731V4.26531H10.9269V29.0816Z"
        fill="#AA572A"
      />
      <path
        d="M65.0731 29.0816H76V3.72582C76 1.66811 74.3319 0 72.2742 0H68.7989C66.7412 0 65.0731 1.66811 65.0731 3.72582V4.26531V29.0816Z"
        fill="#FFBC00"
      />
      <path
        d="M10.9269 3.72582C10.9269 1.66811 9.25883 0 7.20112 0H3.72582C1.66811 0 0 1.66811 0 3.72582V29.0816H10.9269V4.26531V3.72582Z"
        fill="#FFBC00"
      />
      <g filter="url(#filter0_i_206_367)">
        <path
          d="M36.5411 35.8698C35.6517 34.9695 34.7005 33.8585 35.129 32.6677C36.1053 29.955 39.8932 29.9543 40.8711 32.6654C41.3009 33.857 40.3397 34.9604 39.4582 35.8701V35.8701C39.413 35.9167 39.3966 35.9712 39.3966 36.0361C39.3966 36.9673 39.3966 37.7489 39.3966 38.9265C39.3966 39.6073 39.3123 40.3992 38.6658 40.6124C38.2499 40.7496 37.7363 40.7482 37.3223 40.6081C36.686 40.3929 36.6044 39.6123 36.6044 38.9405C36.6044 37.6772 36.6044 36.9807 36.6044 36.0381C36.6044 35.972 36.5876 35.9169 36.5411 35.8698V35.8698Z"
          fill="#88411B"
        />
      </g>
      <path
        d="M4.17578 61.2504V66.2798C4.17578 66.6228 4.4538 66.9008 4.79675 66.9008H8.76919"
        stroke="#FFBC00"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M4.17578 39.9329V34.9035C4.17578 34.5605 4.4538 34.2825 4.79675 34.2825H8.76919"
        stroke="#FFBC00"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M72.2412 61.2504V66.2798C72.2412 66.6228 71.9632 66.9008 71.6202 66.9008H67.6478"
        stroke="#FFBC00"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M72.2412 39.9329V34.9035C72.2412 34.5605 71.9632 34.2825 71.6202 34.2825H67.6478"
        stroke="#FFBC00"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.72582 71.3076C1.66811 71.3076 0 69.6395 0 67.5818V29.0816H10.5392H29.3841V38.5609L10.5392 38.5609V59.3951C10.5392 61.4528 12.2073 63.1209 14.265 63.1209H61.735C63.7927 63.1209 65.4608 61.4528 65.4608 59.3951V38.5609H46.6082V29.0816H65.4608H76V67.5818C76 69.6395 74.3319 71.3076 72.2742 71.3076H3.72582Z"
        fill="#FFD300"
      />
      <path
        d="M42.6082 44.9796C44.8173 44.9796 46.6082 43.1887 46.6082 40.9796V38.5609V29.0816V29.0816C46.6082 27.3684 45.2193 25.9796 43.5061 25.9796H32.4861C30.7729 25.9796 29.3841 27.3684 29.3841 29.0816V29.0816V38.5609V40.9796C29.3841 43.1887 31.1749 44.9796 33.3841 44.9796H42.6082Z"
        fill="#FFBC00"
      />
      <path
        d="M65.4608 29.0816H76V3.72582C76 1.66811 74.3319 0 72.2742 0H69.1866C67.1289 0 65.4608 1.66811 65.4608 3.72582V4.26531V29.0816Z"
        fill="#FFD300"
      />
      <path
        d="M10.5392 3.72582C10.5392 1.66811 8.87108 0 6.81336 0H3.72582C1.66811 0 0 1.66811 0 3.72582V29.0816H10.5392V4.26531V3.72582Z"
        fill="#FFD300"
      />
      <path
        d="M12.0977 8.9184H63.9017"
        stroke="#88411B"
        stroke-width="3"
        stroke-linecap="square"
      />
      <path
        d="M12.0977 53.8979H63.9017"
        stroke="#88411B"
        stroke-width="3"
        stroke-linecap="square"
      />
      <path
        d="M12.0977 19.7755H63.9017"
        stroke="#88411B"
        stroke-width="3"
        stroke-linecap="square"
      />
      <g filter="url(#filter1_i_206_367)">
        <path
          d="M36.5411 35.8698C35.6517 34.9695 34.7005 33.8585 35.129 32.6677C36.1053 29.955 39.8932 29.9543 40.8711 32.6654C41.3009 33.857 40.3397 34.9604 39.4582 35.8701V35.8701C39.413 35.9167 39.3966 35.9712 39.3966 36.0361C39.3966 36.9673 39.3966 37.7489 39.3966 38.9265C39.3966 39.6073 39.3123 40.3992 38.6658 40.6124C38.2499 40.7496 37.7363 40.7482 37.3223 40.6081C36.686 40.3929 36.6044 39.6123 36.6044 38.9405C36.6044 37.6772 36.6044 36.9807 36.6044 36.0381C36.6044 35.972 36.5876 35.9169 36.5411 35.8698V35.8698Z"
          fill="#88411B"
        />
      </g>
      <path
        d="M6.2041 61.0994V66.1289C6.2041 66.4718 6.48212 66.7498 6.82507 66.7498H10.7975"
        stroke="#FFBC00"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M6.2041 40.1606V35.1312C6.2041 34.7883 6.48212 34.5102 6.82507 34.5102H10.7975"
        stroke="#FFBC00"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M69.6758 61.0994V66.1289C69.6758 66.4718 69.3978 66.7498 69.0548 66.7498H65.0824"
        stroke="#FFBC00"
        stroke-width="3"
        stroke-linecap="round"
      />
      <path
        d="M69.6758 40.1606V35.1312C69.6758 34.7883 69.3978 34.5102 69.0548 34.5102H65.0824"
        stroke="#FFBC00"
        stroke-width="3"
        stroke-linecap="round"
      />
      <defs>
        <filter
          id="filter0_i_206_367"
          x="35.0234"
          y="30.0117"
          width="5.95312"
          height="10.7026"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-0.62097" />
          <feGaussianBlur stdDeviation="0.310485" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.533333 0 0 0 0 0.254902 0 0 0 0 0.105882 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_206_367"
          />
        </filter>
        <filter
          id="filter1_i_206_367"
          x="35.0234"
          y="30.0117"
          width="5.95312"
          height="10.7026"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-0.62097" />
          <feGaussianBlur stdDeviation="0.310485" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.533333 0 0 0 0 0.254902 0 0 0 0 0.105882 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_206_367"
          />
        </filter>
      </defs>
    </svg>
  );
};

const XpProgressSection = () => {
  const xpToday = useBoundStore((x) => x.xpToday());
  const goalXp = useBoundStore((x) => x.goalXp);
  return (
    <article className="flex flex-col gap-5 rounded-2xl border-2 border-[#2b124c] bg-[#dfb6b2] p-6 font-bold text-[#2b124c]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl"> Progres XP</h2>
        <Link href="/settings/coach" className="uppercase text-[#7286d3]">
          Edit target
        </Link>
      </div>
      <div className="flex gap-5">
        <TreasureClosedSvg />
        <div className="flex grow flex-col justify-around">
          <h3 className="text-[#2b124c]">Target Harian</h3>
          <div className="flex items-center gap-5">
            <div className="relative h-4 w-full grow rounded-full bg-gray-200">
              {xpToday > 0 && (
                <div
                  className="absolute left-0 top-0 h-4 rounded-full bg-yellow-400"
                  style={{ width: `${Math.min(1, xpToday / goalXp) * 100}%` }}
                >
                  <div className="absolute left-2 right-2 top-1 h-[6px] rounded-full bg-yellow-300"></div>
                </div>
              )}
            </div>
            <div className="text-md shrink-0 text-[#2b124c]">
              {xpToday}/{goalXp} XP
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const CreateAProfileSection = ({
  setLoginScreenState,
}: {
  setLoginScreenState: React.Dispatch<React.SetStateAction<LoginScreenState>>;
}) => {
  return (
    <article className="flex flex-col gap-5 rounded-2xl border-2 border-[#2b124c] bg-[#dfb6b2] p-6 font-bold">
      <h2 className="text-xl">
        Buat profil untuk menyimpan progres belajarmu!
      </h2>
      <button
        className="rounded-2xl border-b-4 border-[#2b124c] bg-[#854f6c] py-3 uppercase text-white transition hover:border-[#072e33] hover:bg-opacity-50"
        onClick={() => setLoginScreenState("SIGNUP")}
      >
        Masuk
      </button>
      <button
        className="rounded-2xl border-b-4 border-[#05161a] bg-[#2b124c] py-3 uppercase text-white transition hover:border-opacity-50 hover:bg-opacity-50"
        onClick={() => setLoginScreenState("LOGIN")}
      >
        Buat akun
      </button>
    </article>
  );
};

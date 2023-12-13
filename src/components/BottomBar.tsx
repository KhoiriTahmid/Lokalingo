import Link from "next/link";
import { useBoundStore } from "~/hooks/useBoundStore";

type BottomBarItem = {
  name: Tab;
  href: string;
  icon: JSX.Element;
};

export type Tab = "Belajar" | "Toko" | "Profil" | "Papan skor";

export const useBottomBarItems = () => {
  const loggedIn = useBoundStore((x) => x.loggedIn);

  const bottomBarItems: BottomBarItem[] = [
    {
      name: "Belajar",
      href: "/learn",
      icon: (
        <svg
          width="46"
          height="46"
          viewBox="0 0 102 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.6613 46.815L47.404 19.9902C50.6175 17.2746 55.3152 17.2524 58.5542 19.9376L90.9747 46.815V74.3208C90.9747 79.118 87.0859 83.0069 82.2887 83.0069H72.9221C68.1249 83.0069 64.236 79.118 64.236 74.3208V60.2734C64.236 55.4762 60.3472 51.5873 55.55 51.5873H50.4393C45.6422 51.5873 41.7533 55.4762 41.7533 60.2734V74.3208C41.7533 79.118 37.8644 83.0069 33.0673 83.0069H24.3473C19.5502 83.0069 15.6613 79.118 15.6613 74.3208L15.6613 46.815Z"
            fill="#512A59"
          />
          <path
            d="M58.5542 19.9376C55.3152 17.2524 50.6175 17.2746 47.404 19.9902L15.6613 46.815H11.1091C8.83659 46.815 6.9944 44.9728 6.9944 42.7004C6.9944 41.5249 7.49715 40.4055 8.37581 39.6247L47.232 5.09461C50.5036 2.18723 55.4273 2.1682 58.7214 5.05021L98.2408 39.6268C99.131 40.4056 99.6416 41.5308 99.6416 42.7136C99.6416 44.9787 97.8053 46.815 95.5401 46.815H90.9747L58.5542 19.9376Z"
            fill="#7F4A66"
          />
          <g filter="url(#filter0_d_53_1401)">
            <path
              d="M94.0134 39.9657L56.6752 5.84631C54.9443 4.26463 52.2992 4.24287 50.5425 5.79588L11.3126 40.4774C8.48274 42.9792 10.8104 47.6105 14.5065 46.8324C15.0964 46.7082 15.6468 46.4409 16.1092 46.0541L47.233 20.0117C50.5012 17.2771 55.2523 17.2535 58.5475 19.9555L89.42 45.271C90.446 46.1123 91.8587 46.3032 93.0712 45.7643C95.3839 44.7364 95.8817 41.673 94.0134 39.9657Z"
              fill="#7E4A66"
            />
          </g>
          <path
            d="M73.3789 5.5069V17.8996L84.3789 27.5069V5.5069C84.3789 4.40233 83.4835 3.5069 82.3789 3.5069H75.3789C74.2743 3.5069 73.3789 4.40233 73.3789 5.5069Z"
            fill="#512A59"
          />
          <defs>
            <filter
              id="filter0_d_53_1401"
              x="3.93844"
              y="4.64542"
              width="97.334"
              height="54.5065"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="6.11624" />
              <feGaussianBlur stdDeviation="3.05812" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_53_1401"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_53_1401"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
    },
    {
      name: "Toko",
      href: "/shop",
      icon: (
        <svg
          width="46"
          height="46"
          viewBox="0 0 117 91"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 75.3636V35C11 28.3726 16.3726 23 23 23H92C98.6274 23 104 28.3726 104 35V75.3636C104 81.7771 99.3929 86.9785 93.702 86.9999L93.6437 87.0001C93.2018 87.0026 86.485 87.0384 81.3338 86.9603C77.5756 86.9033 75.4395 84.4021 75.4395 80.6434V68.5051V62.1202C75.4395 55.2575 69.6782 49.8337 62.8413 49.239C61.3855 49.1124 59.9036 49.0052 57.9395 49.0052C55.8572 49.0052 54.4976 49.1257 53.1292 49.2621C46.2664 49.946 40.5187 55.309 40.5818 62.2055C40.6408 68.6575 40.687 76.1618 40.6461 81.1293C40.6174 84.6242 38.4297 86.6517 34.9354 86.7229L21.3333 87C15.6264 87 11 81.7904 11 75.3636Z"
            fill="#DFB6B2"
            stroke="#DFB6B2"
            stroke-width="7.68766"
          />
          <g filter="url(#filter0_d_53_1287)">
            <path
              d="M65.2976 40.2173C67.2264 39.3139 69.6749 37.2469 71.0446 36.0165C71.6969 35.4307 72.0558 34.3244 71.9929 33.1759L70.3958 4H46.6042L45.0071 33.1759C44.9442 34.3244 45.3033 35.4307 45.9553 36.0165C47.325 37.2469 49.7736 39.3139 51.7024 40.2173C56.7768 42.5942 60.2232 42.5942 65.2976 40.2173Z"
              fill="#7F4A66"
            />
            <path
              d="M65.2976 40.2173C67.2264 39.3139 69.6749 37.2469 71.0446 36.0165C71.6969 35.4307 72.0558 34.3244 71.9929 33.1759L70.3958 4H46.6042L45.0071 33.1759C44.9442 34.3244 45.3033 35.4307 45.9553 36.0165C47.325 37.2469 49.7736 39.3139 51.7024 40.2173C56.7768 42.5942 60.2232 42.5942 65.2976 40.2173Z"
              stroke="#7F4A66"
              stroke-width="7.68766"
            />
          </g>
          <g filter="url(#filter1_d_53_1287)">
            <path
              d="M108.76 36.6171L100.078 6.23029C99.7008 4.91017 98.4943 4 97.1213 4H76.3779L78.8139 33.2324C78.8938 34.1891 79.4135 35.0532 80.2382 35.5448C82.2334 36.734 86.1423 38.9378 89.1907 39.8758C94.3968 41.4774 102.008 40.8998 106.342 40.3668C108.144 40.1454 109.259 38.3633 108.76 36.6171Z"
              fill="#512A59"
            />
            <path
              d="M108.76 36.6171L100.078 6.23029C99.7008 4.91017 98.4943 4 97.1213 4H76.3779L78.8139 33.2324C78.8938 34.1891 79.4135 35.0532 80.2382 35.5448C82.2334 36.734 86.1423 38.9378 89.1907 39.8758C94.3968 41.4774 102.008 40.8998 106.342 40.3668C108.144 40.1454 109.259 38.3633 108.76 36.6171Z"
              stroke="#4F2857"
              stroke-width="7.68766"
            />
          </g>
          <g filter="url(#filter2_d_53_1287)">
            <path
              d="M16.8014 6.23029L8.11937 36.6171C7.62045 38.3633 8.73511 40.1454 10.5376 40.3668C14.8717 40.8998 22.4829 41.4774 27.6888 39.8758C30.737 38.9378 34.6462 36.734 36.6412 35.5448C37.4658 35.0532 37.9858 34.1891 38.0655 33.2324L40.5016 4H19.7581C18.3851 4 17.1785 4.91017 16.8014 6.23029Z"
              fill="#512A59"
            />
            <path
              d="M16.8014 6.23029L8.11937 36.6171C7.62045 38.3633 8.73511 40.1454 10.5376 40.3668C14.8717 40.8998 22.4829 41.4774 27.6888 39.8758C30.737 38.9378 34.6462 36.734 36.6412 35.5448C37.4658 35.0532 37.9858 34.1891 38.0655 33.2324L40.5016 4H19.7581C18.3851 4 17.1785 4.91017 16.8014 6.23029Z"
              stroke="#512A59"
              stroke-width="7.68766"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_53_1287"
              x="37.1567"
              y="0.156166"
              width="42.6865"
              height="53.6877"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_53_1287"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_53_1287"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_53_1287"
              x="68.2007"
              y="0.156166"
              width="48.52"
              height="52.6097"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_53_1287"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_53_1287"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_53_1287"
              x="0.158691"
              y="0.156166"
              width="48.5205"
              height="52.6097"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_53_1287"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_53_1287"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
    },
    {
      name: "Profil",
      href: loggedIn ? "/profile" : "/learn?sign-up",
      icon: (
        <svg
          width="46"
          height="46"
          viewBox="0 0 80 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M69.843 35.6173C82.335 32.5182 81.8341 55.0182 69.9793 53.075L69.843 35.6173Z"
            fill="#F8CCC8"
          />
          <path
            d="M9.78178 35.7852C-2.819 33.1632 -1.46309 55.6279 10.3093 53.2354L9.78178 35.7852Z"
            fill="#F8CCC8"
          />
          <g filter="url(#filter0_d_53_1527)">
            <path
              d="M39.237 12.5564C82.7083 10.5252 79.4829 74.5091 39.237 74.5091C1.12806 74.5091 -1.55015 10.5252 39.237 12.5564Z"
              fill="#F8CCC8"
            />
            <path
              d="M39.237 12.5564C82.7083 10.5252 79.4829 74.5091 39.237 74.5091C1.12806 74.5091 -1.55015 10.5252 39.237 12.5564Z"
              stroke="#F8CCC8"
              stroke-width="4"
              stroke-linecap="square"
            />
          </g>
          <path
            d="M8.88203 35.5362C27.8016 40.788 52.3949 23.6959 52.3949 14.5292C55.0596 21.6907 59.2326 31.6987 71.3405 35.5182C70.8675 -10.3154 6.99017 -9.34248 8.88203 35.5362Z"
            fill="#512A59"
            stroke="#522B5A"
            stroke-width="2"
          />
          <path
            d="M45.6426 35.5091V42.5091"
            stroke="#844D6A"
            stroke-width="6"
            stroke-linecap="round"
          />
          <path
            d="M28.7734 10.5091L23.6431 15.2714"
            stroke="#F8CCC8"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M29.6426 13.5091L25.6431 17.2714"
            stroke="#F8CCC8"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M32.7324 35.5182V42.5182"
            stroke="#844D6A"
            stroke-width="6"
            stroke-linecap="round"
          />
          <path
            d="M50.6426 52.0182C50.6322 69.6675 27.6322 69.1598 27.6426 52.0182H50.6426Z"
            fill="#844D6A"
            stroke="#844D6A"
            stroke-width="2"
            stroke-linecap="round"
          />
          <defs>
            <filter
              id="filter0_d_53_1527"
              x="3.64258"
              y="10.5091"
              width="73"
              height="73.9999"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_53_1527"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_53_1527"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
    },
  ];

  if (loggedIn) {
    bottomBarItems.splice(1, 0, {
      name: "Papan skor",
      href: "/leaderboard",
      icon: (
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
          <path
            d="M7 9.5C7 7.84314 8.34315 6.5 10 6.5H36C37.6569 6.5 39 7.84315 39 9.5V23.5C39 32.3366 31.8366 39.5 23 39.5C14.1634 39.5 7 32.3366 7 23.5V9.5Z"
            fill="#FEC701"
          />
          <path
            opacity="0.3"
            d="M39.0001 13.3455V9.5C39.0001 7.84315 37.657 6.5 36.0001 6.5H31.5706L8.30957 29.8497C9.68623 33.0304 12.0656 35.6759 15.0491 37.3877L39.0001 13.3455Z"
            fill="white"
          />
        </svg>
      ),
    });
  }

  return bottomBarItems;
};

export const BottomBar = ({ selectedTab }: { selectedTab: Tab | null }) => {
  const bottomBarItems = useBottomBarItems();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t-2 border-[#e5e5e5] bg-[#fbe4d8] md:hidden">
      <ul className="flex h-[88px]">
        {bottomBarItems.map((item) => {
          return (
            <li
              key={item.href}
              className="flex flex-1 items-center justify-center"
            >
              <Link
                href={item.href}
                className={
                  item.name === selectedTab
                    ? "rounded-xl border-2 border-[#84d8ff] bg-[#ddf4ff] px-2 py-1"
                    : "px-2 py-1"
                }
              >
                {item.icon}
                <span className="sr-only">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export type Language = (typeof languages)[number];

const languages = [
  {
    name: "Arabic",
    nativeName: "العربية",
    viewBox: "0 2178 82 66",
    code: "ar",
  },
  { name: "Bengali", nativeName: "বাংলা", viewBox: "0 1914 82 66", code: "bn" },
  { name: "Czech", nativeName: "Čeština", viewBox: "0 1848 82 66", code: "cs" },
  { name: "German", nativeName: "Deutsch", viewBox: "0 198 82 66", code: "de" },
  { name: "Greek", nativeName: "Ελληνικά", viewBox: "0 924 82 66", code: "el" },
  { name: "English", nativeName: "English", viewBox: "0 0 82 66", code: "en" },
  { name: "Spanish", nativeName: "Español", viewBox: "0 66 82 66", code: "es" },
  {
    name: "French",
    nativeName: "Français",
    viewBox: "0 132 82 66",
    code: "fr",
  },
  { name: "Hindi", nativeName: "हिंदी", viewBox: "0 1914 82 66", code: "hi" },
  {
    name: "Hungarian",
    nativeName: "Magyar",
    viewBox: "0 1584 82 66",
    code: "hu",
  },
  {
    name: "Indo",
    nativeName: "Bahasa Indonesia",
    viewBox: "0 1980 82 66",
    code: "id",
  },
  {
    name: "Italian",
    nativeName: "Italiano",
    viewBox: "0 330 82 66",
    code: "it",
  },
  {
    name: "Japanese",
    nativeName: "日本語",
    viewBox: "0 264 82 66",
    code: "ja",
  },
  { name: "Korean", nativeName: "한국어", viewBox: "0 396 82 66", code: "ko" },
  {
    name: "Dutch",
    nativeName: "Nederlands",
    viewBox: "0 726 82 66",
    code: "code-NL",
  },
] as const;

export default languages;

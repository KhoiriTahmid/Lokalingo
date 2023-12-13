export type Language = (typeof languages)[number];

const languages = [
  {
    name: "Minang",
    nativeName: "العربية",
    viewBox: "0 2178 82 66",
    // code: "ar",
  },
  {
    name: "Batak",
    nativeName: "বাংলা",
    viewBox: "0 1913 82 66",
    // code: "bn",
  },
  {
    name: "Sunda",
    nativeName: "Čeština",
    viewBox: "0 1848 82 66",
    // code: "cs",
  },
  {
    name: "Jawa",
    nativeName: "Deutsch",
    viewBox: "0 198 82 66",
    // code: "de",
  },
  {
    name: "Bali",
    nativeName: "Français",
    viewBox: "0 132 82 66",
    // code: "fr",
  },
  {
    name: "Banjar",
    nativeName: "हिंदी",
    viewBox: "0 1914 82 66",
    // code: "hi"
  },
  {
    name: "Madura",
    nativeName: "Magyar",
    viewBox: "0 1584 82 66",
    // code: "hu",
  },
  {
    name: "Papua",
    nativeName: "Bahasa Indonesia",
    viewBox: "0 1980 82 66",
    // code: "id",
  },
] as const;

export default languages;

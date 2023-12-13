export type Unit = {
  unitNumber: number;
  description: string;
  backgroundColor: `bg-${string}`;
  textColor: `text-${string}`;
  borderColor: `border-${string}`;
  tiles: Tile[];
};

export type Tile =
  | {
      type: "star" | "dumbbell" | "book" | "trophy" | "fast-forward";
      description: string;
    }
  | { type: "treasure" };

export type TileType = Tile["type"];

export const units: readonly Unit[] = [
  {
    unitNumber: 1,
    description: "Membuat kalimat sederhana, berinteraksi dengan orang lain",
    backgroundColor: "bg-[#efb495]",
    textColor: "text-[#2b124c]",
    borderColor: "border-[#ef9595]",
    tiles: [
      {
        type: "star",
        description: "Membuat kalimat sederhana",
      },
      {
        type: "book",
        description: "Selamat Pagi",
      },
      {
        type: "star",
        description: "Berbicara dengan orang lain",
      },
      { type: "treasure" },
      { type: "book", description: "Angka" },
      { type: "trophy", description: "Ulasan Unit 1" },
    ],
  },
  {
    unitNumber: 2,
    description: "Berkeliling kota",
    backgroundColor: "bg-[#d0bfff]",
    textColor: "text-[#2b124c]",
    borderColor: "border-[#beadfa]",
    tiles: [
      { type: "fast-forward", description: "Berkeliling kota" },
      { type: "dumbbell", description: "Latihan" },
      { type: "book", description: "Bandung Bondowoso" },
      { type: "treasure" },
      { type: "star", description: "Berkeliling kota" },
      { type: "book", description: "Keluarga yang sangat besar" },
      { type: "star", description: "Bertemu orang lain" },
      { type: "book", description: "Si Anomali Ungu" },
      { type: "treasure" },
      { type: "dumbbell", description: "Latihan" },
      { type: "trophy", description: "Ulasan unit 3" },
    ],
  },
  {
    unitNumber: 3,
    description: "Memesan makanan dan minuman",
    backgroundColor: "bg-[#79ac78]",
    textColor: "text-[#2b124c]",
    borderColor: "border-[#618264]",
    tiles: [
      { type: "fast-forward", description: "Memesan makanan dan minuman" },
      { type: "book", description: "Putri Kecil Ayah" },
      { type: "star", description: "Memesan makanan dan minuman" },
      { type: "treasure" },
      { type: "book", description: "Liburan keluarga" },
      { type: "star", description: "Berkeliling kota" },
      { type: "treasure" },
      { type: "dumbbell", description: "Latihan" },
      { type: "book", description: "Dokter Sambo" },
      { type: "trophy", description: "Ulasan Unit 3" },
    ],
  },
];

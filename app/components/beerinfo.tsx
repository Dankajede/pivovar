// beerinfo.ts
export interface Beer {
  image: string;
  name: string;
  abv: string;
  description: string;
  available: boolean; // Určuje aktuální dostupnost
}

export const beers: Beer[] = [
  {
    image: "/images/etikety/ceska.png",
    name: "Česká Moucha 11",
    abv: "4,1% obj.",
    description:
      "Pravý český ležák zlatavé barvy, vyrobený z českých sladů, chmelený třemi druhy žateckého chmele.",
    available: true,
  },
  {
    image: "/images/etikety/zelena.png",
    name: "Zelená Moucha 11",
    abv: "4,3% obj.",
    description:
      "Český ležák zelené barvy, vyrobený z českých sladů k příležitosti Velikonoc. Použito přírodní barvivo v BIO kvalitě.",
    available: false,
  },
  {
    image: "/images/etikety/nemecka.png",
    name: "Německá Moucha 12",
    abv: "5,2% obj.",
    description:
      "Ležák vyrobený z německých chmelů. Vyznačuje se vyšší hořkostí a světlejší barvou.",
    available: true,
  },
  {
    image: "/images/etikety/musak.png",
    name: "Mušák",
    abv: "4,5% obj.",
    description:
      "Klasický český styl světlého piva, který potěší každého milovníka piva.",
    available: false,
  },
  {
    image: "/images/etikety/muska.png",
    name: "Muška",
    abv: "5,1% obj.",
    description: "Jemné pivo s výraznou karamelovou chutí a mírnou hořkostí.",
    available: false,
  },
  {
    image: "/images/etikety/prazska.png",
    name: "Pražská Moucha 12",
    abv: "4,6% obj.",
    description:
      "Pivo pražských patriotů, které stojí za ochutnání. Trojí chmelení a plná chuť vás určitě nezklame.",
    available: true,
  },
  {
    image: "/images/etikety/blackfly.png",
    name: "Black Fly 11",
    abv: "5,2% obj.",
    description:
      "Rázný černý ležák vyrobený z pěti druhů sladů a tří chmelů. Jemná hořkost a čokoládový dozvuk na konci dodá pivu tu správnou plnou chuť.",
    available: false,
  },
  {
    image: "/images/etikety/Mucholapka.png",
    name: "Mucholapka 10",
    abv: "3,7% obj.",
    description:
      "Světlé výčepní pivo uvařeno ze dvou druhů českého chmele. Okouzlí Vás vyšší hořkostí, nízkým obsahem alkoholu a nebezpečnou pitelností.",
    available: false,
  },
  {
    image: "/images/etikety/videnska.png",
    name: "Vídeňská Moucha 12",
    abv: "4,8% obj.",
    description:
      "Typický vídeňský ležák vyrobený převážně z vídeňského sladu, třikrát chmelený. Specifický svou jemnou chutí a doznívající hořkostí.",
    available: false,
  },
];

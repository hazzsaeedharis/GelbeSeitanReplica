// Branch categories data extracted from Gelbe Seiten
export interface Branch {
  name: string;
  href: string;
}

export interface BranchCategory {
  title: string;
  branches: Branch[];
}

export const branchCategories: BranchCategory[] = [
  {
    title: "Gesundheitswesen",
    branches: [
      { name: "Ärzte", href: "/branchenbuch/branche/arzt" },
      { name: "Zahnärzte", href: "/branchenbuch/branche/zahnarzt" },
      { name: "Physiotherapie", href: "/branchenbuch/branche/physiotherapie" },
      { name: "Logopädie", href: "/branchenbuch/branche/logopädie" },
    ],
  },
  {
    title: "Beratungsdienstleistungen",
    branches: [
      { name: "Rechtsanwälte", href: "/branchenbuch/branche/rechtsanwalt" },
      { name: "Steuerberatung", href: "/branchenbuch/branche/steuerberater" },
      { name: "Bestattungen", href: "/branchenbuch/branche/bestatter" },
    ],
  },
  {
    title: "Handwerksbetriebe",
    branches: [
      { name: "Elektroinstallationen", href: "/branchenbuch/branche/elektroinstallation" },
      { name: "Sanitärinstallationen", href: "/branchenbuch/branche/sanit%c3%a4rinstallation" },
      { name: "Heizungs- und Lüftungsbau", href: "/branchenbuch/branche/heizung%20%26%20sanit%c3%a4r" },
      { name: "Malerbetriebe", href: "/branchenbuch/branche/maler" },
      { name: "Dachdeckereien", href: "/branchenbuch/branche/dachdecker" },
      { name: "Rohrreinigung", href: "/branchenbuch/branche/rohrreinigung" },
      { name: "Tischlereien", href: "/branchenbuch/branche/schreiner" },
      { name: "Fenster", href: "/branchenbuch/branche/fenster" },
      { name: "Kanalreinigung", href: "/branchenbuch/branche/kanalreinigung" },
    ],
  },
  {
    title: "Immobilien und Bauwesen",
    branches: [
      { name: "Bauunternehmen", href: "/branchenbuch/branche/bauunternehmen" },
      { name: "Immobilien", href: "/branchenbuch/branche/immobilien" },
    ],
  },
  {
    title: "Garten- und Landschaftsbau",
    branches: [
      { name: "Garten- und Landschaftsbau", href: "/branchenbuch/branche/gartenbau%20%26%20landschaftsbau" },
    ],
  },
  {
    title: "Gebäudemanagement",
    branches: [
      { name: "Gebäudereinigung", href: "/branchenbuch/branche/gebäudereinigung" },
    ],
  },
  {
    title: "Spezialdienstleistungen",
    branches: [
      { name: "Schädlingsbekämpfung", href: "/branchenbuch/branche/kammerj%c3%a4ger" },
    ],
  },
];

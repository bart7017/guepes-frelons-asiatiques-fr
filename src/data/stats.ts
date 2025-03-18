export interface Stat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface StatsList {
  id: string;
  stats: Stat[];
  content?: {
    title: string;
    description: string;
    button?: {
      text: string;
      link: string;
      variant?: "primary" | "secondary" | "ghostLight" | "ghostDark";
    };
  };
}

export const statsLists: Record<string, StatsList> = {
  main: {
    id: "main",
    stats: [
      {
        value: 15,
        label: "Années d'expérience",
      },
      {
        value: 2000,
        label: "Interventions annuelles",
        prefix: "+",
      },
      {
        value: 98,
        label: "Satisfaction client",
        suffix: "%",
      },
      {
        value: 30,
        label: "Minutes en moyenne par intervention",
        prefix: "<",
      },
    ],
  },
  withContent: {
    id: "withContent",
    stats: [
      {
        value: 24,
        label: "Délai max d'intervention",
        suffix: "h",
      },
      {
        value: 3,
        label: "Mois de garantie",
      },
      {
        value: 77,
        label: "Communes couvertes en Seine-et-Marne",
        prefix: "+",
      },
      {
        value: 5000,
        label: "Guêpes dans un grand nid",
        prefix: "jusqu'à",
      },
    ],
    content: {
      title: "L'expertise au service de votre sécurité",
      description:
        "Notre équipe intervient rapidement dans tout le département 77 pour éliminer les nids de guêpes et frelons. Avec plus de 15 ans d'expérience, nous garantissons un traitement efficace et sécurisé, quel que soit l'emplacement du nid.",
      button: {
        text: "Demander une intervention",
        link: "/contact",
        variant: "primary",
      },
    },
  },
};

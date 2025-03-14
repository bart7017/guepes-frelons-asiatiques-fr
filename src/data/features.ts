import { CodeXml, Coffee, Heart, Shield, Smile, TabletSmartphone, Type, Zap } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FeatureList {
  id: string;
  features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
  main: {
    id: "main",
    features: [
      {
        icon: Zap,
        title: "Intervention Rapide",
        description:
          "Équipe mobilisable en 24-48h sur l'ensemble du territoire français",
      },
      {
        icon: Shield,
        title: "Sécurité Garantie",
        description:
          "Équipements professionnels et protocoles sécurisés pour éliminer tous types de nids",
      },
      {
        icon: TabletSmartphone,
        title: "Diagnostic à Distance",
        description:
          "Envoyez-nous des photos par smartphone pour une première évaluation gratuite",
      },
      {
        icon: Smile,
        title: "Satisfaction Client",
        description:
          "Plus de 2000 interventions réussies par an avec garantie post-traitement",
      },
      {
        icon: Type,
        title: "Certification Certiphyto",
        description:
          "Techniciens formés et agréés pour l'utilisation de produits biocides professionnels",
      },
      {
        icon: CodeXml,
        title: "Protocole Spécifique",
        description:
          "Méthodes adaptées selon l'emplacement du nid: sol, toiture, murs ou arbres",
      },
    ],
  },
  secondary: {
    id: "secondary",
    features: [
      {
        icon: Heart,
        title: "Respect de l'Environnement",
        description:
          "Produits et méthodes sélectionnés pour leur faible impact écologique",
      },
      {
        icon: Coffee,
        title: "Service Après-Intervention",
        description:
          "Suivi et conseils personnalisés pour prévenir toute réapparition",
      },
      {
        icon: Smile,
        title: "Devis Transparent",
        description:
          "Tarification claire sans surprise, adaptée à chaque situation",
      },
    ],
  },
};

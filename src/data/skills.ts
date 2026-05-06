import type { LucideIcon } from 'lucide-react';
import { ClipboardList, Compass, MessageCircle, Radio, Search, Target, Users } from 'lucide-react';

export type SkillCategory = 'language' | 'framework' | 'tool' | 'os' | 'cyber';

export type TechnicalSkill = {
  id: string;
  label: string;
  category: SkillCategory;
  icon?: string;
};

export type TransversalSkill = {
  id: string;
  label: string;
  description?: string;
  icon: LucideIcon;
};

export type Value = {
  id: string;
  label: string;
  description: string;
};

export const technicalSkills: TechnicalSkill[] = [
  // Langages
  { id: 'typescript', label: 'TypeScript', category: 'language' },
  { id: 'python', label: 'Python', category: 'language' },
  { id: 'java', label: 'Java', category: 'language' },
  { id: 'sql', label: 'SQL', category: 'language' },
  { id: 'html-css', label: 'HTML / CSS', category: 'language' },

  // Frameworks & Libs
  { id: 'react', label: 'React', category: 'framework' },
  { id: 'nextjs', label: 'Next.js', category: 'framework' },
  { id: 'nodejs', label: 'Node.js', category: 'framework' },
  { id: 'flask', label: 'Flask', category: 'framework' },

  // Outils DevOps / Dev
  { id: 'docker', label: 'Docker', category: 'tool' },
  { id: 'kubernetes', label: 'Kubernetes', category: 'tool' },
  { id: 'k3s', label: 'k3s', category: 'tool' },
  { id: 'github-actions', label: 'GitHub Actions', category: 'tool' },

  // Systèmes & Cloud
  { id: 'linux', label: 'Linux', category: 'os' },
  { id: 'aws', label: 'AWS', category: 'os' },

  // Cybersécurité
  { id: 'wireshark', label: 'Wireshark', category: 'cyber' },
  { id: 'burpsuite', label: 'Burp Suite', category: 'cyber' },
  { id: 'nmap', label: 'Nmap', category: 'cyber' },
  { id: 'metasploit', label: 'Metasploit', category: 'cyber' },
  { id: 'rbac', label: 'RBAC Kubernetes', category: 'cyber' },
  { id: 'ceh-level', label: 'Fondamentaux offensifs (niveau CEH)', category: 'cyber' },
];

export const transversalSkills: TransversalSkill[] = [
  { id: 'autonomie', label: 'Autonomie', icon: Compass },
  { id: 'rigueur', label: 'Rigueur', icon: Target },
  { id: 'resolution', label: 'Résolution de problèmes', icon: Search },
  { id: 'gestion-projet', label: 'Gestion de projet', icon: ClipboardList },
  { id: 'travail-equipe', label: 'Travail en équipe', icon: Users },
  { id: 'communication', label: 'Communication', icon: MessageCircle },
  { id: 'veille-techno', label: 'Veille technologique', icon: Radio },
];

export const values: Value[] = [
  {
    id: 'curiosite',
    label: 'Curiosité',
    description: "Explorer, apprendre et comprendre avant d'agir.",
  },
  {
    id: 'integrite',
    label: 'Intégrité',
    description: 'En cybersécurité, la confiance se mérite — elle ne se contourne pas.',
  },
  {
    id: 'impact',
    label: 'Impact concret',
    description: 'Préférer un projet utile à une solution impressionnante mais inutile.',
  },
  {
    id: 'amelioration',
    label: 'Amélioration continue',
    description: "Chaque projet est une opportunité d'apprendre quelque chose de nouveau.",
  },
];

export const antivalues: Value[] = [
  {
    id: 'superficialite',
    label: 'Superficialité',
    description: "Faire semblant de comprendre plutôt que d'admettre qu'on ne sait pas.",
  },
  {
    id: 'immobilisme',
    label: 'Immobilisme',
    description: "Rester sur ses acquis dans un domaine qui évolue aussi vite que l'informatique.",
  },
  {
    id: 'opacite',
    label: 'Opacité',
    description: "La sécurité par l'obscurité n'est pas de la sécurité.",
  },
  {
    id: 'negligence',
    label: 'Négligence',
    description: "Une faille ignorée aujourd'hui devient une catastrophe demain.",
  },
];

export type Horizon = {
  id: string;
  label: string;
  description: string;
};

export const horizons: Horizon[] = [
  {
    id: '3ans',
    label: 'Dans 3 ans',
    description:
      "Évoluer au sein d'une équipe soudée où l'apprentissage est mutuel, autant apprendre des autres qu'apporter ma propre vision. Continuer à approfondir mes compétences en cybersécurité dans un environnement stimulant, avec des responsabilités qui grandissent progressivement. Avoir construit un réseau professionnel solide, quelques certifications qui font sens, et la conviction d'être au bon endroit.",
  },
  {
    id: '5ans',
    label: 'Dans 5 ans',
    description:
      "Avoir gagné suffisamment d'expérience pour prendre des décisions techniques avec confiance, et pourquoi pas accompagner à mon tour des profils plus juniors. Me spécialiser davantage, peut-être vers le red team, l'architecture sécurité ou la sécurité cloud, sans perdre la curiosité qui m'a amené là. Contribuer à des projets qui ont un impact réel, dans une structure où la sécurité n'est pas une contrainte mais une culture.",
  },
];

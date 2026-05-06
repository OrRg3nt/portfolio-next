export type EngagementCategory = 'associatif' | 'enseignement' | 'projet';

export type Engagement = {
  id: string;
  label: string;
  description: string;
  period: string;
  category: EngagementCategory;
};

export const engagements: Engagement[] = [
  {
    id: 'site-garage',
    label: 'Site web pour un garage automobile',
    description: "Conception et développement d'un site vitrine pour un garage local.",
    period: '2025',
    category: 'projet',
  },
  {
    id: 'cours-maths',
    label: 'Cours particuliers — Mathématiques',
    description: "Accompagnement d'élèves du secondaire en mathématiques.",
    period: '2024 – 2025',
    category: 'enseignement',
  },
  {
    id: 'asso-sport',
    label: 'Association sportive',
    description: "Encadrement, arbitrage et coaching au sein d'un club de sport.",
    period: 'Avant 2021',
    category: 'associatif',
  },
];

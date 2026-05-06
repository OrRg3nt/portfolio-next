import type { Technology } from './projects';

export type ContractType = 'stage' | 'alternance' | 'cdi' | 'cdd' | 'freelance' | 'etudiant';

export interface Experience {
  company: string;
  role: string;
  contractType: ContractType;
  location: string;
  startDate: string;
  endDate: string | 'present';
  description: string;
  missions: string[];
  technologies?: Technology[];
}

export const experiences: Experience[] = [
  {
    company: 'Carrefour St-Serge',
    role: 'Employé polyvalent',
    contractType: 'etudiant',
    location: 'Angers, France',
    startDate: 'Août 2023',
    endDate: 'present',
    description: 'Contrat étudiant en parallèle des études.',
    missions: [
      'Réassort des produits et conseil client',
      'Gestion des stocks et inventaires F&V',
      'Commandes journalières',
      'Réception',
    ],
  },
  {
    company: 'Marché Place La Fayette',
    role: 'Vendeur F&V',
    contractType: 'etudiant',
    location: 'Angers, France',
    startDate: '2023',
    endDate: '2025',
    description: 'Vente sur marché en extérieur.',
    missions: ['Vente et conseil client', 'Tenue du stand'],
  },
  {
    company: 'Nestenn Immobilier',
    role: 'Stagiaire administratif',
    contractType: 'stage',
    location: 'Angers, France',
    startDate: 'Février 2023',
    endDate: 'Février 2023',
    description: 'Stage de découverte en agence immobilière.',
    missions: ['Gestion et suivi administratif des dossiers clients'],
  },
];

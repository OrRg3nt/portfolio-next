export interface Education {
  school: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string | 'present';
  description?: string;
  highlights: string[];
  isErasmus?: boolean;
}

export const education: Education[] = [
  {
    school: 'ESAIP La Salle',
    degree: 'Cycle Ingénieur',
    field: 'Informatique et Réseaux',
    location: 'Angers, France',
    startDate: '2024',
    endDate: 'present',
    highlights: [
      'Spécialisation cybersécurité & réseaux',
      'Programmation Python, C, Java (JPA, Spring)',
      'Sécurité Cloud – modèle Zero Trust',
      'Certification CEH en cours',
    ],
  },
  {
    school: 'OBUDA University',
    degree: 'Semestre ERASMUS',
    field: 'Computer Science',
    location: 'Budapest, Hongrie',
    startDate: 'Février 2025',
    endDate: 'Juin 2025',
    isErasmus: true,
    highlights: ['Programmation C#', 'Bases de données', 'Cloud AWS'],
  },
  {
    school: 'ESAIP La Salle',
    degree: 'Cycle Préparatoire Intégré',
    field: 'Informatique et Réseaux',
    location: 'Angers, France',
    startDate: '2022',
    endDate: '2024',
    highlights: ['Fondamentaux réseaux et programmation', 'Introduction à la cybersécurité'],
  },
  {
    school: 'Institut Sacré Cœur La Salle',
    degree: 'Baccalauréat',
    field: 'Mathématiques, NSI',
    location: 'Angers, France',
    startDate: '2019',
    endDate: '2022',
    highlights: ['Mention Bien', 'Spécialités : Mathématiques & Numérique, Sciences Informatiques'],
  },
];

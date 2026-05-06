export type Topic = 'cybersecurity' | 'dev';

export type Technology =
  | 'React'
  | 'Next.js'
  | 'TypeScript'
  | 'Node.js'
  | 'Python'
  | 'Docker'
  | 'Linux'
  | 'Wireshark'
  | 'Burp Suite'
  | 'Tailwind'
  | 'Flask'
  | 'HTML/CSS'
  | 'SQL'
  | 'Kubernetes'
  | 'GitHub Actions'
  | 'RBAC'
  | 'k3s';

export type Status = 'completed' | 'in-progress' | 'archived';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type Context = 'personnel' | 'scolaire' | 'stage';

export type TransversalSkill =
  | 'Autonomie'
  | 'Travail en équipe'
  | 'Gestion de projet'
  | 'Résolution de problèmes'
  | 'Communication'
  | 'Veille technologique'
  | 'Rigueur';

export interface Project {
  name: string;
  description: string;
  topic: Topic;
  technologies: Technology[];
  status: Status;
  difficulty: Difficulty;
  context: Context;
  date: string;
  duration: string;
  longDescription?: string;
  highlights?: string[];
  transversalSkills?: TransversalSkill[];
}

export const projects: Project[] = [
  {
    name: "Activ'Esaip",
    description: "Application web de gestion d'activités étudiantes.",
    topic: 'dev',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    status: 'completed',
    difficulty: 'intermediate',
    context: 'scolaire',
    date: 'Janvier 2026',
    duration: '5 semaines',
    highlights: ['Architecture front-end complète avec Next.js', 'Composants UI avec Tailwind CSS'],
    transversalSkills: ['Autonomie', 'Gestion de projet', 'Rigueur'],
  },
  {
    name: 'Design 4 Green',
    description: 'Projet web orienté éco-conception et développement durable.',
    topic: 'dev',
    technologies: ['React', 'TypeScript', 'Node.js'],
    status: 'in-progress',
    difficulty: 'beginner',
    context: 'personnel',
    date: 'Mars 2025',
    duration: '1 mois',
    transversalSkills: ['Autonomie', 'Veille technologique'],
  },
  {
    name: 'Site vitrine Garage Auto',
    description: 'Site vitrine pour un garage automobile local — front & back avec base de données.',
    topic: 'dev',
    technologies: ['Flask', 'HTML/CSS', 'SQL', 'Python'],
    status: 'in-progress',
    difficulty: 'intermediate',
    context: 'scolaire',
    date: 'Octobre 2025',
    duration: '2 à 3 mois',
    highlights: [
      'Développement full-stack en autonomie',
      'Base de données relationnelle SQL',
      'Interface client responsive',
    ],
    transversalSkills: ['Autonomie', 'Gestion de projet', 'Rigueur'],
  },
  {
    name: 'Projet DevSecOps — Phase 2',
    description: "Pipeline CI/CD, observabilité Kubernetes et simulation d'incident de sécurité sur cluster k3s.",
    topic: 'cybersecurity',
    technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'k3s', 'Python', 'Linux', 'RBAC'],
    status: 'completed',
    difficulty: 'advanced',
    context: 'scolaire',
    date: 'Avril 2026',
    duration: '1 semaine',
    highlights: [
      'Pipeline CI avec GitHub Actions — build & push Docker vers GHCR',
      'Déploiement automatisé via script deploy.sh sur cluster k3s',
      'Observabilité : logs applicatifs, événements Kubernetes, métriques',
      "Simulation d'exfiltration de secrets via ServiceAccount compromis",
      'Mise en place de défenses : RBAC, NetworkPolicy deny-all, désactivation automount token',
    ],
    transversalSkills: ['Rigueur', 'Résolution de problèmes', 'Veille technologique', 'Autonomie'],
  },
];

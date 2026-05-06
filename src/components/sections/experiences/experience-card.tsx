import { Badge as BadgeIcon, Briefcase, Building2, CalendarDays, MapPin } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import type { Experience } from '@/data/experiences';

type Props = {
  experience: Experience;
  isLast: boolean;
  index: number;
};

const CONTRACT_LABELS: Record<Experience['contractType'], string> = {
  stage: 'Stage',
  alternance: 'Alternance',
  cdi: 'CDI',
  cdd: 'CDD',
  freelance: 'Freelance',
  etudiant: 'Contrat étudiant',
};

const CONTRACT_COLORS: Record<Experience['contractType'], string> = {
  stage: 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20',
  alternance: 'bg-purple-500/10 text-purple-500 hover:bg-purple-500/20',
  cdi: 'bg-green-500/10 text-green-500 hover:bg-green-500/20',
  cdd: 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20',
  freelance: 'bg-orange-500/10 text-orange-500 hover:bg-orange-500/20',
  etudiant: 'bg-muted text-muted-foreground hover:bg-muted/80',
};

const ExperienceItem = ({ experience, isLast, index }: Props) => {
  const isEven = index % 2 === 0;
  const dateRange = `${experience.startDate} – ${experience.endDate === 'present' ? "Aujourd'hui" : experience.endDate}`;

  return (
    <div className="relative flex flex-col items-center">
      {!isLast && (
        <svg
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-border"
          width="120"
          height="48"
          viewBox="0 0 120 48"
          fill="none"
          aria-hidden="true"
        >
          <title>Connecteur</title>
          {isEven ? (
            <path d="M60 0 C60 24, 100 24, 100 48" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
          ) : (
            <path d="M60 0 C60 24, 20 24, 20 48" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
          )}
        </svg>
      )}

      <div
        className={`relative w-[420px] rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md ${
          isEven ? 'self-start ml-8' : 'self-end mr-8'
        }`}
      >
        {/* Icône flottante */}
        <div className="absolute -top-3.5 left-5 flex size-7 items-center justify-center rounded-full border bg-background shadow-sm">
          <Briefcase className="size-3.5 text-muted-foreground" />
        </div>

        <div className="flex flex-col gap-2 pt-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-sm font-semibold">{experience.role}</span>
            <Badge className={`text-xs ${CONTRACT_COLORS[experience.contractType]}`}>
              {CONTRACT_LABELS[experience.contractType]}
            </Badge>
          </div>

          <div className="flex flex-col gap-1 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Building2 className="size-3" />
              {experience.company}
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="size-3" />
              {experience.location}
            </div>
            <div className="flex items-center gap-1.5">
              <CalendarDays className="size-3" />
              {dateRange}
            </div>
          </div>

          <p className="text-xs text-muted-foreground italic">{experience.description}</p>

          {experience.missions.length > 0 && (
            <ul className="mt-1 flex flex-col gap-1 border-t pt-2">
              {experience.missions.map((mission) => (
                <li key={mission} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground/50" />
                  {mission}
                </li>
              ))}
            </ul>
          )}

          {experience.technologies && experience.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {experience.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;

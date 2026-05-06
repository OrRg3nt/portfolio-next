import { GraduationCap, MapPin, Plane } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import type { Education } from '@/data/education';

type Props = {
  education: Education;
  isLast: boolean;
  index: number;
};

const EducationItem = ({ education, isLast, index }: Props) => {
  const dateRange = `${education.startDate} – ${education.endDate === 'present' ? "Aujourd'hui" : education.endDate}`;
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col items-center">
      {/* Connecteur courbe SVG entre items */}
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

      {/* Card */}
      <div
        className={`relative w-[420px] rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md ${
          isEven ? 'self-start ml-8' : 'self-end mr-8'
        }`}
      >
        {/* Icône flottante */}
        <div className="absolute -top-3.5 left-5 flex size-7 items-center justify-center rounded-full border bg-background shadow-sm">
          {education.isErasmus ? (
            <Plane className="size-3.5 text-blue-500" />
          ) : (
            <GraduationCap className="size-3.5 text-muted-foreground" />
          )}
        </div>

        <div className="flex flex-col gap-2 pt-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold">{education.school}</span>
            {education.isErasmus && (
              <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 text-xs">ERASMUS</Badge>
            )}
          </div>

          <div>
            <p className="text-sm font-medium">{education.degree}</p>
            <p className="text-xs text-muted-foreground">{education.field}</p>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="size-3" />
              {education.location}
            </div>
            <span>·</span>
            <span>{dateRange}</span>
          </div>

          {education.highlights.length > 0 && (
            <ul className="mt-1 flex flex-col gap-1 border-t pt-2">
              {education.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground/50" />
                  {highlight}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationItem;

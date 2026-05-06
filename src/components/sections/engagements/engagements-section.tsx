import { BookOpen, Globe, Heart } from 'lucide-react';

import { type Engagement, type EngagementCategory, engagements } from '@/data/engagements';

const CATEGORY_ICON: Record<EngagementCategory, React.ReactNode> = {
  associatif: <Heart className="size-3.5" />,
  enseignement: <BookOpen className="size-3.5" />,
  projet: <Globe className="size-3.5" />,
};

const CATEGORY_LABEL: Record<EngagementCategory, string> = {
  associatif: 'Associatif',
  enseignement: 'Enseignement',
  projet: 'Projet bénévole',
};

const EngagementRow = ({ engagement, isLast }: { engagement: Engagement; isLast: boolean }) => (
  <div className="flex gap-6 group">
    {/* Timeline */}
    <div className="flex flex-col items-center">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-full border bg-muted/40 text-muted-foreground transition-colors group-hover:bg-muted">
        {CATEGORY_ICON[engagement.category]}
      </div>
      {!isLast && <div className="mt-2 w-px flex-1 bg-border" />}
    </div>

    {/* Contenu */}
    <div className={`flex flex-col gap-1 ${isLast ? 'pb-0' : 'pb-8'}`}>
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-medium">{engagement.label}</span>
        <span className="text-xs text-muted-foreground border rounded-full px-2 py-0.5">
          {CATEGORY_LABEL[engagement.category]}
        </span>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">{engagement.description}</p>
      <span className="text-xs text-muted-foreground/60 mt-0.5">{engagement.period}</span>
    </div>
  </div>
);

const EngagementsSection = () => {
  return (
    <section id="engagements" className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold tracking-tight">Engagements</h2>
        <p className="text-sm text-muted-foreground">{engagements.length} engagements</p>
      </div>

      <div className="flex flex-col">
        {engagements.map((engagement, index) => (
          <EngagementRow key={engagement.id} engagement={engagement} isLast={index === engagements.length - 1} />
        ))}
      </div>
    </section>
  );
};

export default EngagementsSection;

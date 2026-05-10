import { Telescope, ThumbsDown, ThumbsUp } from 'lucide-react';

import {
  antivalues,
  horizons,
  type SkillCategory,
  type TechnicalSkill,
  type TransversalSkill,
  technicalSkills,
  transversalSkills,
  type Value,
  values,
} from '@/data/skills';

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  language: 'Langages',
  framework: 'Frameworks & Libs',
  tool: 'Outils & DevOps',
  cyber: 'Cybersécurité',
  os: 'Systèmes & Cloud',
};

const CATEGORY_ORDER: SkillCategory[] = ['language', 'framework', 'tool', 'os', 'cyber'];

// --- Blocs atomiques ---

const TechGroup = ({ category, skills }: { category: SkillCategory; skills: TechnicalSkill[] }) => (
  <div className="flex flex-col gap-2">
    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{CATEGORY_LABELS[category]}</p>
    <div className="flex flex-wrap gap-1.5">
      {skills.map((skill) => (
        <span key={skill.id} className="rounded-md border bg-muted/40 px-2.5 py-1 text-xs font-medium">
          {skill.label}
        </span>
      ))}
    </div>
  </div>
);

const TransversalChip = ({ skill }: { skill: TransversalSkill }) => {
  const Icon = skill.icon;
  return (
    <div className="flex items-center gap-2 rounded-lg border bg-muted/40 px-3 py-2 text-xs font-medium">
      <Icon className="size-3.5 text-muted-foreground shrink-0" />
      {skill.label}
    </div>
  );
};

const ValueCard = ({ value, type }: { value: Value; type: 'value' | 'antivalue' }) => (
  <div className="rounded-xl border bg-muted/30 p-4 flex flex-col gap-1.5">
    <div className="flex items-center gap-2">
      {type === 'value' ? (
        <ThumbsUp className="size-3 text-muted-foreground" />
      ) : (
        <ThumbsDown className="size-3 text-muted-foreground" />
      )}
      <span className="text-xs font-semibold">{value.label}</span>
    </div>
    <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
  </div>
);

// --- Section principale ---

const CompetencesSection = () => {
  const grouped = CATEGORY_ORDER.reduce(
    (acc, cat) => {
      const filtered = technicalSkills.filter((s) => s.category === cat);
      if (filtered.length) acc[cat] = filtered;
      return acc;
    },
    {} as Record<SkillCategory, TechnicalSkill[]>,
  );

  return (
    <section id="competences" className="flex flex-col gap-10">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold tracking-tight">Compétences</h2>
      </div>

      {/* Ligne 1 : Techniques + Transversales */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Techniques */}
        <div className="flex flex-col gap-5 rounded-xl border p-5">
          <p className="text-sm font-semibold">Compétences techniques</p>
          {CATEGORY_ORDER.filter((c) => grouped[c]).map((cat) => (
            <TechGroup key={cat} category={cat} skills={grouped[cat]} />
          ))}
        </div>

        {/* Transversales */}
        <div className="flex flex-col gap-4 rounded-xl border p-5">
          <p className="text-sm font-semibold">Compétences transversales</p>
          <div className="flex flex-wrap gap-2">
            {transversalSkills.map((skill) => (
              <TransversalChip key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      {/* Ligne 2 : Valeurs / Antivaleurs */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Valeurs */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <ThumbsUp className="size-4 text-emerald-500" />
            <p className="text-sm font-semibold">Ce qui me motive</p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {values.map((v) => (
              <ValueCard key={v.id} value={v} type="value" />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <ThumbsDown className="size-4 text-red-500" />
            <p className="text-sm font-semibold">Ce qui me dérange</p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {antivalues.map((v) => (
              <ValueCard key={v.id} value={v} type="antivalue" />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Telescope className="size-4 text-muted-foreground" />
          <p className="text-sm font-semibold">Où je me vois</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {horizons.map((horizon) => (
            <div key={horizon.id} className="flex flex-col gap-2 rounded-xl border bg-muted/20 p-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {horizon.label}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">{horizon.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetencesSection;

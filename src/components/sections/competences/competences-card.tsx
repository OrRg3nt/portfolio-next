import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import type { SkillCategory, TechnicalSkill, TransversalSkill } from '@/data/skills';

// --- Carte compétences techniques ---

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  language: 'Langages',
  framework: 'Frameworks & Librairies',
  tool: 'Outils',
  os: 'Systèmes',
};

interface TechnicalSkillsCardProps {
  skills: TechnicalSkill[];
}

export const TechnicalSkillsCard = ({ skills }: TechnicalSkillsCardProps) => {
  const grouped = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<SkillCategory, TechnicalSkill[]>,
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Compétences Techniques</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {(Object.keys(grouped) as SkillCategory[]).map((category) => (
          <div key={category}>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              {CATEGORY_LABELS[category]}
            </p>
            <div className="space-y-3">
              {grouped[category].map((skill) => (
                <div key={skill.id} className="flex items-center gap-3">
                  <span className="text-sm font-medium w-24 shrink-0">{skill.label}</span>
                  <Progress value={skill.level} className="h-2 flex-1" />
                  <span className="text-xs text-muted-foreground w-8 text-right shrink-0">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

// --- Carte compétences transversales ---

interface TransversalSkillsCardProps {
  skills: TransversalSkill[];
}

export const TransversalSkillsCard = ({ skills }: TransversalSkillsCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Compétences Transversales</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.id}
                className="flex items-center gap-2 rounded-lg border bg-muted/40 px-3 py-2 text-sm font-medium"
              >
                <Icon className="h-4 w-4" />
                <span>{skill.label}</span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

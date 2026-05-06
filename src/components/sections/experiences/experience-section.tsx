import ExperienceItem from '@/components/sections/experiences/experience-card';
import { experiences } from '@/data/experiences';

const ExperiencesSection = () => {
  return (
    <section id="experiences" className="flex flex-col gap-2">
      <div className="flex flex-col gap-1 mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Expériences</h2>
        <p className="text-sm text-muted-foreground">{experiences.length} expériences</p>
      </div>

      <div className="relative flex flex-col gap-12 pb-4">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={`${experience.company}-${experience.role}`}
            experience={experience}
            index={index}
            isLast={index === experiences.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperiencesSection;

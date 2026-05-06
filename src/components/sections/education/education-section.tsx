import EducationItem from '@/components/sections/education/education-item';
import { education } from '@/data/education';

const EducationSection = () => {
  return (
    <section id="formation" className="flex flex-col gap-2">
      <div className="flex flex-col gap-1 mb-6">
        <h2 className="text-2xl font-bold tracking-tight">Formation</h2>
        <p className="text-sm text-muted-foreground">{education.length} étapes</p>
      </div>

      <div className="relative flex flex-col gap-12 pb-4">
        {education.map((item, index) => (
          <EducationItem
            key={`${item.school}-${item.startDate}`}
            education={item}
            index={index}
            isLast={index === education.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;

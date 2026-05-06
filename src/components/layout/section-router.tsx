'use client';

import { usePathname, useRouter } from 'next/navigation';

import { useState } from 'react';

import { Globe } from 'lucide-react';
import { useLocale } from 'next-intl';

import CompetencesSection from '@/components/sections/competences-section';
import EducationSection from '@/components/sections/education/education-section';
import EngagementsSection from '@/components/sections/engagements/engagements-section';
import ExperiencesSection from '@/components/sections/experiences/experience-section';
import ProjectsSection from '@/components/sections/projects-section';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SECTIONS = [
  { id: 'projets', label: 'Projets', component: ProjectsSection },
  { id: 'competences', label: 'Compétences', component: CompetencesSection },
  { id: 'formation', label: 'Formation', component: EducationSection },
  { id: 'experiences', label: 'Expériences', component: ExperiencesSection },
  { id: 'engagements', label: 'Engagements', component: EngagementsSection },
] as const;

type SectionId = (typeof SECTIONS)[number]['id'];

const SectionRouter = () => {
  const [active, setActive] = useState<SectionId>('projets');

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr';
    router.push(pathname.replace(`/${locale}`, `/${newLocale}`));
  };

  const CurrentComponent = SECTIONS.find((s) => s.id === active)!.component;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-8">
          <Tabs value={active} onValueChange={(v) => setActive(v as SectionId)}>
            <TabsList variant="line">
              {SECTIONS.map((section) => (
                <TabsTrigger key={section.id} value={section.id}>
                  {section.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <Button onClick={switchLocale} variant="ghost" size="sm" className="ml-4 gap-1.5 text-muted-foreground">
            <Globe className="size-3.5" />
            {locale === 'fr' ? 'EN' : 'FR'}
          </Button>
        </div>
      </div>

      <div className="px-8 py-10">
        <CurrentComponent />
      </div>
    </div>
  );
};

export default SectionRouter;

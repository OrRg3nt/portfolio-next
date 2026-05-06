import { useState } from 'react';

import ProjectCard from '@/components/sections/projects/project-card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projects } from '@/data/projects';

const ProjectsScrollbar = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all' ? projects : projects.filter((p) => p.topic === activeTab);

  return (
    <section id="projects" className="flex flex-col items-center gap-4">
      <Tabs defaultValue="all">
        <TabsList variant="line">
          <TabsTrigger value="all" onClick={() => setActiveTab('all')}>
            All
          </TabsTrigger>
          <TabsTrigger value="cybersecurity" onClick={() => setActiveTab('cybersecurity')}>
            Cybersecurity
          </TabsTrigger>
          <TabsTrigger value="dev" onClick={() => setActiveTab('dev')}>
            Dev
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <ScrollArea className="w-6xl rounded-md border whitespace-nowrap">
        <div className="flex w-max space-x-4 p-4">
          {filteredProjects.map((project) => (
            <div key={project.name}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default ProjectsScrollbar;

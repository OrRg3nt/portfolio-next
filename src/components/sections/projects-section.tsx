'use client';

import { useState } from 'react';

import ProjectCard from '@/components/sections/projects/project-card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projects } from '@/data/projects';

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all' ? projects : projects.filter((p) => p.topic === activeTab);

  return (
    <section id="projects" className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold tracking-tight">Projets</h2>
        <p className="text-sm text-muted-foreground">{projects.length} projets au total</p>
      </div>

      <Tabs defaultValue="all">
        <TabsList variant="line">
          <TabsTrigger value="all" onClick={() => setActiveTab('all')}>
            Tous
          </TabsTrigger>
          <TabsTrigger value="cybersecurity" onClick={() => setActiveTab('cybersecurity')}>
            Cybersécurité
          </TabsTrigger>
          <TabsTrigger value="dev" onClick={() => setActiveTab('dev')}>
            Dev
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

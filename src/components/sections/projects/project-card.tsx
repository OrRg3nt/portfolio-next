import Link from 'next/link';

import { BookOpen, CalendarDays, Check, Clock, Code2, ExternalLink, GitBranch, Timer } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { Project } from '@/data/projects';

type Props = {
  project: Project;
};

const StatusBadge = ({ status }: { status: Project['status'] }) => {
  if (status === 'completed')
    return (
      <Badge className="gap-1 bg-green-500/10 text-green-500 hover:bg-green-500/20">
        <Check className="size-3" />
        Terminé
      </Badge>
    );
  if (status === 'in-progress')
    return (
      <Badge className="gap-1 bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">
        <Clock className="size-3" />
        En cours
      </Badge>
    );
  return <Badge variant="secondary">Archivé</Badge>;
};

const DifficultyBadge = ({ difficulty }: { difficulty: Project['difficulty'] }) => {
  if (difficulty === 'beginner')
    return <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20">Débutant</Badge>;
  if (difficulty === 'intermediate')
    return <Badge className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">Intermédiaire</Badge>;
  return <Badge className="bg-red-500/10 text-red-500 hover:bg-red-500/20">Avancé</Badge>;
};

const contextLabel: Record<Project['context'], string> = {
  personnel: 'Personnel',
  scolaire: 'Scolaire',
  stage: 'Stage',
};

const ProjectCard = ({ project }: Props) => {
  return (
    <Card className="flex w-72 flex-col justify-between">
      <CardHeader className="gap-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base leading-snug">{project.name}</CardTitle>
          <StatusBadge status={project.status} />
        </div>
        <CardDescription className="line-clamp-2 text-sm">{project.description}</CardDescription>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-row place-content-between text-xs text-muted-foreground">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5">
            <CalendarDays className="size-3.5" />
            {project.date}
          </div>
          <div className="flex items-center gap-1.5">
            <Timer className="size-3.5" />
            {project.duration}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5">
            <BookOpen className="size-3.5" />
            {contextLabel[project.context]}
          </div>
          <div className="flex items-center gap-1.5">
            <Code2 className="size-3.5" />
            <DifficultyBadge difficulty={project.difficulty} />
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <GitBranch className="size-3.5" />
            GitHub
          </Link>
        )}
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ExternalLink className="size-3.5" />
            Demo
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

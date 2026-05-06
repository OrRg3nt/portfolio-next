import Link from 'next/link';

import { SiGithub, SiLinkerd } from '@icons-pack/react-simple-icons';
import { Mail } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import profileImg from '@/static/profile.png';

const HeroSection = () => {
  return (
    <section id="about" className="flex flex-col items-center gap-6 text-center">
      <Avatar className="h-28 w-28 ring-2 ring-border ring-offset-2 ring-offset-background">
        <AvatarImage src={profileImg.src} alt="profile" className="object-cover object-top" />
        <AvatarFallback>BP</AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">Benjamin Paquet</h1>
        <div className="flex items-center justify-center gap-3 text-muted-foreground">
          <span className="text-sm">Étudiant Ingénieur</span>
          <Separator orientation="vertical" className="h-3.5" />
          <span className="text-sm">Cybersécurité</span>
        </div>
      </div>

      <div className="flex gap-1.5">
        <Badge variant="outline">Python</Badge>
        <Badge variant="outline">Linux</Badge>
        <Badge variant="outline">React</Badge>
        <Badge variant="outline">TypeScript</Badge>
      </div>

      <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
        Curieux, rigoureux, et convaincu que la sécurité est l'affaire de tous — je construis mes compétences pour
        protéger ce qui compte vraiment dans un monde de plus en plus connecté.
      </p>

      <div className="flex gap-3">
        <Button size="sm" asChild>
          <Link href="#projects">Mes projets</Link>
        </Button>
        <Button size="sm" variant="outline" asChild>
          <Link href="mailto:benjamin@example.com">Me contacter</Link>
        </Button>
      </div>

      <div className="flex gap-3">
        <Link
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <SiGithub className="size-4" />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <SiLinkerd className="size-4" />
        </Link>
        <Link
          href="mailto:benjamin@example.com"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <Mail className="size-4" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

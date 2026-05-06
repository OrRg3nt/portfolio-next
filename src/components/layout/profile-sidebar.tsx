import Link from 'next/link';

import { SiGithub } from '@icons-pack/react-simple-icons';
import { Mail, MapPin } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import profileImg from '@/static/profile.png';

const LinkedInIcon = () => (
  <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img">
    <title>LinkedIn</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ProfileSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-72 flex-col gap-6 border-r bg-background px-6 py-10 overflow-y-auto">
      <div className="flex flex-col items-center gap-4 text-center">
        <Avatar className="h-24 w-24 ring-2 ring-border ring-offset-2 ring-offset-background">
          <AvatarImage
            src={profileImg.src}
            alt="Photo de profil de Benjamin Paquet"
            className="object-cover object-top"
          />
          <AvatarFallback>BP</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-bold tracking-tight">Benjamin Paquet</h1>
          <p className="text-sm text-muted-foreground">Étudiant Ingénieur · Cybersécurité</p>
          <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mt-1">
            <MapPin className="size-3" />
            Angers, France
          </div>
        </div>
      </div>

      <Separator />

      <p className="text-xs leading-relaxed text-muted-foreground text-center">
        Curieux et rigoureux, je construis mes compétences pour protéger ce qui compte dans un monde de plus en plus
        connecté.
      </p>

      <Separator />

      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Stack</p>
        <div className="flex flex-wrap gap-1.5">
          {['Python', 'Linux', 'React', 'TypeScript', 'Docker'].map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Contact</p>
        <div className="flex flex-col gap-2">
          <Link
            href="mailto:paquet.benjamin.1@gmail.com"
            className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-3.5" />
            paquet.benjamin.1@gmail.com
          </Link>
          <Link
            href="https://github.com/OrRg3nt"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <SiGithub className="size-3.5" />
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/benjamin-paquet-31b0b932a/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <LinkedInIcon />
            LinkedIn
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default ProfileSidebar;

import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import Pager from '@/components/pager';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { hackathons } from '@/constants/hackathons';
import { projects } from '@/constants/projects';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const ProjectsPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Projects</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          A lot of ideas, but some are still under construction!
        </PageHeaderHeading>
      </PageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 card-container">
        {projects.map((project, index) => (
          <Card
            title={project.overview}
            key={index}
            className="relative w-full transition-all duration-300 cursor-pointer isolate hover:scale-105"
          >
            <CardHeader>
              <CardTitle className="leading-6">{project.title}</CardTitle>
              <CardDescription className="flex flex-col gap-2">
                {project.tagline}
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-muted-foreground "
                >
                  Learn More...
                  <span className="absolute inset-0"></span>
                </Link>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <section className="mt-12">
        <PageHeader className="mb-8">
          <PageHeaderHeading className="text-2xl">Hackathons</PageHeaderHeading>
          <PageHeaderHeading className="mt-2 text-muted-foreground text-lg">
            Built fast, judged hard, shipped anyway.
          </PageHeaderHeading>
        </PageHeader>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 card-container">
          {hackathons.map((hackathon) => (
            <Card
              key={hackathon.title}
              className="relative w-full border-border/50 bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader className="gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline">{hackathon.event}</Badge>
                  <Badge>{hackathon.achievement}</Badge>
                </div>
                <CardTitle className="leading-6">{hackathon.title}</CardTitle>
                <CardDescription className="text-sm leading-6">
                  {hackathon.tagline}
                </CardDescription>
                <CardDescription className="text-sm leading-6">
                  {hackathon.overview}
                </CardDescription>
                <div className="flex flex-wrap gap-2 pt-2">
                  {hackathon.techStack.slice(0, 6).map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardFooter className="flex items-center justify-between gap-3">
                <p className="text-sm text-muted-foreground">
                  Solves EV range anxiety with smarter charging route planning.
                </p>
                <Button asChild size="sm" className="rounded-md shrink-0">
                  <Link href={hackathon.links.live} target="_blank">
                    Live Project
                    <ExternalLink className="size-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Pager
        prevHref="/about"
        nextHref="/skills-tools"
        prevTitle="About"
        nextTitle="Skills & Tools"
      />
    </>
  );
};
export default ProjectsPage;

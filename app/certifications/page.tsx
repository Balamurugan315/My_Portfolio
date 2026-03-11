import Link from "next/link";
import { Award, BookOpen, BriefcaseBusiness, ExternalLink } from "lucide-react";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const skillsCovered = [
  "Java Programming",
  "Object-Oriented Programming (OOP)",
  "HTML",
  "CSS",
  "JavaScript",
  "Database Concepts",
  "Full Stack Application Development",
  "Software Development Best Practices",
];

const learnings = [
  "Building full stack web applications using Java technologies",
  "Writing clean and structured backend logic",
  "Designing responsive frontend interfaces",
  "Understanding real-world software development workflows",
];

const CertificationsPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Certifications</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Structured training that maps directly to production-oriented full stack work.
        </PageHeaderHeading>
        <PageHeaderDescription>
          This section highlights certifications that validate my practical software
          engineering skills and my readiness to contribute in industry environments.
        </PageHeaderDescription>
      </PageHeader>

      <section className="rounded-[28px] border border-border/40 bg-card/50 p-6 backdrop-blur-sm lg:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300">
                <Award className="size-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">
                  Java Full Stack Development
                </h2>
                <p className="text-sm text-muted-foreground">
                  Issued by Wipro Limited & TalentNext
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Completion Period
            </p>
            <p className="mt-2 text-lg font-semibold">July - October 2025</p>

            <p className="mt-6 text-base leading-7 text-muted-foreground">
              I successfully completed the Digital Skills Readiness Program focused
              on Java Full Stack Development. This program strengthened my
              understanding of both frontend and backend development and helped me
              build a solid base for scalable web application development.
            </p>
          </div>

          <div className="rounded-3xl border border-border/40 bg-background/80 p-5 lg:w-[320px]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Proof
            </p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Official certificate from the Wipro TalentNext Digital Skills Readiness Program.
            </p>
            <Button asChild className="mt-5 w-full rounded-full">
              <Link href="/resume/BalaMuruganM_Wipro.pdf" target="_blank" rel="noreferrer">
                View Certificate
                <ExternalLink className="size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <BookOpen className="size-5 text-primary" />
              <h3 className="text-lg font-semibold">Skills & Technologies Covered</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillsCovered.map((skill) => (
                <Badge key={skill} variant="outline" className="px-4 py-1 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-2">
              <BriefcaseBusiness className="size-5 text-primary" />
              <h3 className="text-lg font-semibold">What I Learned</h3>
            </div>
            <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
              {learnings.map((learning) => (
                <li key={learning} className="rounded-2xl border border-border/40 bg-background/60 px-4 py-3">
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-border/40 bg-muted/30 p-5">
          <h3 className="text-lg font-semibold">Outcome</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            This certification demonstrates my readiness to work on industry-level
            full stack development projects with stronger fundamentals in Java,
            frontend implementation, backend design, and software development best practices.
          </p>
        </div>
      </section>

      <Pager
        prevHref="/education"
        nextHref="/stats"
        prevTitle="Education"
        nextTitle="Stats"
      />
    </>
  );
};

export default CertificationsPage;

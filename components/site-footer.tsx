export const dynamic = "auto";

import { siteConfig } from "@/config/site";
import Link from "next/link";

export async function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background/95 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex flex-col items-center justify-center space-y-2 py-4">
          <div className="max-w-3xl text-balance text-center text-xs leading-relaxed text-muted-foreground sm:text-sm">
            <span className="block sm:inline">©2026</span>
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">
              Built with{" "}
              <span className="font-medium text-foreground">Next.js</span>,{" "}
              <span className="font-medium text-foreground">shadcn/ui</span> and{" "}
              <span className="font-medium text-foreground">Tailwind CSS</span>
            </span>
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline">
              Deployed with{" "}
              <span className="font-medium text-foreground">Vercel</span>
            </span>
          </div>
          <div className="text-center text-xs text-muted-foreground sm:text-sm">
            Developed by{" "}
            <Link
              href={siteConfig.links.githubProfile}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary transition-colors hover:text-primary/80"
            >
              Balamurugan
            </Link>{" "}
            · Connect on{" "}
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary transition-colors hover:text-primary/80"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

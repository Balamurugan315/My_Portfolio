import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { ExternalLink, Mail } from 'lucide-react';
import Link from 'next/link';

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Balamurugan</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Full-stack software engineer focused on useful, scalable products.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Software engineer with experience in React, Node.js, Java, Python,
          and SQL. I build and deploy scalable web applications with
          authentication, analytics, and cloud infrastructure, with a strong
          focus on reliable product behavior and clean implementation.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href={siteConfig.links.resume} target="_blank">
              Get Resume
              <ExternalLink className="size-3" strokeWidth={2} />
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link
              href={siteConfig.links.emailCompose}
              target="_blank"
              rel="noreferrer"
            >
              <Mail className="size-4" />
              Send Mail
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Previous"
        nextTitle="About Me"
      />
    </>
  );
};
export default IntroductionPage;

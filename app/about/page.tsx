import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About Balamurugan</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Engineering mindset, product focus, and hands-on execution.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I am a full-stack developer who enjoys building practical software
          that solves real operational problems. My work spans frontend
          interfaces, backend APIs, data handling, and deployment, with an
          emphasis on performance, maintainability, and usability.
        </PageHeaderDescription>

        <PageHeaderDescription>
          I have worked across React, Node.js, Java, Python, SQL, MongoDB, and
          cloud deployment platforms. Alongside web engineering, I have also
          explored AI-driven systems using CNNs, SSD-ResNet, OpenCV, and other
          machine learning libraries.
        </PageHeaderDescription>

        <PageHeaderDescription>
          I like projects where technical depth meets real adoption, whether
          that means streamlining bookkeeping, improving security workflows, or
          building products that teams can use daily without friction.
        </PageHeaderDescription>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;

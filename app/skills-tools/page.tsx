import { Icons } from '@/components/icons';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import { Badge } from '@/components/ui/badge';
import { mySkills } from '@/constants';

const SkillsToolsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Skills & Tools</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Core technologies I use to build and ship software.
        </PageHeaderHeading>
        <PageHeaderDescription>
          My stack covers full-stack web development, databases, core computer
          science fundamentals, and applied AI tooling. I work comfortably
          across product interfaces, backend services, deployment, and
          problem-solving under real project constraints.
        </PageHeaderDescription>
      </PageHeader>

      <div
        id="badges"
        className="my-4 flex flex-wrap items-center justify-center gap-2"
      >
        {mySkills.map((item) => (
          <Badge
            key={item.title}
            className="border border-secondary bg-secondary-foreground p-4 py-2 text-secondary"
          >
            {Icons[item.icon as keyof typeof Icons]?.({
              className: 'mr-2 size-4',
            })}
            {item.title}
          </Badge>
        ))}
      </div>

      <Pager
        prevHref="/projects"
        nextHref="/experience"
        prevTitle="Projects"
        nextTitle="Experience"
      />
    </>
  );
};
export default SkillsToolsPage;

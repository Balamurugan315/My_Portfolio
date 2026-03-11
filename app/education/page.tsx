import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header';
import Pager from '@/components/pager';
import TimelineViewer from '@/components/timeline-viewer';
import { education } from '@/constants/education';

const EducationPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Education</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Academic foundation backed by practical software work.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I am pursuing a B.E. in Computer Science and Engineering at Sri Sai
          Ram Institute of Technology, Chennai, where I have built a strong
          base in software engineering, databases, programming, and systems.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Alongside academics, I have focused heavily on project-based
          learning, competitive problem solving, and production-oriented
          application development.
        </PageHeaderDescription>
      </PageHeader>

      <TimelineViewer data={education} />

      <Pager
        prevHref="/experience"
        nextHref="/certifications"
        prevTitle="Experience"
        nextTitle="Certifications"
      />
    </>
  );
};
export default EducationPage;

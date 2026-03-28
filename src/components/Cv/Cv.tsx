import { forwardRef } from "react";
import './Cv.css';
import GeneralInfoBlock from './GeneralInfoBlock';
import WorkExperienceBlock from './WorkExperienceBlock';
import EducationBlock from './EducationBlock';
import SkillsBlock from './SkillsBlock';
import { DataType } from "../../types/data";
import { Job } from "../../types/job";

interface CvProps {
  data: DataType;
  jobs: Job[];
  currentJob: Job;
  touchedFields: Record<string, boolean>;
}

const Cv = forwardRef<HTMLDivElement, CvProps>(function Cv(
  { data, jobs, currentJob, touchedFields },
  ref
) {
  const {
    firstName,
    lastName,
    email,
    phone,
    city,
    role,
    linkedIn,
    website,
    summary,
    photoUrl,
  } = data;

  const { degree, institution, eduStartYear, eduEndYear } = data;

  const generalProps = {
    firstName,
    lastName,
    email,
    phone,
    city,
    role,
    linkedIn,
    website,
    summary,
    photoUrl,
  };

  const eduProps = {
    degree,
    institution,
    eduStartYear,
    eduEndYear,
  };

  return (
    <div ref={ref} id="cv" className="cv">
      <GeneralInfoBlock data={generalProps} touchedFields={touchedFields} />
      <WorkExperienceBlock
        jobs={jobs}
        touchedFields={touchedFields}
        currentJob={currentJob}
      />
      <EducationBlock data={eduProps} touchedFields={touchedFields} />
      <SkillsBlock skills={data.skills} touchedFields={touchedFields} />
    </div>
  );
});

export default Cv;

interface CvBlockProps {
  blockName: string;
  children: React.ReactNode;
}

export function CvBlock({ blockName, children }: CvBlockProps) {
  const blockId = blockName.toLowerCase().replace(' ', '-');
  return <div className={`cv-block ${blockId}`}>{children}</div>;
}

interface CvCellProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function CvCell({ id, className, children }: CvCellProps) {
  return (
    <div id={id} className={`cv-cell ${className}`}>
      {children}
    </div>
  );
}

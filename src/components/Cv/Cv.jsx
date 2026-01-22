import './Cv.css';
import GeneralInfoBlock from './GeneralInfoBlock';
import WorkExperienceBlock from './WorkExperienceBlock';
import EducationBlock from './EducationBlock';
import SkillsBlock from './SkillsBlock';

export default function Cv({ data, jobs, currentJob }) {
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
  };
  const eduProps = {
    degree,
    institution,
    eduStartYear,
    eduEndYear,
  };

  return (
    <div id="cv" className="cv">
      <GeneralInfoBlock data={generalProps} />
      <WorkExperienceBlock jobs={jobs} currentJob={currentJob} />
      <EducationBlock data={eduProps} />
      <SkillsBlock skills={data.skills} />
    </div>
  );
}

export function CvBlock({ blockName, children }) {
  const blockId = blockName.toLowerCase().replace(' ', '-');
  return <div className={`cv-block ${blockId}`}>{children}</div>;
}

export function CvCell({ id, className, children }) {
  return (
    <div id={id} className={`cv-cell ${className}`}>
      {children}
    </div>
  );
}

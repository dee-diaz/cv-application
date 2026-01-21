import './Cv.css';
import { FORM_BLOCKS, DUMMY } from '../../config/cvForm';
import GeneralInfoBlock from './GeneralInfoBlock';
import WorkExperienceBlock from './WorkExperienceBlock';
import EducationBlock from './EducationBlock';
import SkillsBlock from './SkillsBlock';

export default function Cv({ data }) {
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
  const workProps = [DUMMY.job3, DUMMY.job2, DUMMY.job1];
  const eduProps = {
    degree,
    institution,
    eduStartYear,
    eduEndYear,
  };

  return (
    <div id="cv" className="cv">
      <GeneralInfoBlock data={generalProps} />
      <WorkExperienceBlock data={workProps} />
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

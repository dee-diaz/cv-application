import { forwardRef } from "react";
import './Cv.css';
import GeneralInfoBlock from './GeneralInfoBlock';
import WorkExperienceBlock from './WorkExperienceBlock';
import EducationBlock from './EducationBlock';
import SkillsBlock from './SkillsBlock';

// export default function Cv({ data, jobs, currentJob, touchedFields, ref }) {
//   const {
//     firstName,
//     lastName,
//     email,
//     phone,
//     city,
//     role,
//     linkedIn,
//     website,
//     summary,
//     photoUrl,
//   } = data;
//   const { degree, institution, eduStartYear, eduEndYear } = data;
//   const generalProps = {
//     firstName,
//     lastName,
//     email,
//     phone,
//     city,
//     role,
//     linkedIn,
//     website,
//     summary,
//     photoUrl,
//   };
//   const eduProps = {
//     degree,
//     institution,
//     eduStartYear,
//     eduEndYear,
//   };

//   return (
//     <div id="cv" className="cv">
//       <GeneralInfoBlock data={generalProps} touchedFields={touchedFields} />
//       <WorkExperienceBlock
//         jobs={jobs}
//         touchedFields={touchedFields}
//         currentJob={currentJob}
//       />
//       <EducationBlock data={eduProps} touchedFields={touchedFields} />
//       <SkillsBlock skills={data.skills} touchedFields={touchedFields} />
//     </div>
//   );
// }

const Cv = forwardRef(function Cv(
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

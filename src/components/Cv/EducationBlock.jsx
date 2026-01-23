import { CvBlock, CvCell } from './Cv';
import { FORM_BLOCKS, DUMMY } from '../../config/cvForm';

export default function EducationBlock({ data, touchedFields }) {
  let fields = {
    degree: !data.degree ? DUMMY.degree : data.degree,
    institution: !data.institution ? DUMMY.institution : data.institution,
    eduStartYear: !data.eduStartYear ? DUMMY.eduStartYear : data.eduStartYear,
    eduEndYear: !data.eduEndYear ? DUMMY.eduEndYear : data.eduEndYear,
  };

  Object.keys(touchedFields).forEach((field) => {
    if (!data[field]) fields[field] = '';
  });

  return (
    <CvBlock blockName={FORM_BLOCKS.EDUCATION}>
      <CvCell className="cell-title">
        <p>{FORM_BLOCKS.EDUCATION}</p>
      </CvCell>

      <EducationItem
        degree={fields.degree}
        school={fields.institution}
        startYear={fields.eduStartYear}
        endYear={fields.eduEndYear}
      />
    </CvBlock>
  );
}

function EducationItem({ degree, school, startYear, endYear }) {
  return (
    <CvCell className="education-block">
      <p className="degree">{degree}</p>
      <p className="school">{school}</p>
      {(startYear || endYear) && (
          <p className="years">{`${startYear} - ${endYear}`}</p>
        )}
    </CvCell>
  );
}

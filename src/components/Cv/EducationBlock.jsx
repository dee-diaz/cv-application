import { CvBlock, CvCell } from './Cv';
import { FORM_BLOCKS, DUMMY } from '../../config/cvForm';

export default function EducationBlock({ data }) {
  return (
    <CvBlock blockName={FORM_BLOCKS.EDUCATION}>
      <CvCell className="cell-title">
        <p>{FORM_BLOCKS.EDUCATION}</p>
      </CvCell>

      <EducationItem
        degree={!data.degree ? DUMMY.degree : data.degree}
        school={!data.institution ? DUMMY.institution : data.institution}
        startYear={!data.eduStartYear ? DUMMY.eduStartYear : data.eduStartYear}
        endYear={!data.eduEndYear ? DUMMY.eduEndYear : data.eduEndYear}
      />
    </CvBlock>
  );
}

function EducationItem({ degree, school, startYear, endYear }) {
  return (
    <CvCell className="education-block">
      <p className="degree">{degree}</p>
      <p className="school">{school}</p>
      <p className="years">{`${startYear}-${endYear}`}</p>
    </CvCell>
  );
}

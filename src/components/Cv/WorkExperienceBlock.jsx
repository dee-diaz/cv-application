import { CvBlock, CvCell } from "./Cv";
import { FORM_BLOCKS, DUMMY } from '../../config/cvForm';

export default function WorkExperienceBlock({ data }) {
  return (
    <CvBlock blockName={FORM_BLOCKS.WORK_EXPERIENCE}>
      <CvCell className="cell-title">
        <p>{FORM_BLOCKS.WORK_EXPERIENCE}</p>
      </CvCell>

      {data.map((job) => (
        <WorkItem key={job.id} {...job} />
      ))}
    </CvBlock>
  );
}

function WorkItem({
  id,
  jobTitle,
  company,
  jobStartDate,
  jobEndDate,
  companyLocation,
  achievements,
}) {
  return (
    <CvCell id={id} className="work-block">
      <div className="general">
        <p className="role">{jobTitle}</p>
        <p className="company">{company}</p>
        <p className="dates">{`${jobStartDate} - ${jobEndDate}`}</p>
        <p className="location">{companyLocation}</p>
      </div>
      <ul className="achievements">
        {achievements.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </CvCell>
  );
}
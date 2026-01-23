import { CvBlock, CvCell } from './Cv';
import { FORM_BLOCKS, DUMMY_JOBS, jobInitial } from '../../config/cvForm';

export default function WorkExperienceBlock({ jobs, currentJob, touchedFields }) {
  const hasCurrentJobData = Object.values(currentJob).some(
    (val) => val && val.toString().trim() !== '',
  );

  let jobsToRender =
    jobs.length > 0 ? jobs : hasCurrentJobData ? [currentJob] : DUMMY_JOBS;
  
  Object.keys(jobInitial).forEach(inputId => {
    if (touchedFields[inputId] && !hasCurrentJobData && jobs.length === 0) jobsToRender = [{}];
  })

  return (
    <CvBlock blockName={FORM_BLOCKS.WORK_EXPERIENCE}>
      <CvCell className="cell-title">
        <p>{FORM_BLOCKS.WORK_EXPERIENCE}</p>
      </CvCell>

      {jobsToRender.map((job, index) => (
        <WorkItem key={job.id ?? `job-${index}`} {...job} />
      ))}
    </CvBlock>
  );
}

function WorkItem({
  jobTitle,
  company,
  jobStartDate,
  jobEndDate,
  companyLocation,
  a1,
  a2,
  a3,
}) {
  const achievements = [a1, a2, a3].filter(Boolean);

  return (
    <CvCell className="work-block">
      <div className="general">
        <p className="role">{jobTitle}</p>
        <p className="company">{company}</p>
        {(jobStartDate || jobEndDate) && (
          <p className="dates">{`${jobStartDate} - ${jobEndDate}`}</p>
        )}
        <p className="location">{companyLocation}</p>
      </div>
      <ul className="achievements">
        {achievements.map((item, i) => (
          <li key={`${i}-${item}`}>{item}</li>
        ))}
      </ul>
    </CvCell>
  );
}

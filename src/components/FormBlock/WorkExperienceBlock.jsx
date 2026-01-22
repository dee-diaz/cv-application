import './FormBlock.css';
import { useState } from 'react';
import { Button } from '../Button/Button.jsx';
import { BTN_TYPES } from '../../config/cvForm';
import Input from './Input.jsx';

export function WorkExperienceBlock({
  inputs,
  savedJobs,
  currentJob,
  onChange,
  onSubmit,
  onEditJob,
}) {
  const [formMode, setFormMode] = useState({
    isFormMode: true,
    isEditMode: false,
  });
  const inputsArr = Object.values(inputs);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit?.(currentJob);
    setFormMode({ isFormMode: false, isEditMode: false });
  }

  function handleEdit(jobId) {
    setFormMode({ isFormMode: true, isEditMode: true });
    onEditJob?.(jobId);
  }

  return (
    <div className="form-block-wrapper">
      {formMode.isFormMode ? (
        <form
          className="work-experience"
          name="work-experience"
          id="work-experience"
          onSubmit={handleSubmit}
        >
          {inputsArr.map((input) => (
            <Input
              key={input.id}
              value={currentJob?.[input.id] ?? ''}
              onChange={onChange}
              {...input}
            />
          ))}

          <Achievements currentJob={currentJob} onChange={onChange} />

          <Button type="submit" btnText={BTN_TYPES.SAVE} />
        </form>
      ) : (
        <>
          <JobList jobs={savedJobs} onEdit={handleEdit} />
          <Button
            btnText={BTN_TYPES.ADD}
            onClick={() => setFormMode({ isFormMode: true, isEditMode: false })}
          />
        </>
      )}
    </div>
  );
}

function Achievements({ currentJob, onChange }) {
  return (
    <fieldset className="field-group" aria-describedby="achievements-help">
      <legend>Achievements or responsibilities</legend>
      <p id="achievements-help">
        Describe what you achieved or built in this role (3 max)
      </p>
      <ol className="achievements">
        {[1, 2, 3].map((i) => (
          <li key={i}>
            <Input
              name={`a${i}`}
              id={`a${i}`}
              value={currentJob?.[`a${i}`] ?? ""}
              onChange={onChange}
              aria-label={`Achievement ${i}`}
            />
          </li>
        ))}
      </ol>
    </fieldset>
  );
}

function JobList({ jobs, onEdit }) {
  return (
    <ul>
      {jobs.map((job, index) => (
        <JobItem
          key={job.id || index}
          jobId={job.id || index}
          jobTitle={job.jobTitle}
          company={job.company}
          startDate={job.jobStartDate}
          endDate={job.jobEndDate}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

function JobItem({ jobId, jobTitle, company, startDate, endDate, onEdit }) {
  return (
    <li className="job-item">
      <div>
        <p className="role">{jobTitle}</p>
        <p className="company">{company}</p>
        <p className="dates">{`${startDate} - ${endDate}`}</p>
      </div>

      <button type="button" onClick={() => onEdit(jobId)} aria-label="Edit job">
        <svg
          width="20"
          height="20"
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.7594 5.73203L14.268 2.2414C14.1519 2.1253 14.0141 2.0332 13.8624 1.97036C13.7107 1.90752 13.5482 1.87518 13.384 1.87518C13.2198 1.87518 13.0572 1.90752 12.9056 1.97036C12.7539 2.0332 12.6161 2.1253 12.5 2.2414L2.86641 11.875C2.74983 11.9906 2.65741 12.1283 2.59451 12.28C2.5316 12.4317 2.49948 12.5944 2.50001 12.7586V16.25C2.50001 16.5815 2.6317 16.8995 2.86612 17.1339C3.10054 17.3683 3.41849 17.5 3.75001 17.5H16.875C17.0408 17.5 17.1997 17.4341 17.3169 17.3169C17.4342 17.1997 17.5 17.0408 17.5 16.875C17.5 16.7092 17.4342 16.5503 17.3169 16.4331C17.1997 16.3158 17.0408 16.25 16.875 16.25H9.00938L17.7594 7.49999C17.8755 7.38392 17.9676 7.24611 18.0304 7.09443C18.0933 6.94275 18.1256 6.78019 18.1256 6.61601C18.1256 6.45183 18.0933 6.28927 18.0304 6.13759C17.9676 5.98591 17.8755 5.8481 17.7594 5.73203ZM10.625 5.88359L11.9289 7.18749L5.31251 13.8039L4.0086 12.5L10.625 5.88359ZM3.75001 16.25V14.0086L5.99141 16.25H3.75001ZM7.50001 15.9914L6.19688 14.6875L12.8125 8.07109L14.1164 9.37499L7.50001 15.9914ZM15 8.4914L11.5094 4.99999L13.3844 3.12499L16.875 6.6164L15 8.4914Z" />
        </svg>
      </button>
    </li>
  );
}

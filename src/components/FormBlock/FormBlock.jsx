import './FormBlock.css';
import { useState } from 'react';
import { FORM_BLOCKS } from '../../config/cvForm';
import { Button } from '../Button/Button.jsx';
import { BTN_TYPES } from '../../config/cvForm';

export default function FormBlock({
  title,
  inputs,
  savedJobs,
  onChange,
  onSubmit,
}) {
  const [isFormMode, setIsFormMode] = useState(true);

  function handleLocalSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const obj = Object.fromEntries(data.entries());
    onSubmit?.(obj);
    setIsFormMode(false);
  }

  const formId = title.toLowerCase().replace(' ', '-');
  const inputsArr = Object.values(inputs);
  return (
    <div className="form-block-wrapper">
      {title === FORM_BLOCKS.GENERAL ? (
        <ImageUpload title={title} formId={formId} />
      ) : null}

      {isFormMode ? (
        <form
          className={formId}
          name={formId}
          id={formId}
          onSubmit={handleLocalSubmit}
        >
          {inputsArr.map((input) => (
            <Input key={input.id} onChange={onChange} {...input} />
          ))}

          {title === FORM_BLOCKS.WORK_EXPERIENCE ? <Achievements /> : null}
          {title !== FORM_BLOCKS.GENERAL ? (
            <Button type="submit" btnText={BTN_TYPES.SAVE} />
          ) : null}
        </form>
      ) : (
        <>
          <ul>
            {savedJobs.map((job, index) => {
              return (
                <JobItem
                  key={index}
                  jobTitle={job.jobTitle}
                  company={job.company}
                  startDate={job.jobStartDate}
                  endDate={job.jobEndDate}
                  onClick={() => setIsFormMode(true)}
                ></JobItem>
              );
            })}
          </ul>

          <Button btnText={BTN_TYPES.ADD} onClick={() => setIsFormMode(true)} />
        </>
      )}
    </div>
  );
}

function Achievements() {
  return (
    <fieldset className="field-group" aria-describedby="achievements-help">
      <legend>Achievements or responsibilities</legend>
      <p id="achievements-help">
        Describe what you achieved or built in this role (3 max)
      </p>

      <ol className="achievements">
        <li>
          <Input name="a1" id="a1" type="text" aria-label="Achievement 1" />
        </li>
        <li>
          <Input name="a2" id="a2" type="text" aria-label="Achievement 2" />
        </li>
        <li>
          <Input name="a3" id="a3" type="text" aria-label="Achievement 3" />
        </li>
      </ol>
    </fieldset>
  );
}

function Input({ as: Component = 'input', label, id, onChange, ...rest }) {
  return (
    <label>
      {label && <span>{label}</span>}
      {label === 'Skills' ? (
        <p id="skills-help">
          List your most relevant skills. Separate with commas.
        </p>
      ) : null}
      <Component id={id} name={rest.name ?? id} {...rest} onChange={onChange} />
    </label>
  );
}

function ImageUpload({ formId }) {
  return (
    <div className="img-upload">
      <div>
        <svg
          width="24"
          height="24"
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.25 3.75H3.75C3.35218 3.75 2.97064 3.90804 2.68934 4.18934C2.40804 4.47064 2.25 4.85218 2.25 5.25V18.75C2.25 19.1478 2.40804 19.5294 2.68934 19.8107C2.97064 20.092 3.35218 20.25 3.75 20.25H20.25C20.6478 20.25 21.0294 20.092 21.3107 19.8107C21.592 19.5294 21.75 19.1478 21.75 18.75V5.25C21.75 4.85218 21.592 4.47064 21.3107 4.18934C21.0294 3.90804 20.6478 3.75 20.25 3.75ZM20.25 5.25V14.8828L17.8059 12.4397C17.6666 12.3004 17.5013 12.1898 17.3193 12.1144C17.1372 12.039 16.9422 12.0002 16.7452 12.0002C16.5481 12.0002 16.3531 12.039 16.1711 12.1144C15.989 12.1898 15.8237 12.3004 15.6844 12.4397L13.8094 14.3147L9.68438 10.1897C9.4031 9.9086 9.02172 9.7507 8.62406 9.7507C8.22641 9.7507 7.84503 9.9086 7.56375 10.1897L3.75 14.0034V5.25H20.25ZM3.75 16.125L8.625 11.25L16.125 18.75H3.75V16.125ZM20.25 18.75H18.2466L14.8716 15.375L16.7466 13.5L20.25 17.0044V18.75ZM13.5 9.375C13.5 9.1525 13.566 8.93499 13.6896 8.74998C13.8132 8.56498 13.9889 8.42078 14.1945 8.33564C14.4 8.25049 14.6262 8.22821 14.8445 8.27162C15.0627 8.31502 15.2632 8.42217 15.4205 8.5795C15.5778 8.73684 15.685 8.93729 15.7284 9.15552C15.7718 9.37375 15.7495 9.59995 15.6644 9.80552C15.5792 10.0111 15.435 10.1868 15.25 10.3104C15.065 10.434 14.8475 10.5 14.625 10.5C14.3266 10.5 14.0405 10.3815 13.8295 10.1705C13.6185 9.95952 13.5 9.67337 13.5 9.375Z"
            fill="black"
          />
        </svg>
        Your photo
      </div>
      <label>
        <svg
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 9V13C14 13.1326 13.9473 13.2598 13.8536 13.3535C13.7598 13.4473 13.6326 13.5 13.5 13.5H2.5C2.36739 13.5 2.24021 13.4473 2.14645 13.3535C2.05268 13.2598 2 13.1326 2 13V9C2 8.86739 2.05268 8.74021 2.14645 8.64644C2.24021 8.55267 2.36739 8.5 2.5 8.5C2.63261 8.5 2.75979 8.55267 2.85355 8.64644C2.94732 8.74021 3 8.86739 3 9V12.5H13V9C13 8.86739 13.0527 8.74021 13.1464 8.64644C13.2402 8.55267 13.3674 8.5 13.5 8.5C13.6326 8.5 13.7598 8.55267 13.8536 8.64644C13.9473 8.74021 14 8.86739 14 9ZM5.85375 4.85375L7.5 3.20687V9C7.5 9.13261 7.55268 9.25978 7.64645 9.35355C7.74021 9.44732 7.86739 9.5 8 9.5C8.13261 9.5 8.25979 9.44732 8.35355 9.35355C8.44732 9.25978 8.5 9.13261 8.5 9V3.20687L10.1462 4.85375C10.2401 4.94757 10.3673 5.00027 10.5 5.00027C10.6327 5.00027 10.7599 4.94757 10.8538 4.85375C10.9476 4.75993 11.0003 4.63268 11.0003 4.5C11.0003 4.36731 10.9476 4.24007 10.8538 4.14625L8.35375 1.64625C8.30731 1.59976 8.25217 1.56288 8.19147 1.53772C8.13077 1.51255 8.06571 1.4996 8 1.4996C7.93429 1.4996 7.86923 1.51255 7.80853 1.53772C7.74783 1.56288 7.69269 1.59976 7.64625 1.64625L5.14625 4.14625C5.05243 4.24007 4.99972 4.36731 4.99972 4.5C4.99972 4.63268 5.05243 4.75993 5.14625 4.85375C5.24007 4.94757 5.36732 5.00027 5.5 5.00027C5.63268 5.00027 5.75993 4.94757 5.85375 4.85375Z"
            fill="#EBEBEB"
          />
        </svg>
        Upload
        <input type="file" accept="image/*" form={formId} hidden />
      </label>
    </div>
  );
}

function JobItem({ jobTitle, company, startDate, endDate, onClick }) {
  return (
    <li className="job-item">
      <div>
        <p className="role">{jobTitle}</p>
        <p className="company">{company}</p>
        <p className="dates">{`${startDate} - ${endDate}`}</p>
      </div>

      <button type="button" onClick={onClick}>
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

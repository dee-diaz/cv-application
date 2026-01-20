import { useState } from 'react';
import './Cv.css';
import { FORM_BLOCKS, DUMMY } from '../../config/cvForm';
import Icons from './Icons';
import ContactItem from './ContactItem';

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
  // const workProps = [data.job1, data.job2, data.job3].reverse();
  const workProps = [DUMMY.job1, DUMMY.job2, DUMMY.job3].reverse();
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

function GeneralInfoBlock({ data }) {
  return (
    <CvBlock blockName={FORM_BLOCKS.GENERAL}>
      <CvCell className="name-role">
        <h2>{`${data.firstName} ${data.lastName}`}</h2>
        <h3>{data.role}</h3>
      </CvCell>

      <CvCell className="photo">
        <img src="/photo.webp" alt="Photo of a candidate" />
      </CvCell>

      <CvCell className="cell-title">
        <p>Contact Details</p>
      </CvCell>

      <CvCell className="contact-info">
        <ul>
          <ContactItem icon={Icons.Location}>{data.city}</ContactItem>
          <ContactItem icon={Icons.Phone}>{data.phone}</ContactItem>
          <ContactItem icon={Icons.Email}>{data.email}</ContactItem>
        </ul>
      </CvCell>
      <CvCell className="contact-info r-edge">
        <ul>
          <ContactItem icon={Icons.LinkedIn} href={data.linkedIn}>
            {data.linkedIn}
          </ContactItem>
          <ContactItem icon={Icons.Website} href={data.website}>
            {data.website}
          </ContactItem>
        </ul>
      </CvCell>

      <CvCell className="summary">
        <p className="title">Professional summary</p>
        <p>{data.summary}</p>
      </CvCell>
    </CvBlock>
  );
}

function WorkExperienceBlock({ data }) {
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

function EducationBlock({ data }) {
  return (
    <CvBlock blockName={FORM_BLOCKS.EDUCATION}>
      <CvCell className="cell-title">
        <p>{FORM_BLOCKS.EDUCATION}</p>
      </CvCell>

      <EducationItem
        degree={data.degree}
        school={data.institution}
        startYear={data.eduStartYear}
        endYear={data.eduEndYear}
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

function SkillsBlock({ skills }) {
  return (
    <CvBlock blockName={FORM_BLOCKS.SKILLS}>
      <CvCell className="cell-title">
        <p>{FORM_BLOCKS.SKILLS}</p>
      </CvCell>

      <CvCell className="skills-block">
        <p>{skills}</p>
      </CvCell>
    </CvBlock>
  );
}

function CvBlock({ blockName, children }) {
  const blockId = blockName.toLowerCase().replace(' ', '-');
  return <div className={`cv-block ${blockId}`}>{children}</div>;
}

function CvCell({ id, className, children }) {
  return (
    <div id={id} className={`cv-cell ${className}`}>
      {children}
    </div>
  );
}

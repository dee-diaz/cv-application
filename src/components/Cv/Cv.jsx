import './Cv.css';
import { FORM_BLOCKS } from '../../config/cvForm';
import Icons from './Icons';
import ContactItem from './ContactItem';

export default function Cv({ data }) {
  return (
    <div id="cv" className="cv">
      {/* <GeneralInfoBlock data={data.general} />
      <WorkExperienceBlock jobs={data.jobs} />
      <EducationBlock education={data.education} />
      <SkillsBlock skills={data.skills} /> */}

      <CvBlock blockName={FORM_BLOCKS.GENERAL}>
        <CvCell className="name-role">
          <h2>Francis Donovan</h2>
          <h3>Front-end Engineer</h3>
        </CvCell>

        <CvCell className="photo">
          <img src="/photo.webp" alt="Photo of a candidate" />
        </CvCell>

        <CvCell className="cell-title">
          <p>Contact Details</p>
        </CvCell>

        <CvCell className="contact-info">
          <ul>
            <ContactItem icon={Icons.Location}>Austin, TX</ContactItem>
            <ContactItem icon={Icons.Phone}>(512) 555-7812</ContactItem>
            <ContactItem icon={Icons.Email}>hello@supersite.com</ContactItem>
          </ul>
        </CvCell>
        <CvCell className="contact-info r-edge">
          <ul>
            <ContactItem icon={Icons.LinkedIn} href="#">
              linkedin.com/in/francisthegreat
            </ContactItem>
            <ContactItem icon={Icons.Website} href="#">
              www.supersite.com
            </ContactItem>
          </ul>
        </CvCell>

        <CvCell className="summary">
          <p className="title">Professional summary</p>
          <p>
            Front-end engineer with a proven track record of delivering
            production-ready web applications. Specialized in building scalable
            UI systems, optimizing performance, and ensuring accessibility
            across modern browsers and devices. Effective collaborator with
            design and product teams.
          </p>
        </CvCell>
      </CvBlock>

      <CvBlock blockName={FORM_BLOCKS.WORK_EXPERIENCE}>
        <CvCell className="cell-title">
          <p>{FORM_BLOCKS.WORK_EXPERIENCE}</p>
        </CvCell>

        <CvCell className="work-block">
          <div className="general">
            <p className="role">Front-End Engineer</p>
            <p className="company">Supersite</p>
            <p className="dates">June 2021 – Present</p>
            <p className="location">Austin, TX</p>
          </div>
          <ul className="achievements">
            <li>
              Built and maintained responsive user interfaces for a
              customer-facing web platform
            </li>
            <li>
              Collaborated with designers and product managers to implement
              design systems and UI components
            </li>
            <li>
              Improved page performance and accessibility across modern browsers
              and devices
            </li>
          </ul>
        </CvCell>

        <CvCell className="work-block">
          <div className="general">
            <p className="role">UI / Front-End Developer</p>
            <p className="company">Digital Studio Co.</p>
            <p className="dates">Jan 2019 – Sept 2021</p>
            <p className="location">Remote</p>
          </div>
          <ul className="achievements">
            <li>
              Developed reusable UI components for marketing and product
              websites
            </li>
            <li>
              Translated design mockups into clean, maintainable front-end code
            </li>
            <li>
              Worked closely with cross-functional teams to ship features on
              tight deadlines
            </li>
          </ul>
        </CvCell>

        <CvCell className="work-block">
          <div className="general">
            <p className="role">Junior Front-End Developer</p>
            <p className="company">Creative Web Agency </p>
            <p className="dates">Feb 2017 – Oct 2019</p>
            <p className="location">Austin, TX</p>
          </div>
          <ul className="achievements">
            <li>
              Assisted in building and updating client websites using modern
              front-end technologies
            </li>
            <li>Implemented responsive layouts and basic animations</li>
            <li>
              Fixed UI bugs and improved overall usability under senior
              developer guidance
            </li>
          </ul>
        </CvCell>
      </CvBlock>

      <CvBlock blockName={FORM_BLOCKS.EDUCATION}>
        <CvCell className="cell-title">
          <p>{FORM_BLOCKS.EDUCATION}</p>
        </CvCell>

        <CvCell className="education-block">
          <p className="degree">Bachelor’s Degree in Information Technology</p>
          <p className="school">University of Texas at Austin</p>
          <p className="years">2013 – 2017</p>
        </CvCell>
      </CvBlock>

      <CvBlock blockName={FORM_BLOCKS.SKILLS}>
        <CvCell className="cell-title">
          <p>{FORM_BLOCKS.SKILLS}</p>
        </CvCell>

        <CvCell className="skills-block">
          <p>
            JavaScript (ES6+) · HTML5 · CSS3 · React · Next.js · Responsive UI ·
            Accessibility (WCAG) · Git · Figma · Node.js · Express
          </p>
        </CvCell>
      </CvBlock>
    </div>
  );
}

function GeneralInfoBlock({ data }) {
  return (
    <CvBlock blockName={FORM_BLOCKS.GENERAL}>
      <CvCell className="name-role">
        <h2>{data.name}</h2>
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
          <ContactItem icon={Icons.Location}>{data.location}</ContactItem>
          <ContactItem icon={Icons.Phone}>{data.phone}</ContactItem>
          <ContactItem icon={Icons.Email}>{data.email}</ContactItem>
        </ul>
      </CvCell>
      <CvCell className="contact-info r-edge">
        <ul>
          <ContactItem icon={Icons.LinkedIn} href={data.linkedInUrl}>
            {data.linkedInUrl}
          </ContactItem>
          <ContactItem icon={Icons.Website} href={data.websiteUrl}>
            {data.websiteUrl}
          </ContactItem>
        </ul>
      </CvCell>

      <CvCell className="summary">
        <p className="title">Professional summary</p>
        <p>
          {data.summary}
        </p>
      </CvCell>
    </CvBlock>
  );
}

function WorkExperienceBlock({ jobs }) {
  return (
    <CvBlock blockName={FORM_BLOCKS.WORK_EXPERIENCE}>
      <CvCell className="cell-title">
        <p>{FORM_BLOCKS.WORK_EXPERIENCE}</p>
      </CvCell>

      {jobs.map((job, index) => (
        <WorkItem key={index} {...job} />
      ))}
    </CvBlock>
  );
}

function WorkItem({ role, company, dates, location, achievements }) {
  return (
    <CvCell className="work-block">
      <div className="general">
        <p className="role">{role}</p>
        <p className="company">{company}</p>
        <p className="dates">{dates}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="achievements">
        {achievements.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </CvCell>
  );
}

function EducationBlock({ education }) {
  return (
    <CvBlock blockName={FORM_BLOCKS.EDUCATION}>
      <CvCell className="cell-title">
        <p>{FORM_BLOCKS.EDUCATION}</p>
      </CvCell>

      {education.map((item, index) => (
        <EducationItem key={index} {...item} />
      ))}
    </CvBlock>
  );
}

function EducationItem({ degree, school, years }) {
  return (
    <CvCell className="education-block">
      <p className="degree">{degree}</p>
      <p className="school">{school}</p>
      <p className="years">{years}</p>
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

function CvCell({ className, children }) {
  return <div className={`cv-cell ${className}`}>{children}</div>;
}

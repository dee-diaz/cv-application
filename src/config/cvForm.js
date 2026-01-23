import { createShortId } from '../utilities/utils';

export const FORM_BLOCKS = {
  GENERAL: 'General',
  WORK_EXPERIENCE: 'Work experience',
  EDUCATION: 'Education',
  SKILLS: 'Skills',
};

export const FIELDS_GENERAL = {
  FIRST_NAME: {
    as: 'input',
    label: 'First name',
    type: 'text',
    id: 'firstName',
    placeholder: 'Your first name',
  },
  LAST_NAME: {
    as: 'input',
    label: 'Last name',
    type: 'text',
    id: 'lastName',
    placeholder: 'Your last name',
  },
  ROLE: {
    as: 'input',
    label: 'Role',
    type: 'text',
    id: 'role',
    placeholder: 'Your current role',
  },
  CITY: {
    as: 'input',
    label: 'City',
    type: 'text',
    id: 'city',
    placeholder: 'Your city / state',
  },
  PHONE: {
    as: 'input',
    label: 'Phone',
    type: 'tel',
    id: 'phone',
    placeholder: 'Your number',
  },
  EMAIL: {
    as: 'input',
    label: 'Email',
    type: 'email',
    id: 'email',
    placeholder: 'Your email',
  },
  LINKEDIN: {
    as: 'input',
    label: 'LinkedIn',
    type: 'url',
    id: 'linkedIn',
    placeholder: 'Your LinkedIn URL',
  },
  WEBSITE: {
    as: 'input',
    label: 'Website',
    type: 'url',
    id: 'website',
    placeholder: 'Your website URL',
  },
  SUMMARY: {
    as: 'textarea',
    label: 'Professional summary',
    id: 'summary',
    placeholder:
      '2–3 sentences summarizing your role, experience, and what you do best',
  },
};

export const FIELDS_EXPERIENCE = {
  JOB_TITLE: {
    as: 'input',
    label: 'Job title',
    type: 'text',
    id: 'jobTitle',
    placeholder: 'Front-End Engineer',
  },
  COMPANY: {
    as: 'input',
    label: 'Company',
    type: 'text',
    id: 'company',
    placeholder: 'Company name',
  },
  LOCATION: {
    as: 'input',
    label: 'Location',
    type: 'text',
    id: 'companyLocation',
    placeholder: 'Austin, TX',
  },
  START_DATE: {
    as: 'input',
    label: 'Start date',
    type: 'text',
    id: 'jobStartDate',
    placeholder: 'Jan 2021',
  },
  END_DATE: {
    as: 'input',
    label: 'End date',
    type: 'text',
    id: 'jobEndDate',
    placeholder: 'Present',
  },
};

export const FIELDS_EDUCATION = {
  DEGREE: {
    as: 'input',
    label: 'Degree',
    type: 'text',
    id: 'degree',
    placeholder: 'Bachelor\’s Degree in Information Technology',
  },
  INSTITUTION: {
    as: 'input',
    label: 'Institution',
    type: 'text',
    id: 'institution',
    placeholder: 'University of Texas at Austin',
  },
  START_YEAR: {
    as: 'input',
    label: 'Start year',
    type: 'number',
    id: 'eduStartYear',
    placeholder: '2013',
  },
  END_YEAR: {
    as: 'input',
    label: 'End year',
    type: 'number',
    id: 'eduEndYear',
    placeholder: '2017',
  },
};

export const FIELDS_SKILLS = {
  SKILLS: {
    as: 'textarea',
    label: 'Skills',
    id: 'skills',
    placeholder: 'JavaScript, React, CSS, Git, Figma',
  },
};

export const BTN_TYPES = {
  SAVE: 'Save',
  CANCEL: 'Cancel',
  DELETE: 'Delete',
  ADD: 'Add experience',
  EDIT: 'Edit',
};

export const initialObj = {
  image: null,
  firstName: '',
  lastName: '',
  role: '',
  city: '',
  phone: '',
  email: '',
  linkedIn: '',
  website: '',
  summary: '',
  degree: '',
  institution: '',
  eduStartYear: '',
  eduEndYear: '',
  skills: '',
};

export const jobInitial = {
  jobTitle: '',
  company: '',
  companyLocation: '',
  jobStartDate: '',
  jobEndDate: '',
  a1: '',
  a2: '',
  a3: '',
};

export const DUMMY = {
  image: null,
  firstName: 'Francis',
  lastName: 'Donovan',
  role: 'Front-end engineer',
  city: 'Austin, TX',
  phone: '(512) 555-7812',
  email: 'hello@supersite.com',
  linkedIn: 'linkedin.com/in/francisthegreat',
  website: 'www.supersite.com',
  summary:
    'Front-end engineer with a proven track record of delivering production-ready web applications. Specialized in building scalable UI systems, optimizing performance, and ensuring accessibility across modern browsers and devices. Effective collaborator with design and product teams.',
  degree: 'Bachelor\’s Degree in Information Technology',
  institution: 'University of Texas at Austin',
  eduStartYear: '2013',
  eduEndYear: '2017',
  skills:
    'JavaScript (ES6+) · HTML5 · CSS3 · React · Next.js · Responsive UI · Accessibility (WCAG) · Git · Figma · Node.js ·  Express',
};

export const DUMMY_JOBS = [
  {
    id: createShortId(),
    jobTitle: 'Front-End Engineer',
    company: 'Supersite',
    companyLocation: 'Austin, TX',
    jobStartDate: 'June 2021',
    jobEndDate: 'Present',
    a1: 'Built and maintained responsive user interfaces for a customer-facing web platform',
    a2: 'Collaborated with designers and product managers to implement design systems and UI components',
    a3: 'Improved page performance and accessibility across modern browsers and devices',
  },
  // {
  //   id: createShortId(),
  //   jobTitle: 'Front-End Engineer',
  //   company: 'PeakLabs',
  //   companyLocation: 'Austin, TX',
  //   jobStartDate: 'June 2021',
  //   jobEndDate: 'Present',
  //   a1: 'Built and shipped a React component library used across 6 internal products',
  //   a2: 'Improved Core Web Vitals (LCP -35%, CLS -60%) by optimizing images and rendering',
  //   a3: 'Refactored legacy UI into reusable modules, cutting feature delivery time by ~30%',
  // },
];

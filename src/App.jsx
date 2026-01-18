import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Hint from './components/Hint/Hint.jsx';
import Layout from './components/Layout/Layout.jsx';
import FormBlock from './components/FormBlock/FormBlock.jsx';
import Accordion from './components/Accordion/Accordion.jsx';

const FORM_BLOCKS = {
  GENERAL: 'General',
  WORK_EXPERIENCE: 'Work experience',
  EDUCATION: 'Education',
  SKILLS: 'Skills',
};

const INPUTS_GENERAL = {
  FIRST_NAME: {
    as: 'input',
    label: 'First name',
    type: 'text',
    id: 'first-name',
    placeholder: 'Your first name',
  },
  LAST_NAME: {
    as: 'input',
    label: 'Last name',
    type: 'text',
    id: 'last-name',
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
    id: 'linked-in',
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
    id: 'professional-summary',
    placeholder:
      '2–3 sentences summarizing your role, experience, and what you do best',
  },
};

const INPUTS_EXPERIENCE = {
  JOB_TITLE: {
    as: 'input',
    label: 'Job title',
    type: 'text',
    id: 'job-title',
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
    id: 'location',
    placeholder: 'Austin, TX',
  },
  START_DATE: {
    as: 'input',
    label: 'Start date',
    type: 'text',
    id: 'start-date',
    placeholder: 'Jan 2021',
  },
  END_DATE: {
    as: 'input',
    label: 'End date',
    type: 'text',
    id: 'end-date',
    placeholder: 'Present',
  },
};

function App() {
  return (
    <div className="container">
      <Header />
      <Layout as="main" className="page">
        <Layout className="user-side">
          <Hint message="Edit this CV with your details" />
          <Layout className="forms-wrapper">
            <FormBlock title={FORM_BLOCKS.GENERAL} inputs={INPUTS_GENERAL} />
            <Accordion headerTitle={FORM_BLOCKS.WORK_EXPERIENCE}>
              <FormBlock title={FORM_BLOCKS.WORK_EXPERIENCE} inputs={INPUTS_EXPERIENCE} />
            </Accordion>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;

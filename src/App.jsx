import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Hint from './components/Hint/Hint.jsx';
import Layout from './components/Layout/Layout.jsx';
import SimpleFormBlock from './components/FormBlock/SimpleFormBlock.jsx';
import { WorkExperienceBlock } from './components/FormBlock/WorkExperienceBlock.jsx';
import Accordion from './components/Accordion/Accordion.jsx';
import Cv from './components/Cv/Cv.jsx';
import {
  FIELDS_GENERAL,
  FIELDS_EXPERIENCE,
  FIELDS_EDUCATION,
  FIELDS_SKILLS,
  FORM_BLOCKS,
  initialObj,
} from './config/cvForm.js';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const [formData, setFormData] = useState(initialObj);
  const [jobs, setJobs] = useState([]);
  const [currentJobDraft, setCurrentJobDraft] = useState({
    jobTitle: '',
    company: '',
    companyLocation: '',
    jobStartDate: '',
    jobEndDate: '',
    a1: '',
    a2: '',
    a3: '',
  });

  console.log(currentJobDraft);
  console.log(jobs);

  function handleChange(e) {
    const inputId = e.target.id;
    setFormData({ ...formData, [inputId]: e.target.value });
  }

  function handleJobSubmit(jobObj) {
    setJobs((prev) => [...prev, jobObj]);

    setCurrentJobDraft({
      jobTitle: '',
      company: '',
      companyLocation: '',
      jobStartDate: '',
      jobEndDate: '',
      a1: '',
      a2: '',
      a3: '',
    });
  }

  function handleJobChange(e) {
    const inputId = e.target.id;
    setCurrentJobDraft({ ...currentJobDraft, [inputId]: e.target.value });
  }

  return (
    <div className="container">
      <Header />
      <Layout as="main" className="page">
        <Layout className="user-side">
          <Hint />
          <Layout className="forms-wrapper">
            <SimpleFormBlock
              title={FORM_BLOCKS.GENERAL}
              inputs={FIELDS_GENERAL}
              onChange={handleChange}
            />
            <Accordion headerTitle={FORM_BLOCKS.WORK_EXPERIENCE}>
              <WorkExperienceBlock
                inputs={FIELDS_EXPERIENCE}
                savedJobs={jobs}
                currentJob={currentJobDraft}
                // onChange={handleChange}
                onChange={handleJobChange}
                onSubmit={handleJobSubmit}
              />
            </Accordion>
            <Accordion headerTitle={FORM_BLOCKS.EDUCATION}>
              <SimpleFormBlock
                title={FORM_BLOCKS.EDUCATION}
                inputs={FIELDS_EDUCATION}
                onChange={handleChange}
              />
            </Accordion>
            <Accordion headerTitle={FORM_BLOCKS.SKILLS}>
              <SimpleFormBlock
                title={FORM_BLOCKS.SKILLS}
                inputs={FIELDS_SKILLS}
                onChange={handleChange}
              />
            </Accordion>
          </Layout>
        </Layout>
        <Layout className="cv-side">
          <Cv data={formData} jobs={jobs} currentJob={currentJobDraft} />
        </Layout>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;

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

  function handleChange(e) {
    const inputId = e.target.id;
    const updatedObj = { ...formData, [inputId]: e.target.value };
    setFormData(updatedObj);
  }

  function handleJobSubmit(jobObj) {
    setJobs((prev) => [...prev, jobObj]);
  }

  return (
    <div className="container">
      <Header />
      <Layout as="main" className="page">
        <Layout className="user-side">
          <Hint message="Edit this CV with your details" />
          <Layout className="forms-wrapper">
            <SimpleFormBlock
              title={FORM_BLOCKS.GENERAL}
              inputs={FIELDS_GENERAL}
              showSaveButton={false}
              onChange={handleChange}
            />
            <Accordion headerTitle={FORM_BLOCKS.WORK_EXPERIENCE}>
              <WorkExperienceBlock
                inputs={FIELDS_EXPERIENCE}
                savedJobs={jobs}
                onChange={handleChange}
                onSubmit={handleJobSubmit}
              />
            </Accordion>
            <Accordion headerTitle={FORM_BLOCKS.EDUCATION}>
              <SimpleFormBlock
                title={FORM_BLOCKS.EDUCATION}
                inputs={FIELDS_EDUCATION}
                onChange={handleChange}
                // onSubmit={handleEducationSubmit}
              />
            </Accordion>
            <Accordion headerTitle={FORM_BLOCKS.SKILLS}>
              <SimpleFormBlock
                title={FORM_BLOCKS.SKILLS}
                inputs={FIELDS_SKILLS}
                onChange={handleChange}
                // onSubmit={handleSkillsSubmit}
              />
            </Accordion>
          </Layout>
        </Layout>
        <Layout className="cv-side">
          <Cv data={formData} />
        </Layout>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;

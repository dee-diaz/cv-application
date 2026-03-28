import { useState } from 'react';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './App.css';
import Header from './components/Header/Header';
import Hint from './components/Hint/Hint';
import Layout from './components/Layout/Layout';
import SimpleFormBlock from './components/FormBlock/SimpleFormBlock';
import { WorkExperienceBlock } from './components/FormBlock/WorkExperienceBlock';
import Accordion from './components/Accordion/Accordion';
import Cv from './components/Cv/Cv';
import {
  FIELDS_GENERAL,
  FIELDS_EXPERIENCE,
  FIELDS_EDUCATION,
  FIELDS_SKILLS,
  FORM_BLOCKS,
  initialObj,
  jobInitial,
} from './config/cvForm';
import Footer from './components/Footer/Footer.js';
import { createShortId } from './utilities/utils.js';

function App() {
  const [formData, setFormData] = useState(initialObj);
  const [jobs, setJobs] = useState([]);
  const [currentJobDraft, setCurrentJobDraft] = useState(jobInitial);
  const [touchedFields, setTouchedFields] = useState({});

  const cvRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: 'cv',
  });

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setFormData((prev) => ({ ...prev, photoUrl: url }));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const inputId = e.target.id;
    setFormData((prev) => ({ ...prev, [inputId]: e.target.value }));
    setTouchedFields((prev) => ({ ...prev, [inputId]: true }));
  }

  function handleJobSubmit(jobObj: { id: string }): void {
    if (!jobObj.id) {
      const newJob = { ...jobObj, id: createShortId() };
      setJobs((prev) => [...prev, newJob]);
    } else {
      setJobs((prev) => {
        const index = prev.findIndex((job) => job.id === jobObj.id);
        if (index === -1) return prev;

        const updated = [...prev];
        updated[index] = { ...jobObj };
        return updated;
      });
    }

    setCurrentJobDraft(jobInitial);
  }

  function handleJobChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const inputId = e.target.id;
    setCurrentJobDraft((prev) => ({ ...prev, [inputId]: e.target.value }));
    setTouchedFields((prev) => ({ ...prev, [inputId]: true }));
  }

  function handleEditJob(jobId: string): void {
    const job = jobs.find((j: { id: string }) => j.id === jobId);
    if (!job) return;
    setCurrentJobDraft({ ...job });
  }

  function handleDeleteJob(jobId: string): void {
    setJobs((prev) => prev.filter((job: { id: string }) => job.id !== jobId));
    setCurrentJobDraft(jobInitial);
  }

  return (
    <div className="container">
      <Header onDownload={handlePrint} />
      <Layout as="main" className="page">
        <Layout className="user-side">
          <Hint />
          <Layout className="forms-wrapper">
            <SimpleFormBlock
              title={FORM_BLOCKS.GENERAL}
              inputs={FIELDS_GENERAL}
              onChange={handleChange}
              onPhotoChange={handlePhotoChange}
            />
            <Accordion headerTitle={FORM_BLOCKS.WORK_EXPERIENCE}>
              <WorkExperienceBlock
                inputs={FIELDS_EXPERIENCE}
                savedJobs={jobs}
                currentJob={currentJobDraft}
                onChange={handleJobChange}
                onSubmit={handleJobSubmit}
                onEditJob={handleEditJob}
                onDeleteJob={handleDeleteJob}
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
          <Cv
            ref={cvRef}
            data={formData}
            jobs={jobs}
            currentJob={currentJobDraft}
            touchedFields={touchedFields}
          />
        </Layout>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;

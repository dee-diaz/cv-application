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
import Footer from './components/Footer/Footer';
import { createShortId } from './utilities/utils';
import { Job } from './types/job';

function App() {
  const [formData, setFormData] = useState(initialObj);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentJobDraft, setCurrentJobDraft] = useState<Job>(jobInitial);
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});

  const cvRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: 'cv',
  });

  function handlePhotoChange(file: File | null): void {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setFormData((prev) => ({ ...prev, photoUrl: url }));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const inputId = e.target.id;
    setFormData((prev) => ({ ...prev, [inputId]: e.target.value }));
    setTouchedFields((prev) => ({ ...prev, [inputId]: true }));
  }

  function handleJobSubmit(jobObj: Job): void {
    if (!jobObj.id) {
      const newJob: Job = { ...jobObj, id: createShortId() };
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

  function handleJobChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const inputId = e.target.id;
    setCurrentJobDraft((prev) => ({ ...prev, [inputId]: e.target.value }));
    setTouchedFields((prev) => ({ ...prev, [inputId]: true }));
  }

  function handleEditJob(jobId: string | number): void {
    const job = jobs.find((j) => j.id === String(jobId));
    if (!job) return;
    setCurrentJobDraft({ ...job });
  }

  function handleDeleteJob(jobId: string | number | undefined): void {
    if (jobId === undefined) return;
    setJobs((prev) => prev.filter((job) => job.id !== String(jobId)));
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

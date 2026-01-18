import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Hint from './components/Hint/Hint.jsx';
import Layout from './components/Layout/Layout.jsx';
import FormBlock from './components/FormBlock/FormBlock.jsx';
import Accordion from './components/Accordion/Accordion.jsx';
import Cv from './components/Cv/Cv.jsx';
import {
  FIELDS_GENERAL,
  FIELDS_EXPERIENCE,
  FIELDS_EDUCATION,
  FIELDS_SKILLS,
  FORM_BLOCKS,
} from './config/cvForm.js';

function App() {
  return (
    <div className="container">
      <Header />
      <Layout as="main" className="page">
        <Layout className="user-side">
          <Hint message="Edit this CV with your details" />
          <Layout className="forms-wrapper">
            <FormBlock title={FORM_BLOCKS.GENERAL} inputs={FIELDS_GENERAL} />
            <Accordion headerTitle={FORM_BLOCKS.WORK_EXPERIENCE}>
              <FormBlock
                title={FORM_BLOCKS.WORK_EXPERIENCE}
                inputs={FIELDS_EXPERIENCE}
              />
            </Accordion>
            <Accordion headerTitle={FORM_BLOCKS.EDUCATION}>
              <FormBlock
                title={FORM_BLOCKS.EDUCATION}
                inputs={FIELDS_EDUCATION}
              />
            </Accordion>
            <Accordion headerTitle={FORM_BLOCKS.SKILLS}>
              <FormBlock
                title={FORM_BLOCKS.SKILLS}
                inputs={FIELDS_SKILLS}
              />
            </Accordion>
          </Layout>
        </Layout>
        <Layout className="cv-side">
          <Cv />
        </Layout>
      </Layout>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Hint from './components/Hint/Hint.jsx';
import Layout from './components/Layout/Layout.jsx';
import FormBlock from './components/FormBlock/FormBlock.jsx';
import Accordion from './components/Accordion/Accordion.jsx';
import { INPUTS_GENERAL, INPUTS_EXPERIENCE, FORM_BLOCKS } from './config/cvForm.js';

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

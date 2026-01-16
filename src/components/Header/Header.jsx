// import { useState } from 'react';
import './Header.css';
import DownloadButton from '../Button/DownloadButton.jsx';

export default function Header() {
  const titleText = window.innerWidth < 992 ? 'CV' : 'Turn your CV into a yes';
  return (
    <header className="header">
      <h1>{titleText}</h1>
      <DownloadButton />
    </header>
  );
}

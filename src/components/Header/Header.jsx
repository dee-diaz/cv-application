// import { useState } from 'react';
import './Header.css';
import { DownloadButton } from '../Button/Button.jsx';

export default function Header({ onDownload }) {
  const titleText = window.innerWidth < 992 ? 'CV' : 'Turn your CV into a yes';
  return (
    <header className="header">
      <h1>{titleText}</h1>
      <DownloadButton onClick={onDownload} />
    </header>
  );
}

// import { useState } from 'react';
import './Header.css';
import { DownloadButton } from '../Button/Button';

interface HeaderProps {
  onDownload: () => void;
}

export default function Header({ onDownload }: HeaderProps) {
  const titleText = window.innerWidth < 992 ? 'CV' : 'Turn your CV into a yes';
  return (
    <header className="header">
      <h1>{titleText}</h1>
      <DownloadButton onClick={onDownload} />
    </header>
  );
}

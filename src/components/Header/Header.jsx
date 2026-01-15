import { useState } from 'react';
import './Header.css';
import DownloadButton from '../Button/DownloadButton.jsx';

export default function Header() {
  return (
    <header>
      <h1>Turn your CV into a yes</h1>
      <DownloadButton />
    </header>
  )
}
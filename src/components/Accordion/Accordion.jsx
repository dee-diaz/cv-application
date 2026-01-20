import { useState } from 'react';
import './Accordion.css';

export default function Accordion({ headerTitle, children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function handleClick() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <details className="accordion">
      <summary onClick={handleClick}>{headerTitle}</summary>
      <div className="content">
        <div className="inner">{children}</div>
      </div>
    </details>
  );
}

import { useState } from 'react';
import './Accordion.css';

interface AccordionProps {
  headerTitle: string;
  children: React.ReactNode;
}

export default function Accordion({ headerTitle, children }: AccordionProps) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function handleClick(): void {
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

import './Accordion.css';

export default function Accordion({ headerTitle, children }) {
  return (
    <details className="accordion">
      <summary>{headerTitle}</summary>
      <div className="content">
        <div className="inner">{children}</div>
      </div>
    </details>
  );
}

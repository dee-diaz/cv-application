import './DownloadButton.css';

export default function DownloadButton() {
  function previewPdf() {
    console.log('PDF preview mode');
  }

  return (
    <button className="btn-download" onClick={previewPdf}>
      <span>Download CV</span>
      <div></div>
    </button>
  );
}

import React from "react";
import pdf from '../images/AlexandraOlsavskyResume.pdf';

const ResumeDownload = () => {
  return (
    <div>
      <a
        href={pdf}
        download
      >
        Click to download
      </a>
    </div>
  );
}

export default ResumeDownload;
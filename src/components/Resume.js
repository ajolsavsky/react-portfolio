import React from "react";

const ResumeDownload = () => {
  return (
    <div>
      <a
        href='../images/AlexandraOlsavskyResume2022.pdf'
        download
      >
        Click to download
      </a>
      <img src='./AOResume.pdf' alt="pdf"></img>
    </div>
  );
}

export default ResumeDownload;
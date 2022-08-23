import React from "react";
import pdf from '../images/AlexandraOlsavskyResume.pdf';

const ResumeView = () => {
  return (
    <div>
      <iframe 
        src={pdf}
        width='100%'
        height='700px'
        title="Alex Olsavsky's Resume"
        allow="autoplay"
      >
      </iframe>
    </div>
  );
}

export default ResumeView;
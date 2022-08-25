import React from "react";
import pdf from '../images/AlexandraOlsavskyResume.pdf';
import Container from '@mui/material/Container';

const ResumeView = () => {
  return (
    <Container maxWidth="md">
      <iframe 
        src={pdf}
        width='100%'
        height='700px'
        title="Alex Olsavsky's Resume"
        allow="autoplay"
      >
      </iframe>
    </Container>
  );
}

export default ResumeView;
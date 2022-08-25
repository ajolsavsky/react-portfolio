import React from "react";
import pdf from '../images/AlexandraOlsavskyResume.pdf';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

const ResumeDownload = () => {
  return (
      <Button variant="contained"
        href={pdf}
        endIcon={<DownloadIcon />} sx={{backgroundColor: 'primary.light',
                '&:hover': {
                    backgroundColor: '#fff',
                    opacity: [0.9, 0.8, 0.7]} }}
        download
      >
        Click to download
    </Button>
  );
}

export default ResumeDownload;
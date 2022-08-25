import React from "react";
import ResumeDownload from "../components/ResumeDownload";
import ResumeView from "../components/ResumeView";
import {
    Grid,
    Typography
} from '@mui/material';

function resumePage() {
    return (
        <>
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '75vh' }}
        >
        <Typography variant="h2" sx={{color: 'primary.dark', mt: 5 }}>Resume</Typography>
        <ResumeView />
        <ResumeDownload />
        </Grid>
        </>
    )
}

export default resumePage;
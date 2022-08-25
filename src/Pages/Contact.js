import React from "react";
import ContactForm from "../components/ContactForm";
import NewContactForm from "../components/NewContactForm";
import {
    Grid,
    Typography
} from '@mui/material';


function contactPage() {
    return (
        <>
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            // style={{ minHeight: '75vh' }}
        >
            <Typography variant="h2" sx={{color: 'primary.dark', mt: 5 }}>Get in Touch</Typography>
            <Typography variant="subtitle1">(Don't worry, I don't bite!)</Typography>
        <ContactForm />
        </Grid>
        </>
    )
}

export default contactPage;
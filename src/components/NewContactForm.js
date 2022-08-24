import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';


const NewContactForm = () => {
    return (
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <form method="POST" action="https://formsubmit.co/209cf4e6090855499d2b5b578c75f7e7">
            <input type="email" name="email" placeholder="Your email" />
            <textarea name="message" placeholder="Details of your problem"></textarea>
            <button type="submit">Send Test</button>      
        </form>


        </Box>

    );
}

export default NewContactForm;
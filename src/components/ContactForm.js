import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Container from '@mui/material/Container';


const ContactForm = () => {
  const form = useRef();

  const initialValues = { user_name: "", user_email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const handleChange = (e) => {
      const {name, value} = e.target;
      setFormValues({ ...formValues, [name]: value });
  }
  
  
  //Email submit handler
    const sendEmail = (e) => {
    const UseEmailJs = () => {
        emailjs.sendForm('service_hpg0czm', 'contact_form', form.current, '6gnYWh9TuBhzTn5Vs')
        .then((result) => {
            console.log(result.text, form.current);
        }, (error) => {
            console.log(error.text);
        });
    }
      
      e.preventDefault();
      setFormErrors(validate(formValues));
      UseEmailJs();
      setIsSubmit(true);
      
    };
    
    useEffect(() => {
      console.log(formErrors);
      if(Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
      }
    }, [formErrors])

  const validate = (values) => {
    const errors = {};
    const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (!values.user_name) {
        errors.user_name = "Name is required!"
    }
    if (!values.user_email) {
        errors.user_email = "Email is required!"
    } else if(!regex.test(values.user_email)) {
        errors.user_email = "This is not a valid email format!";
    }
    if (!values.message) {
        errors.message = "Message is required!"
    }
    return errors;
  }

  return (
        <Container maxWidth="md" sx={{ p: 5, mt: 10, borderColor: 'primary.light', border: '1px solid'}}>
            <Box component="form" ref={form} onSubmit={sendEmail} 
             sx={{ m: 5 }}noValidate autoComplete="off">

        {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui message success">Message sent!</div>
            ) : (
                <div></div>
            )}
            <Box sx={{ m: 2}}>
            <TextField fullWidth
                required
                id="filled-required"
                variant="filled"
                label="NAME"
                type="text" 
                name="user_name" 
                value={formValues.user_name}
                onChange={handleChange}
                helperText={ formErrors.user_name }
                sx={{ backgroundColor: ''}}
            />

            </Box>
            <Box sx={{ m: 2}}>
            <TextField fullWidth
                required
                id="filled-required"
                variant="filled"
                label="EMAIL"
                type="text" 
                name="user_email" 
                value={ formValues.user_email }
                onChange={handleChange}
                helperText={ formErrors.user_email }
                sx={{width: 'sm' }}
            />
            </Box>
            <Box sx={{ m: 2 }}>
            <TextField fullWidth
                id="outlined-multiline-static-required fullWidth"
                label="MESSAGE *"
                multiline
                rows={6}
                value={ formValues.message }
                name="message"
                onChange={handleChange}
                helperText={ formErrors.message }
            />
            </Box>
            <Box>
            <Button variant="contained" type="submit" value="Send" endIcon={<SendIcon />} sx={{backgroundColor: 'secondary.light',
                '&:hover': {
                  backgroundColor: '#fff',
                  opacity: [0.9, 0.8, 0.7]} }}>Send</Button>
            </Box>
        </Box>
        </Container>
        
  );
};

export default ContactForm;
import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


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
  
  
  const sendEmail = (e) => {
      
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
      
      emailjs.sendForm('service_hpg0czm', 'contact_form', form.current, '6gnYWh9TuBhzTn5Vs')
      .then((result) => {
          console.log(result.text, form.current);
        }, (error) => {
            console.log(error.text);
        });
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
        <div className="container">
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui message success">Message sent!</div>
            ) : (
                <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            )}
        <form ref={form} onSubmit={sendEmail}>
            <Box>
        <label>Name</label>
        <input 
            type="text" 
            name="user_name" 
            value={formValues.user_name}
            onChange={handleChange}/>
        <p>{ formErrors.user_name }</p>
        <label>Email</label>
        <input 
            type="email" 
            name="user_email" 
            value={ formValues.user_email }
            onChange={handleChange} />
        <p>{ formErrors.user_email }</p>
        <label>Message</label>
        <textarea 
            name="message" 
            value={ formValues.message }
            onChange={handleChange} />
        <p>{ formErrors.message }</p>
        <input type="submit" value="Send" />
            </Box>
        </form>
        </div>
  );
};

export default ContactForm;
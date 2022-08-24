import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


const ContactForm = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    await emailjs.sendForm('service_hpg0czm', 'contact_form', form.current, '6gnYWh9TuBhzTn5Vs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name"/>
        <label>Email</label>
        <input type="email" name="user_email"/>
        <label>Message</label>
        <textarea name="message"/>
        <input type="submit" value="Send" />
        </form>
  );
};

export default ContactForm;
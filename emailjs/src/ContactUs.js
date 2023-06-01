import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t47kvuj', 'template_oj3shsa', form.current, '9Tp6eeDNHP130XXdD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <a href='mailto:njiddasalifu@gmail.com' target='_blank'>send a message</a>
      {/* <input type="submit" value="Send" /> */}
    </form>
  );
};

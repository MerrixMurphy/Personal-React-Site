import React, {useRef, useState} from "react";
import badVariables from '../layout/badVariables';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const [formSub, setFormSub] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const badVar = badVariables();
console.log(badVariables)
    emailjs.sendForm(badVar.SERVICE_ID, badVar.TEMPLATE_ID, form.current, badVar.PUBLIC_KEY)
      .then((res) => {
        setFormSub(true);
          console.log(res.text);
      }, (err) => {
          console.log(err.text);
      });
  };
  return (
    <>
    {!formSub ? (
    <form ref={form} className="mainContent" onSubmit={sendEmail}>
      <formTitle>Wanna get in touch? Send me an email here!</formTitle>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name"/>
      <br/>
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email"/>
      <br/>
      <label htmlFor="subject">Subject:</label>
      <input type="text" id="subject" name="subject"/>
      <br/>
      <label htmlFor="message">Message:</label>
      <input type="text" id="message" name="message"/>
      <br/>
      <button type="submit">Send</button>
    </form> 
  ): <h1 className="mainContent">Thank you for your interest in my portfolio!</h1>}
  </>
  );
}

export default Contact;


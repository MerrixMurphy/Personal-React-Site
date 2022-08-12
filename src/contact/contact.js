import React, { useRef, useState } from "react";
import badVariables from "../layout/badVariables";
import emailjs from "emailjs-com";

function Contact({ contactData, setContactData, defaultContactData }) {
  const form = useRef();
  const [formSub, setFormSub] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const badVar = badVariables();
    console.log(badVariables);
    emailjs
      .sendForm(
        badVar.SERVICE_ID,
        badVar.TEMPLATE_ID,
        form.current,
        badVar.PUBLIC_KEY
      )
      .then(
        (res) => {
          setFormSub(true);
          setContactData(defaultContactData);
          console.log(res.text);
        },
        (err) => {
          console.log(err.text);
        }
      );
  };

  const changeHandler = ({ target }) => {
    setContactData({
      ...contactData,
      [target.name]: target.value,
    });
  };

  return (
    <main className="normContentFormat">
      {!formSub ? (
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <h2>Want to get in touch?</h2>
            <h3>Send me an email here!</h3>
          </div>
          <div>
            <p>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Smith"
                value={contactData.name}
                onChange={changeHandler}
                required
              />
            </p>
            <br />
            <p>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="somemail@nomail.com"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                value={contactData.email}
                onChange={changeHandler}
                required
              />
            </p>
            <br />
            <p>
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Need Developer for.."
                value={contactData.subject}
                onChange={changeHandler}
                required
              />
            </p>
            <br />
            <p>
              <label style={{ alignSelf: "flex-start" }} htmlFor="message">
                Message:
              </label>
              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="Dear Mr. Murphy..."
                value={contactData.message}
                onChange={changeHandler}
                required
              />
            </p>
            <br />
            <button type="submit">Send</button>
          </div>
        </form>
      ) : (
        <h3>
          Thank you for sending your inquiry! You should get a confirmation
          email shortly, and a response within 72 hours.
        </h3>
      )}
    </main>
  );
}

export default Contact;

import "./Contact.css";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [sender, setSender] = useState({
    name: "",
    email: "",
    question: "",
  });

  const handleNameInput = (e) => {
    setSender({ ...sender, name: e.target.value });
  };

  const handleEmailInput = (e) => {
    setSender({ ...sender, email: e.target.value });
  };

  const handleQuestionInput = (e) => {
    setSender({ ...sender, question: e.target.value });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rcogfl9",
        "template_0tpl2y2",
        form.current,
        "gbgFkFWmCf9qnYDRo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="form-container">
        <div>
          <h2>Contact Us</h2>
        </div>
        <div className="display-form">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              onChange={handleNameInput}
              placeholder="Your name ..."
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              onChange={handleEmailInput}
              placeholder="Your email adress ..."
            />
            <label>Message</label>
            <textarea />
            <input
              type="submit"
              value="Send"
              name="message"
              onChange={handleQuestionInput}
              placeholder="Your message ..."
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

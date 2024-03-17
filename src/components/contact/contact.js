import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import contactImage from '../../assests/contact.png'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
    const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
    const publicKeyId = process.env.REACT_APP_YOUR_PUBLIC_KEY;
    console.log(process.env.REACT_APP_YOUR_SERVICE_ID);
    console.log(process.env.REACT_APP_YOUR_TEMPLATE_ID);
    console.log(process.env.REACT_APP_YOUR_PUBLIC_KEY);
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKeyId,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">Please fill out the from to contact</span>
      <div className="contact-container">
      <div className="img">
            <img src={contactImage} alt="contactImage" />
      </div>
      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="from_name"
          id="from_name"
          required
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email Address"
          name="from_email"
          id="from_email"
          required
        />
        <input
          type="number"
          className="number"
          placeholder="Your Contact number"
          name="from_number"
          id="from_number"
          required
        />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="send" className="submitbtn">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contact;

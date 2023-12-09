"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Thanks from "./Thanks";
import contactFormStyle from "../styles/contactForm.module.css";

export default function ContactMe() {
  const [state, handleSubmit] = useForm("mvojebkb");
  if (state.succeeded) {
    return <Thanks />;
  }
  return (
    <div className={contactFormStyle.formContainer}>
      <h1 className={contactFormStyle.formHead}>Contact Me</h1>
      <div className={contactFormStyle.form}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            className={contactFormStyle.input}
          ></input>
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
            className={contactFormStyle.input}
          ></input>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <br />
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
            rows={12}
            className={contactFormStyle.textarea}
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <br />
          <button
            type="submit"
            disabled={state.submitting}
            className={contactFormStyle.button}
          >
            Let's Connect
          </button>
        </form>
      </div>
    </div>
  );
}

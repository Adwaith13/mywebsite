"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Thanks from "./Thanks";
import Image from "next/image";

export default function ContactMe() {
  const [state, handleSubmit] = useForm("mvojebkb");
  if (state.succeeded) {
    return <Thanks />;
}
  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
        ></input>
         <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
      />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        ></input>
         <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
        <textarea
          id="message"
          name="message"
          placeholder="Enter your Message"
          required
        ></textarea>
         <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
        <button type="submit" disabled={state.submitting}>Send</button>
      </form>
    </div>
  );
}

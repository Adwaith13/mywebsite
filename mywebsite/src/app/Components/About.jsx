import React from "react";
import aboutstyles from "../styles/about.module.css";

export default function About() {
  return (
    <div className={aboutstyles.aboutcontainer}>
      <h1 className={aboutstyles.abouthead}>About Me</h1>
      <div className={aboutstyles.detailscontainer}>
        <p className={aboutstyles.details}>
          I'm a recent graduate in Computer Engineering and I love to build
          websites. I have always been interested in how complex websites worked
          and this interest began to take shape in the form of me building some
          projects.
        </p>
        <p className={aboutstyles.details}>
          I have built projects using latest frameworks and libraries like
          Next.js and React.js to power the frontend and used modern backend
          technologies like Node.js,Express.js for client-server communication
          and MongoDB for storing data.
        </p>
        <p className={aboutstyles.details}>
          I'm also skilled in programming languages like C,C++, and I have the
          knowledge of Data Structures and Algorithms and currently I am working
          on improving my problem solving skills.
        </p>
        <p className={aboutstyles.details}>
          I'm proactive and a quick learner, I'd like to collaborate with like
          minded people and build modern,efficient,scalable and user-friendly
          projects which solves complex real world problems and has an impact on
          the society.
        </p>
      </div>
    </div>
  );
}

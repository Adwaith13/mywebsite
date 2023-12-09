import React from "react";
import aboutstyles from "../styles/about.module.css";

export default function About() {
  return (
    <div className={aboutstyles.aboutcontainer}>
      <h1 className={aboutstyles.abouthead}>About Me</h1>
      <div className={aboutstyles.detailscontainer}>
        <p className={aboutstyles.details}>
          I'm a recent graduate in Computer Engineering and I love to build
          websites. I have always been interested in how complex websites
          worked and this interest began to take shape in the form of
          me building some projects.
        </p>
      </div>
    </div>
  );
}

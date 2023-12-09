import React, { Fragment } from "react";
import headerstyle from "../styles/header.module.css";

export default function Header() {
  return (
    <div className={headerstyle.head}>
      <p className={headerstyle.intro}>👋 Hey, My Name is</p>
      <h1 className={headerstyle.name}>Adwaith Nair,</h1>
      <h2 className={headerstyle.do}>and I'm a Full-Stack Developer. 🚀</h2>
    </div>
  );
}

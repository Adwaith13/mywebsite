import React from "react";
import navbarstyle from "../styles/navbar.module.css"

export default function Navbar() {
  return (
    <div className={navbarstyle.navbarcontainer}>
      <ol className={navbarstyle.orderedlist}>
        <li className={navbarstyle.list}>About Me</li>
        <li className={navbarstyle.list}>Projects</li>
        <li className={navbarstyle.list}>Contact Me</li>
      </ol>
    </div>
  );
}

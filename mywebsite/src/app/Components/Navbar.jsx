"use client";
import React, { useState } from "react";
import Image from "next/image";
import navbarstyle from "../styles/navbar.module.css";
import hamburgermenu from "../assests/hamburgermenu.svg";
import cancel from "../assests/cancel.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseClick = () => {
    setMenuOpen(false);
  };

  const handleResumeClick = () => {
    const resumeURL =
      "https://drive.google.com/file/d/1hyD_3crEjPchBdK1VkeimoYfY9X0zRps/view";
    window.open(resumeURL, "_blank");
  };

  return (
    <div className={navbarstyle.navbarcontainer}>
      {!menuOpen && (
        <Image
          alt="hamburger-icon"
          width={25}
          height={25}
          src={hamburgermenu}
          onClick={handleMenuClick}
          className={navbarstyle.hamburger}
        />
      )}
      {menuOpen && (
        <div className={navbarstyle.popup}>
          <Image
            alt="cancel-icon"
            width={25}
            height={25}
            src={cancel}
            onClick={handleCloseClick}
            className={navbarstyle.cancel}
          />

          <ol className={navbarstyle.orderedlist}>
            <li className={navbarstyle.list} onClick={handleResumeClick}>
              Resume
            </li>
          </ol>
        </div>
      )}
    </div>
  );
}

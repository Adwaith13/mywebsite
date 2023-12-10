import React from "react";
import thanksStyle from "../styles/thanks.module.css" 

export default function Thanks() {
  return (
    <div className={thanksStyle.container}>
      <h1 className={thanksStyle.heading}>
        Thank you for showing interest in my profile. I will connect with you
        ASAP. Have a good day!
      </h1>
    </div>
  );
}

import React from "react";
import "../defaultStyles.css";
import Link from "next/link";

function Contact() {
  return (
    <Link href="#contact-container" scroll={true}>
      <button className="cta">
        <span className="hover-underline-animation tracking-wide">
          Contact
        </span>
      </button>
    </Link>
  );
}

export default Contact;

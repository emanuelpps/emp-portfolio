import React from "react";
import Link from "next/link";
import "../defaultStyles.css";

function MyWork() {
  return (
    <Link href="/#id-1" scroll={true}>
      <button className="cta">
        <span className="hover-underline-animation tracking-wide"> My Work</span>
      </button>
    </Link>
  );
}

export default MyWork;

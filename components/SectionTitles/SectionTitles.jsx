'use client';
import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

function SectionTitle({ text, title }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} id="section-title" className="w-[100%]">
      <div
        className="flex flex-col items-start border-b-[1px] border-white"
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <span className="text-2xl font-thin opacity-50 md:text-3xl lg:text-4xl">
          {text}
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-[800]">{title}</h2>
      </div>
    </div>
  );
}

export default SectionTitle;

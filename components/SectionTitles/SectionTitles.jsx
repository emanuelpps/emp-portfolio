import React from "react";

function SectionTitle({ text, title }) {
  return (
    <div id="section-title" className="w-[100%]">
      <div className="flex flex-col items-start border-b-[1px] border-white">
        <span className="text-2xl md:text-4xl font-thin opacity-50">
          {text}
        </span>
        <h2 className="text-4xl md:text-8xl font-[800]">{title}</h2>
      </div>
    </div>
  );
}

export default SectionTitle;

import Link from "next/link";
import React from "react";

function WidgetContentTitle() {
  return (
    <div id="widget-content-title">
      <div
        id="widget-content-title-container"
        className="flex items-center justify-between h-full"
      >
        <h3 className="pt-5 pl-5 text-black">My Soft Skills</h3>
        <Link
          href={
            "https://res.cloudinary.com/dkgoszhfr/image/upload/v1724283164/p5j5htc2f32het7frtrt.pdf"
          }
          target="_blank"
        >
          <button className="text-[0.8rem] bg-black ml-5 mt-5 mr-5 p-2 rounded-lg">
            Certificate
          </button>
        </Link>
      </div>
    </div>
  );
}

export default WidgetContentTitle;

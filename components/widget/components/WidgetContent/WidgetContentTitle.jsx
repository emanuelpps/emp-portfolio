import Link from "next/link";
import React from "react";

function WidgetContentTitle() {
  return (
    <div id="widget-content-title">
      <div
        id="widget-content-title-container"
        className="flex items-center h-full justify-between"
      >
        <h3 className="text-black pl-5 pt-5">My Soft Skills</h3>
        <Link
          href={
            "https://res.cloudinary.com/dkgoszhfr/image/upload/v1722527308/m4h14teakal41xhxskze.pdf"
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

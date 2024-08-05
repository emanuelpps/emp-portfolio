import Link from "next/link";
import React from "react";

function WidgetFooter() {
  return (
    <div id="widget-footer" className="text-black  text-[0.8rem]">
      <div id="widget-footer-container" className="p-5 flex gap-2 justify-center items-center">
        <span>For more information, contact:  </span>
        <Link href="mailto:contacto@nocountry.io" className="text-blue-800 font-semibold"> contacto@nocountry.io</Link>
      </div>
    </div>
  );
}

export default WidgetFooter;

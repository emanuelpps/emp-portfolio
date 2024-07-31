"use client";
import React, { useState } from "react";
import { TfiMoreAlt } from "react-icons/tfi";
import WidgetContent from "./WidgetContent/WidgetContent";

function Widget() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="widget" className="fixed bottom-1 right-1 md:bottom-0 md:right-0 md:p-10 ">
      {isOpen && <WidgetContent />}
      <div id="widget-container" className="cursor-pointer z-50">
        <TfiMoreAlt
          className="text-4xl text-black bg-white rounded-full p-2"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  );
}

export default Widget;

"use client";
import React, { useState } from "react";
import { TfiMoreAlt } from "react-icons/tfi";
import WidgetContent from "./WidgetContent/WidgetContent";

function Widget() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="widget" className="fixed bottom-0 right-0 p-10">
      {isOpen && <WidgetContent />}
      <div id="widget-container" className="cursor-pointer">
        <TfiMoreAlt
          className="text-4xl text-black bg-white rounded-full p-2"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  );
}

export default Widget;

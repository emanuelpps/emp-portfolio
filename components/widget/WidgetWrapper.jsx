import React from "react";
import Widget from "./components/Widget";

function WidgetWrapper() {
  return (
    <div id="widget-wrapper" className="relative z-40">
      <Widget />
    </div>
  );
}

export default WidgetWrapper;

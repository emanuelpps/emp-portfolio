import React from "react";
import WidgetContentTitle from "./WidgetContentTitle";
import WidgetContentText from "./WidgetContentText";
import WidgetContentCalifications from "./WidgetContentCalifications";
import WidgetFooter from "./WidgetFooter";

function WidgetContent() {
  return (
    <div id="widget-content" className="relative z-50">
      <div
        id="widget-content-container"
        className="absolute bottom-2 bg-white color-black right-1 w-[400px] h-[600px] max-h-[screen] overflow-y-scroll rounded-lg widget-content"
      >
        <WidgetContentTitle />
        <WidgetContentText />
        <WidgetContentCalifications />
        <WidgetFooter />
      </div>
    </div>
  );
}

export default WidgetContent;

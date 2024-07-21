import React from "react";

function GenericButton({ label, onClick, style }) {
  return (
    <button
      className="py-3 px-10 inline-flex items-center gap-x-2 text-md font-normal rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black"
      onClick={onClick}
      style={style}
    >
      {label}
    </button>
  );
}

export default GenericButton;

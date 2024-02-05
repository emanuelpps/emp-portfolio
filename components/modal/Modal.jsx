import React from "react";

function Modal({ params }) {
  console.log(params.error);
  return (
    <>
      <div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex justify-center items-center bg-blur">
        <div className="flex fixed inset-0 pr-10 pl-10 w-full h-full bg-black/80 justify-center items-center">
          <div className="p-10 items-center gap-x-2 text-sm rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
            <h1 className="text-center">{params}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;

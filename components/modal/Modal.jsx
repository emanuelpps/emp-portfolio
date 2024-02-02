import React from "react";

function Modal({ params }) {
  console.log(params.error);
  return (
    <>
      <div className="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex justify-center items-center bg-blur">
        <div className="flex fixed inset-0 w-full h-full bg-black/80 cursor-pointer justify-center items-center">
          <div className="p-10 items-center gap-x-2 text-sm rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
            <h1>{params}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;

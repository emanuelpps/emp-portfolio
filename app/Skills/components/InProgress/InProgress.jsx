import React from "react";
import PythonLogo from "@/public/assets/skills-icons/python-svg.svg";
import Image from "next/image";

const InProgress = () => {
  return (
    <div className="w-[100%] flex justify-center border-t-[0.1px] border-[#252525] border-b-[0.1px] pb-20 pt-10">
      <div id="inprogress-skill" className="md:w-[85%]">
        <div id="inprogress-container">
          <div
            id="inprogress-icons"
            className="flex flex-wrap items-center justify-center gap-10 mt-10"
          >
            <h3>Currently in Progress...</h3>
            <div
              className="flex justify-center items-center bg-[#252525] p-5 rounded-md gap-2 md:gap-5 min-h-[50px] h-[70px] md:w-60 text-[0.8rem] md:text-[1rem]"
              title="Python Diploma"
            >
              <span className="text-[0.9rem] md:text-[1rem] flex justify-center items-center gap-5">
                <Image
                  src={PythonLogo}
                  width={45}
                  height={45}
                  className="text-[2rem] md:text-[3rem]"
                />
                Python Diploma (UTN)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InProgress;

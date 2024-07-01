import React from "react";
import Link from "next/link";
import { VscLinkExternal, VscGithub } from "react-icons/vsc";

import uuid from "react-uuid";
function ProjectInfo({ ...props }) {
  const handleLoaded = () => {
    props.setLoading(false);
  };

  console.log(props);
  return (
    <>
      {
        <div id="project-info" className="flex justify-center w-[100%]">
          <div
            id="project-info-container"
            className="flex justify-center items-center w-[95%] gap-20"
          >
            <div id="project-info-video-container">
              {props.projectPage?.infoProject[0].video ? (
                <>
                  {props.isLoading && (
                    <div className="flex flex-col items-center  text-center mt-20">
                      <div className="loadership_MANQV">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <p>Please wait... Loading video</p>
                    </div>
                  )}
                  <div className="w-[650px] rounded-lg">
                    <video
                      controls={true}
                      autoPlay
                      loop
                      aspect-auto
                      rounded-lg
                      className={`relative w-full overflow-hidden${
                        props.isLoading ? "hidden" : ""
                      }`}
                      alt="Project Image"
                      onLoadedData={handleLoaded}
                    >
                      <source src={props.projectPage.infoProject[0].video} />
                    </video>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <p>No video available</p>
                </div>
              )}
            </div>
            <div id="project-info-description-container">
              <div id="description-container-buttons">
                <div id="description-buttons">
                  {props.projectPage ? (
                    <>
                      {!props.projectPage.isInProgress && (
                        <Link href={props.projectPage.demo} target="_blank">
                          <button className="m-10 py-3 px-8 inline-flex items-center gap-x-2 text-sm rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
                            <VscLinkExternal />
                            <p>Demo</p>
                          </button>
                        </Link>
                      )}
                      <Link href={props.projectPage.code} target="_blank">
                        <button className="m-10 py-3 px-5 inline-flex items-center gap-x-2 text-sm rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
                          <VscGithub />
                          <p>Repository</p>
                        </button>
                      </Link>
                    </>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
              <div id="description-container-text">
                <div id="description" className="flex flex-col">
                  <div id="role-overview" className="flex gap-5">
                    <div id="project-role" className="flex flex-col w-[200px]">
                      <h2>My Role:</h2>
                      <p className="text-pretty">
                        {props.projectPage?.infoProject[0].myRole}
                      </p>
                    </div>
                    <div id="project-overview" className="w-[500px]">
                      <h2>Overview:</h2>
                      <p>{props.projectPage?.infoProject[0].overview}</p>
                    </div>
                  </div>
                  <div id="team-tech" className="flex w-full">
                    <div id="team" className="w-[200px]">
                      {props.projectPage?.infoProject[0].team ? (
                        <h4 className="font-semibold text-md">Team</h4>
                      ) : (
                        <></>
                      )}
                      {props.projectPage?.infoProject[0].team?.map(
                        (teamMate, index) => (
                          <p key={uuid()} className="font-thin text-[14px]">
                            {teamMate}
                          </p>
                        )
                      )}
                    </div>
                    <div id="tech" className="w-[500px]">
                      <h2>Technologies Used:</h2>
                      <p>
                        {props.projectPage?.lenguage.map((tech, index) => (
                          <h3
                            key={index}
                            className="font-extralight text-[14px]"
                          >
                            {tech}
                          </h3>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default ProjectInfo;

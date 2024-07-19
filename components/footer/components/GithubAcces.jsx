import React from "react";

function GithubAcces() {
  return (
    <div>
      <div
        id="footer-code-button"
        className="flex flex-col md:flex-row w-auto md:col-span-2 justify-center items-center gap-2 mt-10 md:mt-0"
      >
        <p className="text-center md:pr-10 text-sm">
          View this website on GitHub
        </p>
        <Link
          href={"https://github.com/emanuelpps/emp-portfolio"}
          target="_blank"
          className="flex justify-center items-center"
        >
          <button className="py-1 px-2 inline-flex items-center gap-x-2 text-sm rounded-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 hover:bg-gray-200 hover:text-black">
            <VscGithub />
            <p>Repository</p>
          </button>
        </Link>
      </div>
      <div
        id="footer-rights-container"
        className="md:col-span-2 pt-10 w-auto items-end h-[auto] mb-0 md:mb-[-80px]"
      >
        <div className="w-full flex flex-col items-center justify-center text-center">
          <h3 className="text-sm md:text-base">© 2024 Emanuel Pagés.</h3>
          <h4 className="text-[10px]">v{process.env.PORTFOLIO_VERSION}</h4>
        </div>
      </div>
    </div>
  );
}

export default GithubAcces;

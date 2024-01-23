import React from "react";
import ProjectPage from "./ProjectPage";
import workData from "../../../public/data/works.json";

export async function generateStaticParams() {
  return workData.map((work) => ({
    params: {
      slug: work.linkName,
    },
  }));
}

function Page({ params }) {
  return <ProjectPage params={params} />;
}

export default Page;

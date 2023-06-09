import React from "react";
import Leftpane from "../components/Leftpane";
import Titleblock from "../components/Titleblock";
import Textcontainer from "../components/Textcontainer";

function Skills() {
  return (
    <div className="flex w-screen">
      <Leftpane />
      <div className="w-screen bg-gray-50">
        <Titleblock title="About" />
        <div className="">
          <Textcontainer
            title="Front End"
            body="React.js, Angular, Redux, TailwindCSS"
          />
          <Textcontainer
            title="Back End"
            body="SpringBoot, Java, Node.js, MongoDB"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;

import React from "react";
import Leftpane from "../components/Leftpane";
import Titleblock from "../components/Titleblock";
import Textcontainer from "../components/Textcontainer";

function About() {
  return (
    <div className="flex w-screen">
      <Leftpane />
      <div className="w-screen bg-gray-50">
        <Titleblock title="About" />
        <div className="">
          <Textcontainer
            title="Sola Akinbode"
            body="I am full stack engineer. that went there with his
            people"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

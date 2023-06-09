import React from "react";
import Leftpane from "../components/Leftpane";
import Titleblock from "../components/Titleblock";
import Textcontainer from "../components/Textcontainer";

function Contact() {
  return (
    <div className="flex w-screen">
      <Leftpane />
      <div className="w-screen bg-gray-50">
        <Titleblock title="About" />
        <div className="">
          <Textcontainer
            title="Masters Degree: Software Engineering"
            body="University of Calgary"
          />
          <Textcontainer
            title="Bachelors Degree: Mechanical Engineering"
            body="Federal University of Agriculture Abeokuta"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import Leftpane from "../components/Leftpane";
import Titleblock from "../components/Titleblock";
import Textcontainer from "../components/Textcontainer";
import TicTacToe from "../assets/Tictactoe.jpeg";
import Jokes from "../assets/Jokes.jpeg";

function Projects() {
  return (
    <div className="flex w-screen">
      <Leftpane />
      <div className="w-screen bg-gray-50">
        <Titleblock title="Projects" />
        <div className="flex">
          <Textcontainer
            title="Tic-Tac-Toe"
            body="This game is built in SpringBoot/Java and in React.js"
            image={TicTacToe}
            className=" px-4"
          />
          <Textcontainer
            title="Grab a Joke"
            body="This game is built in Node.js/MongoDB and in React.js"
            image={Jokes}
            className="px-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;

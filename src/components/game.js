import React from "react";
import Board from "./board";
import { SportsApiService } from "../services/sports-service";

class Game extends React.Component {
  testMethod() {
    SportsApiService.getInstance().getGolfScores();
  }

  render() {
    this.testMethod();
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

export default Game;

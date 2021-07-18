import React from "react";
import { getGolfScores } from "../services/espn-tournament-rest";
import "./../styles/tournament-leaders.css";

class TournamentLeaders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      golferData: [],
    };
  }

  async componentDidMount() {
    const tournamentResults = await getGolfScores();
    this.setState({ golferData: tournamentResults.golfers });
  }

  render() {
    return (
      <div className="scrolling-wrapper">
        {this.state.golferData.map((golfer) => (
          <div key={golfer.golferId} className="card">
            <img className="golfer-pic" src={golfer.imageLink} alt="golfer" />
            <div className="text">
              {golfer.position} | {golfer.name}
            </div>
            <div className="text">
              {golfer.score} | {golfer.thru}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default TournamentLeaders;

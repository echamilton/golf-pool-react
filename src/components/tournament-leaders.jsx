import React from "react";
import { GetGolfScores } from "../services/espn-tournament-rest";
import { connect } from "react-redux";
import "./../styles/tournament-leaders.css";
import { loadTournamentData } from "./../redux/actions";

class TournamentLeaders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      golferData: [],
    };
  }

  async componentDidMount() {
    this.props.loadTournamentData();
    this.setState({ golferData: await GetGolfScores() });
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

export default connect(null, { loadTournamentData })(TournamentLeaders);

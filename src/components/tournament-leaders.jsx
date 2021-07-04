import React from "react";

class TournamentLeaders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
    };
  }


  render() {
    return (
      // {
  /* <div class="scrolling-wrapper">
  <div *ngFor="let golfer of golfers" class="card">
    <span (click)="openPopup(golfer)">
      <img class="golfer-pic" src="{{ golfer.imageLink }}" />
      <div>{{ golfer.position }} | {{ golfer.name }}</div>
      <div>{{ golfer.score }} | {{ golfer.thru }}</div>
    </span>
  </div>
</div> */
// }

      <div>
        <div className="board-row">
          {1}
          {1}
          {1}
        </div>
        <div className="board-row">
          {2}
          {2}
          {2}
        </div>
        <div className="board-row">
          {2}
          {2}
          {3}
        </div>
      </div>
    );
  }
}

export default TournamentLeaders;

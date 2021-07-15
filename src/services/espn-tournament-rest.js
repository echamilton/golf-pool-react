import axios from "axios";
import { getActiveEventId } from "./config";
import * as golfConstants from "../models/constants";

export async function GetGolfScores() {
  return new Promise(function (resolove, reject) {
    axios
      .get(
        `https://site.web.api.espn.com/apis/site/v2/sports/golf/leaderboard?event=401243414`
      )
      .then((res) => {
        const testdata = buildGolferScores(res.data.events[0]);
        resolove(testdata);
      });
  });
}

const buildGolferScores = (eventResponse) => {
  const espnGolfers = eventResponse.competitions[0].competitors;
  const golferResults = [];
  const tournamentResults = {
    eventId: golfConstants.INITIALIZED_VALUE,
    round: golfConstants.INITIALIZED_VALUE,
    status: golfConstants.INITIALIZED_VALUE,
    isTournamentActive: false,
    golfers: [],
  };

  //Golfer Scores
  espnGolfers.forEach((espnGolfer) => {
    golferResults.push(mapGolferScoreInfo(espnGolfer));
  });

  //Tournament Details
  tournamentResults.round = eventResponse.competitions[0].status.period;
  tournamentResults.status = eventResponse.status.type.state;
  tournamentResults.golfers = sortScores(golferResults);
  tournamentResults.eventId = getActiveEventId();
  tournamentResults.isTournamentActive = isTournamentActive(
    tournamentResults.status
  );
  // this.tournamentStatus = tournamentResults.status;
  // this.holeParScores = eventResponse.courses[0].holes;

  return golferResults;
};

const mapGolferScoreInfo = (espnGolfer) => {
  const score = isGolferActive(espnGolfer.status.displayValue)
    ? determineScore(espnGolfer)
    : 99;
  const golfer = {
    golferId: espnGolfer.id,
    name: espnGolfer.athlete.displayName,
    position: espnGolfer.status.position.displayName,
    thru: espnGolfer.status.thru,
    round: espnGolfer.status.period,
    score: score,
    isActive: false,
    scoreToday: golfConstants.INITIALIZED_VALUE,
    ownPct: 0,
    hole: golfConstants.INITIALIZED_VALUE,
    status:
      espnGolfer.status.displayValue === "CUT" ||
      espnGolfer.status.displayValue === "WD"
        ? "CUT"
        : "ACTIVE",
    imageLink: espnGolfer.athlete.headshot
      ? espnGolfer.athlete.headshot.href
      : espnGolfer.athlete.flag.href,
  };
  golfer.isActive = isGolferActive(golfer.status);
  return golfer;
};

const determineScore = (golfer) => {
  let score = 0;
  golfer.linescores.forEach((lineScore) => {
    if (lineScore.displayValue) {
      const tempScore =
        lineScore.displayValue === "E" || lineScore.displayValue === "-"
          ? 0
          : Number(lineScore.displayValue.replace(/\+/gi, ""));
      score = score + tempScore;
    }
  });
  return score;
};

function isGolferActive(status) {
  return status !== "CUT" && status !== "WD";
}

function isTournamentActive(updatedStatus) {
  const status = updatedStatus ? updatedStatus : this.tournamentStatus;
  return status !== golfConstants.TournamentStatus.pre;
}

function sortScores(golferScores) {
  golferScores.sort((a, b) => (a.score > b.score ? 1 : -1));
}

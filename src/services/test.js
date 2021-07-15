import axios from "axios";
import * as golfConstants from "./../models/constants";

export class SportsApiService {
  tournamentStatus = golfConstants.INITIALIZED_VALUE;
  holeParScores = [];

  static getInstance() {
    return new SportsApiService();
  }

  getGolfScores() {
    return new Promise(function (resolove, reject) {
      axios
        .get(
          `https://site.web.api.espn.com/apis/site/v2/sports/golf/leaderboard?event=401243414`
        )
        .then((res) => {
          // const testdata = this.buildGolferScores(res.data.events[0]);
          resolove(res);
        });
    });
  }

  //   getGolfScores(): Observable<ITournamentResults> {
  // return this.service.get(this.getEventEndpoint()).pipe(
  //   map(
  //     (response: any) => {
  //       return this.buildGolferScores(response);
  //     },
  //     catchError((err) => {
  //       return throwError(
  //         'Golf Scores API call failed' + '-' + this.getActiveEventId()
  //       );
  //     })
  //   )
  // );
  //   }

  //   getGolferScoreCard(golferId: string, round: number): Observable<IScoreCard> {
  //     const golferScoreCardURL = `${this.getScoreCardEndpoint()}${golferId}`;
  //     return this.service.get(golferScoreCardURL).pipe(
  //       map((response: any) => {
  //         return this.buildPlayerScorecard(response, round);
  //       })
  //     );
  //   }

  mapGolferScoreInfo(espnGolfer) {
    const score = this.isGolferActive(espnGolfer.status.displayValue)
      ? this.determineScore(espnGolfer)
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
    golfer.isActive = this.isGolferActive(golfer.status);
    return golfer;
  }

  determineScore(golfer) {
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
  }

  isGolferActive(status) {
    return status !== "CUT" && status !== "WD";
  }

  isTournamentActive(updatedStatus) {
    const status = updatedStatus ? updatedStatus : this.tournamentStatus;
    return status !== golfConstants.TournamentStatus.pre;
  }
}

//   private buildPlayerScorecard(
//     playerScorecard: any,
//     round: number
//   ): IScoreCard {
//     const holeScores = playerScorecard.rounds[round - 1].linescores;
//     const newScoreCard: IScoreCard = {};
//     const inScore: IHole = { par: 0, score: 0, indicator: INITIALIZED_VALUE };
//     const outScore: IHole = { par: 0, score: 0, indicator: INITIALIZED_VALUE };
//     const totalScore: IHole = {
//       par: 0,
//       score: 0,
//       indicator: INITIALIZED_VALUE
//     };

//     newScoreCard.playerName = playerScorecard.profile.displayName;
//     newScoreCard.imageLink = playerScorecard.profile.headshot;

//     //Iterate through each Hole
//     this.holeParScores.forEach((parScore) => {
//       const holeScore = holeScores.find(
//         (hole: any) => hole.period === parScore.number
//       );
//       const currentHole: IHole = {
//         par: parScore.shotsToPar,
//         score: 0,
//         indicator: ScoreValues.par
//       };

//       if (holeScore) {
//         currentHole.indicator = holeScore.scoreType.displayName;
//         currentHole.score = holeScore.value;
//       }

//       const holeKey: string = `hole${parScore.number}`;

//       // @ts-ignore
//       newScoreCard[holeKey] = currentHole;

//       if (parScore.number > 9) {
//         inScore.par = inScore.par + parScore.shotsToPar;
//         inScore.score = playerScorecard.rounds[round - 1].inScore;
//       } else {
//         outScore.par = outScore.par + parScore.shotsToPar;
//         outScore.score = playerScorecard.rounds[round - 1].outScore;
//       }
//     });
//     outScore.score = outScore.score ? outScore.score : 0;
//     inScore.score = inScore.score ? inScore.score : 0;

//     totalScore.par = inScore.par + outScore.par;
//     totalScore.score = inScore.score + outScore.score;
//     newScoreCard.In = inScore;
//     newScoreCard.Out = outScore;
//     newScoreCard.Total = totalScore;

//     return newScoreCard;
//   }

//   getActiveEventId(): any {
//     return TournamentConfig.find((data) => data.active)!.eventId;
//   }

//   getEventName(): string {
//     return TournamentConfig.find((data) => data.active)!.tournyId;
//   }

//   getEventEndpoint(): string {
//     const tourny = TournamentConfig.find(
//       (data) => data.eventId === this.getActiveEventId()
//     );
//     if (tourny) {
//       return tourny.url;
//     } else {
//       console.error('Could not retrieve PGA Tour data');
//       return '';
//     }
//   }

//   getScoreCardEndpoint(): string {
//     const tourny = TournamentConfig.find(
//       (data) => data.eventId === this.getActiveEventId()
//     );
//     if (tourny) {
//       return tourny.scorecard!;
//     } else {
//       console.error('Could not retrieve PGA Tour data');
//       return '';
//     }
//   }


buildGolferScores(eventResponse) {
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
    golferResults.push(this.mapGolferScoreInfo(espnGolfer));
  });

  //Tournament Details
  tournamentResults.round = eventResponse.competitions[0].status.period;
  tournamentResults.status = eventResponse.status.type.state;
  // tournamentResults.golfers = sortScores(golferResults);
  // tournamentResults.eventId = this.getActiveEventId();
  tournamentResults.isTournamentActive = this.isTournamentActive(
    tournamentResults.status
  );

  this.tournamentStatus = tournamentResults.status;
  this.holeParScores = eventResponse.courses[0].holes;

  return golferResults;
}
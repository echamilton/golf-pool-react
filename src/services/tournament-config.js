import { TournamentConfig } from "../models/constants";

export const getActiveEventId = () => {
  return TournamentConfig.find((data) => data.active).eventId;
};

export const getTournamentResultsEndpoint = () => {
  const tourny = TournamentConfig.find(
    (data) => data.eventId === getActiveEventId()
  );
  if (tourny) {
    return tourny.url;
  } else {
    console.error("Could not retrieve PGA Tour data");
    return;
  }
};

export const getScorecardEndpoint = () => {
  const tourny = TournamentConfig.find(
    (data) => data.eventId === this.getActiveEventId()
  );
  if (tourny) {
    return tourny.scorecard;
  } else {
    console.error("Could not retrieve PGA Tour data");
    return;
  }
};

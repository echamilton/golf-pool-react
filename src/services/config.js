import { TournamentConfig } from "./../models/constants";

export const getActiveEventId = () => {
  return TournamentConfig.find((data) => data.active).eventId;
};

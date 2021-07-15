export const TournamentConfig = [
  {
    eventId: "USOPEN-2021",
    tournyId: "USOPEN-2021",
    url: "https://site.web.api.espn.com/apis/site/v2/sports/golf/leaderboard?event=401243414",
    active: false,
    groupName: "usopen2021",
    scorecard:
      "https://site.web.api.espn.com/apis/site/v2/sports/golf/pga/leaderboard/401243414/playersummary?region=us&lang=en&season=2020&player=",
  },
  {
    eventId: "THEOPEN-2021",
    tournyId: "THEOPEN-2021",
    url: "https://site.web.api.espn.com/apis/site/v2/sports/golf/leaderboard?event=401243410",
    active: true,
    groupName: "theOpen2021",
    scorecard:
      "https://site.web.api.espn.com/apis/site/v2/sports/golf/pga/leaderboard/401243410/playersummary?region=us&lang=en&season=2020&player=",
  },
];

export const AppTitle = "443 Fantasy Golf";

export const INITIALIZED_VALUE = "";

export const ScoreValues = {
  birdie: "Birdie",
  par: "Par",
  eagle: "Eagle",
  double: "Double Bogey",
  triple: "Triple Bogey",
  bogey: "Bogey",
  noScore: "NOSCORE",
};

export const ScoreValueColors = [
  { score: ScoreValues.par, color: "black" },
  { score: ScoreValues.birdie, color: "blue" },
  { score: ScoreValues.bogey, color: "red" },
  { score: ScoreValues.eagle, color: "green" },
  { score: ScoreValues.double, color: "purple" },
  { score: ScoreValues.noScore, color: "black" },
];

export const GolferStatus = {
  cut: "CUT",
  active: "ACTIVE",
  withdrawn: "WD",
};

export const LeaderColumns = [
  "position",
  "team",
  "golfersRemain",
  "holesRemain",
  "score",
];

export const Messages = {
  userCreateSuccess: "Your account has been created",
  userCreateFail: "Unable to create account, check username / password",
  userLoginSuccess: "You have logged in successfully",
  userLoginFail: "Unable to login with provided credentials",
  submitTeam: "Are you sure you want to submit your team?",
  deleteTeam: "Are you sure you want to delete your entry?",
  teamError: "Complete your entry!",
  teamSuccess: "Picks have been submitted!",
  deleteSuccess: "Picks have been removed!",
  golferCut: "Golfer has been cut!",
  picksActiveTourny: "Picks not submitted, tournament already in progress",
};

export const ServiceCodes = {
  userFailCode: "auth/argument-error",
};

export const TournamentStatus = {
  pre: "pre",
};

export const golfers = [
  {
    key: 99,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 1,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 2,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 3,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 4,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 5,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 6,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 7,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 8,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 10,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 9,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 11,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 12,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 13,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 14,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 15,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 16,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 17,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 18,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 19,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 20,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
  {
    key: 21,
    name: "Jon Rahm",
    position: 1,
    score: -5,
    imageLink: "https://a.espncdn.com/i/headshots/golf/players/full/9780.png",
  },
];

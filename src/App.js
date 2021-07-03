import React from "react";
import "./App.css";
import { SportsApiService } from "./services/sports-service";
import NavigationBar from "./components/navigation-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PickTeam from "./components/pick-team";
import LeaderBoard from "./components/leaderboard";

function App() {
  SportsApiService.getInstance().getGolfScores();
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <Switch>
        <Route exact path="/">
          <LeaderBoard />
        </Route>
        <Route path="/picks">
          <PickTeam />
        </Route>
        <Route path="/leaderboard">
          <LeaderBoard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

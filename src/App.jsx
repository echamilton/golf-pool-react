import React from "react";
import "./App.css";
import NavigationBar from "./components/navigation-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PickTeam from "./components/pick-team";
import LeaderBoard from "./components/leaderboard";
import TournamentLeaders from "./components/tournament-leaders";

function App() {
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <TournamentLeaders></TournamentLeaders>
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

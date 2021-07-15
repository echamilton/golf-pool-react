import React from "react";
import "./App.css";
import NavigationBar from "./components/navigation-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PickTeam from "./components/pick-team";
import LeaderBoard from "./components/leaderboard";
import TournamentLeaders from "./components/tournament-leaders";
import SignUp from "./components/sign-up";

function App() {
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <div className="leaders scrolling-wrapper">
        <TournamentLeaders></TournamentLeaders>
      </div>
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
        <Route path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

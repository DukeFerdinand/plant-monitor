import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Weather } from "./Weather";

export const AppRouter = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Sidebar />
        <Switch>
          <div className="app-content">
            <Route path="/" exact component={() => <div>Hello!</div>} />
            <Route path="/weather" component={Weather} />
          </div>
        </Switch>
      </div>
    </Router>
  );
};

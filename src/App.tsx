import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { AddTasks } from "./components/pages/AddTasks";
import { ViewTasks } from "./components/pages/ViewTasks";
import { Error } from "./components/pages/Error";

function App() {
  return (
    <div>
      <Switch>
        <Route component={AddTasks} path="/" exact />
        <Route component={ViewTasks} path="/viewTasks" />
        <Route component={Error} path="*" />
      </Switch>
    </div>
  );
}

export default App;

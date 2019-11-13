import React, { FunctionComponent } from "react";

import "./App.scss";
import { Sidebar } from "./Sidebar";
import { AppRouter } from "./router";
import { Greeter } from "./Greeter/Greeter";

export const App: FunctionComponent = () => {
  return (
    <React.Fragment>
      {/* <Greeter /> */}
      <AppRouter />
    </React.Fragment>
  );
};

import React, { FunctionComponent } from "react";

import "./App.scss";
import { Sidebar } from "./Sidebar";
import { AppRouter } from "./router";

export const App: FunctionComponent = () => {
  return <AppRouter />;
};

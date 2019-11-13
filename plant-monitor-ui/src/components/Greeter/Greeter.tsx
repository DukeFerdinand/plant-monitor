import React from "react";

import "./Greeter.scss";

export const Greeter: React.FunctionComponent = () => {
  return (
    <div className="greeter evening">
      <div className="greeter-message">talking to your plants</div>
    </div>
  );
};

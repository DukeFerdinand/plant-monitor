import React from "react";
import { daily } from "../../data/daily-weather";
import moment from "moment";

import "./Weather.scss";

export const Weather: React.FunctionComponent = () => {
  return (
    <div className="forecast">
      {daily.data.map(day => {
        return (
          <div className="day" key={day.time}>
            <div className="upper">
              {Math.floor(day.temperatureHigh)} /
              {Math.floor(day.temperatureLow)}
            </div>
            {moment.unix(day.time).format("dddd")}
          </div>
        );
      })}
    </div>
  );
};

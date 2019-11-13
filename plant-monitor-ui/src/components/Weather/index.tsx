import React from "react";
import { daily } from "../../data/daily-weather";
import moment from "moment";
import Skycons from "react-skycons";

import "./Weather.scss";
import { Icon } from "../Icon";

// @ts-ignore
const replaceAll = function(str, search, repl) {
  const target = str;
  return target.replace(new RegExp(search, "g"), repl);
};

export const Weather: React.FunctionComponent = () => {
  return (
    <div className="forecast">
      {daily.data.map(day => {
        return (
          <div className="day" key={day.time}>
            <p className="day-title">{moment.unix(day.time).format("dddd")}</p>
            <div className="high-low">
              {`${Math.floor(day.temperatureHigh)}`}&deg; /{" "}
              {`${Math.floor(day.temperatureLow)}`}&deg;
              <Icon iconName="alert-circle" className="alert-icon warning" />
            </div>
            <div className="weather-icon">
              <Skycons
                // Normalize to UPPER_SNAKE_CASE
                icon={replaceAll(day.icon.toUpperCase(), "-", "_")}
                color="#fafafa"
                autoplay={true}
              />
            </div>
            <p className="day-summary">{day.summary}</p>
          </div>
        );
      })}
    </div>
  );
};

import React from "react";
import { Icon } from "./Icon";
import { NavLink } from "react-router-dom";
import icons, { Icons } from "../assets/icons";

import "./Sidebar.scss";

const appTitle = "Plant Monitor";

interface ILink {
  to: string;
  text: string;
  iconName?: keyof Icons;
}

const links: ILink[] = [
  {
    to: "/",
    text: "Home",
    iconName: "home"
  },
  {
    to: "/weather",
    text: "Weather",
    iconName: "cloud-drizzle"
  },
  {
    to: "/manage",
    text: "Manage",
    iconName: "alert"
  }
];

export const Sidebar = () => {
  return (
    <div className="app-sidebar">
      <h3 className="app-title">{appTitle}</h3>
      <hr className="sidebar-divider" />
      <div className="sidebar-options">
        {links.map(link => (
          <NavLink
            exact={link.to === "/"}
            key={`key-${link.to}`}
            activeClassName="is-active"
            to={link.to}
            className="sidebar-option valign-center"
          >
            <Icon
              iconName={link.iconName ? link.iconName : "alert"}
              className="light medium"
            />
            {link.text}
          </NavLink>
        ))}
      </div>
      <div className="sidebar-disclaimers">
        <div className="weather-disclaimer">
          <a href="https://darksky.net/">
            <img
              src="https://darksky.net/dev/img/attribution/poweredby-oneline.png"
              alt="Dark Sky logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

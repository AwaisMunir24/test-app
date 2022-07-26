import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MenuData } from "../Header/MenuData";

import "./MenuSideBar.css";

const SidebarMenu = () => {
  return (
    <>
      <nav className="desktop-menu position-fiexd">
        <ul className="menu">
          {MenuData.map((value, index) => {
            return (
              <li key={index} className="menu-item current-menu-item">
                <Link to={value.path}>
                  {value.icon}
                  <span>{value.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default SidebarMenu;

import React, { useEffect, useState } from "react";
import "./MenuSideBar.css";
import { Link } from "react-router-dom";

import { MenuData } from "../Header/MenuData";

import "./MenuSideBar.css";

const SidebarMenu = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div className="sidebar">
        <div className={`${open ? "sidebar_items" : "sidebar_items_2"}`}>
          <div className="icons">
            <i
              className="fa-solid fa-angle-left"
              onClick={() => setOpen(!open)}
            ></i>
          </div>
       
        <ul className="navigation_list">
          {MenuData.map((value, index) => {
            return (
              <Link to={value.path} key={index}>
                <li key={index}>
                  {value.icon}
                  <span className={`${!open && "hidden"}`}>{value.name}</span>
                </li>
              </Link>
            );
          })}
        </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;

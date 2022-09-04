import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import logo from "../../Assestes/photos/lubi.jpg";

import "./Header.css";

import SidebarMenu from "../MenuSideBar/MenuSidebar";
const Header = () => {
  const [login, setLogin] = useState(true);
  const handleLoginEvent = () => {
    setLogin(!login);
  };

  return (
    <>
      <header className="header-section">
        {login ? (
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="d-flex align-items-center">
                  <div className="logo-view">
                
                  <Link to="homepage">
                      <img src={logo} alt="logo" />
                    </Link>
                
                  </div>
                </div>
              </div>

              <div className="col-lg-8 text-end">
                <ul>
                 
                    <li>
                      <Link to="invoices" onClick={handleLoginEvent}>
                        Login
                      </Link>
                    </li>
               
             
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="d-flex align-items-center">
                  <div className="logo-view">
                    <Link to="homepage">
                      <img src={logo} alt="logo" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 text-end">
                <ul>
       
                  
            
                    <li>
                      <Link to="/" onClick={handleLoginEvent}>
                        Logout
                      </Link>
                    </li>
               
                </ul>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
export default Header;

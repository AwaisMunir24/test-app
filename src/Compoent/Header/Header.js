import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import logo from "../../Assestes/photos/lubi.jpg";

import "./Header.css";

import SidebarMenu from "../MenuSideBar/MenuSidebar";

const Header = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);
  const handleLoginEvent = () => {
    setLogin(!login);
   
   
    navigate("/login");
  };
  const  handleLoginEvent2=()=>{
    setLogin(false);
    localStorage.clear();
    navigate('/login');
  }


  return (
    <>
      <header className="header-section">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="d-flex align-items-center">
                <div className="logo-view">
                  {login ? (
                    <Link to="homepage">
                      <img src={logo} alt="logo" />{" "}
                    </Link>
                  ) : (
                    <img src={logo} alt="logo" />
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-8 text-end">
              <ul>
                {login ? (
                  <li>
                    <Link to="login" onClick={handleLoginEvent2}>
                      Abc User  (logout)
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link to="login" onClick={handleLoginEvent}>
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;

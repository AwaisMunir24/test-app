import React, { Component } from "react";
import logo from "../../Assestes/photos/lubi.jpg";
import profile from "../../Assestes/photos/profile.jpg";
import { Link } from "react-router-dom";
import { Menudata } from "./MenuData";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header className="">
        <div className="container-fluid header-section">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-4 col-md-3 col-sm-4">
              <div className="logo-wrapper d-flex align-items-center">
                <a href="#">
                  <img src={logo} />
                </a>
                <a href="#">
                  <h4 className="m-0 company-name">Lubricants</h4>
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-9 col-sm-8 d-flex justify-content-end align-items-center profile ">
              <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm">
                <div className="container-fluid">
                  
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" >
                    <div className="navbar-nav">
                     
                      <Link className="nav-link" to="/">
                        Login
                      </Link>
                      <Link className="nav-link" to="/invoices">
                        Invoices
                      </Link>
                      <Link className="nav-link" to="/addproduct">
                        Add product
                      </Link>
                      <Link className="nav-link" to="/addclient">
                        Add Clients
                      </Link>
                      <Link className="nav-link" to="/homepage">
                        Home Page
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
              <img src={profile} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;

import React, {  useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import logo from "../../Assestes/photos/lubi.jpg";
import Invoices from "../invoices/Invoices";
import AddClient from "../addClients/Add_Client";
import AddProduct from "../addproduct/AddProduct";
import HomePage from "../homepage/HomePage";
import Sales from "../sales/Sales";
import Tasks from "../tasks/Tasks";
import Company from "../company/Company";
import "./Header.css";

import SidebarMenu from "../MenuSideBar/MenuSidebar";
const Header = () => {
  const [Toogle, setToogle] = useState(false);
  const handleToggle = () => {
    setToogle(!Toogle);
    console.log("hello");
  };
  const [login, setLogin] = useState(true);
  const handleLogout = () => {
    setLogin(!login);
  };

   const [addRmoveClass, setaddRmoveClass] = useState(true);
  const _handleToggleClasses = () => {
    setaddRmoveClass(!addRmoveClass);
  };

  return (
    <>
      {login ? (
        <header className="header-section">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-2">
                <div className="d-flex align-items-center">
                  <div className="logo-first-sec "></div>
                  <div className="logo-view">
                    <img src={logo} alt="logo" />
                  </div>
                </div>
              </div>

              <div className="col-lg-8 text-end">
                <Link to="/invoices" onClick={handleLogout}>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <section className="">
          <header className="header-section2">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-4">
                  <div className="d-flex align-items-center">
                    <div className="logo-first-sec "></div>
                  </div>
                </div>

                <div className="col-lg-6 text-end justify-content-between d-flex align-items-center">
                  <div className="logo-view">
                    <img src={logo} alt="logo" />
                  </div>

                  <Link to="/" onClick={handleLogout}>
                    LogOut
                  </Link>
                </div>
              </div>
            </div>
          </header>
          <div className="container-fluid d-flex  p-0 topspace-90">
            <div
              className="sidebar-toggle sssss"
              onClick={() => _handleToggleClasses()}
            >
              <i className="fa-solid fa-bars"> </i>
            </div>
            <div
              className={addRmoveClass ? "sidebar-menu open" : "sidebar-menu"}
            >
              <SidebarMenu />
            </div>
            <div className="main-container ">
              <Routes>
                <Route path="/invoices" element={<Invoices />} />
                <Route path="addproduct" element={<AddProduct />} />
                <Route path="addclient" element={<AddClient />} />
                <Route path="homepage" element={<HomePage />} />
                <Route path="sales" element={<Sales/>} />
                <Route path="tasks" element={<Tasks/>} />
                <Route path="company" element={<Company/>} />
              </Routes>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default Header;

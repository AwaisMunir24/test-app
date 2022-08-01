import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import HomePage from "../homepage/HomePage";
import Login from "../Login/Login";

const MainFile = () => {
  
  const [addRmoveClass, setaddRmoveClass] = useState(true);
  const _handleToggleClasses = () => {
    setaddRmoveClass(!addRmoveClass);
  };
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const logout = () => {
    localStorage.clear();
    navigate("/Login");
  };
  return (
    <>
   
      <div className="main-container ">
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/homepage" element={<HomePage />} />
          {/* <Route path="invoices" element={<Invoices />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="addclient" element={<AddClient />} />
          <Route path="homepage" element={<HomePage />} /> */}
        </Routes>
      </div>
    </>
  );
};
export default MainFile;

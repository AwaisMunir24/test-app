import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footre";
import Login from "../Login/Login";
import Invoices from "../invoices/Invoices";
import AddProduct from "../addproduct/AddProduct";
import AddClient from "../addClients/Add_Client";
import HomePage from "../homepage/HomePage";

const MainFile = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="addclient" element={<AddClient />} />
          <Route path="homepage" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};
export default MainFile;

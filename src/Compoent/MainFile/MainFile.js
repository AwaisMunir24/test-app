import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AddClient from "../addClients/Add_Client";
import AddProduct from "../addproduct/AddProduct";
import CashInvoices from "../cashinvoice/CashInvoice";
import Company from "../company/Company";
import Expenses from "../expenses/Expenses";
import HomePage from "../homepage/HomePage";
import Invoices from "../invoices/Invoices";
import Login from "../Login/Login";
import Payments from "../payments/Payments";
import PriceList from "../pricelist/PriceList";
import Quotation from "../quotation/Quotation";
import Sales from "../sales/Sales";
import Stock from "../stock/Stock";
import Tasks from "../tasks/Tasks";

const MainFile = () => {
  function adminList() {
    let items = JSON.parse(localStorage.getItem("admin"));
    if (items) {
      return JSON.parse(localStorage.getItem("admin"));
    } else {
      return [];
    }
  }
  const [admins, setAdmins] = useState(adminList());

  let navigate = useNavigate();
  const loginng = () => {
    navigate("/");

    console.log(admins, "apps");
  };
  useEffect(() => {
    loginng();
  }, []);
  return (
    <>
      <div className="context ">
        <Routes>
          {/* <Route path="" element={<Login />} />
          <Route path="/homepage" element={<HomePage />} /> */}

          <Route path="/" element={<Login />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="addclient" element={<AddClient />} />
          <Route path="sales" element={<Sales />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="company" element={<Company />} />
          <Route path="quote" element={<Quotation />} />
          <Route path="pay" element={<Payments />} />
          <Route path="expense" element={<Expenses />} />
          <Route path="cash" element={<CashInvoices />} />
          <Route path="picelist" element={<PriceList />} />
          <Route path="stock" element={<Stock />} />
          <Route path="homepage" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
};
export default MainFile;

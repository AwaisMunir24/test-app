import React, { Component, useEffect, useState } from "react";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";
import Table_Row from "../../AbstractComponent/tablerow/Table_Row";
import AddProduct from "../addproduct/AddProduct";
import { Link } from "react-router-dom";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import "./Invoices.css";
const Invoices = () => {
  function getItems() {
    const item = localStorage.getItem("productData");

    if (item) {
      return JSON.parse(localStorage.getItem("productData"));
    } else {
      return [];
    }
  }

  const [toogle, setToogle] = useState(true);
  const [tableData, setTableData] = useState(getItems());
  const _heandleSearcedValue = () => {
    console.log("Hello i m ok function");
    setToogle(!toogle);
  };
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const _handleSearchValue = (e) => {
    setSearch(search);
    setToogle(!toogle);

    return tableData.filter((e) => {
      const localfilter = e.ProductName.trim();
      const searchable = search.trim();

      if (localfilter == searchable) {
        setIsSearch(true);
        setSearchResult([e]);
      } else {
        return "";
      }
    });
  };

  function _getData() {
    if (isSearch) {
      return searchResult;
    } else {
      return tableData;
    }
  }
  const _addProduct = () => {
    console.log("Add Product Button in triggred");
  };

  useEffect(() => {
    localStorage.setItem("productData", JSON.stringify(tableData));
  }, [tableData]);

  // const _handleUpdatedValue=(obj)=>{
  //   let findIndex = tableData.findIndex((ls)=>ls.id === obj.id);
  //   if(
  //     findIndex =>0
  //   ){
  //     let newTableData = [...tableData];
  //     newTableData[findIndex]={...obj};
  //     setTableData([...newTableData]);
  //   }
  // };

  return (
    <>
      <section className="">
        <div className="first-inventory-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="button-n-secName d-flex justify-content-center align-items-center mb-4 pt-4">
                  <Abs_Heading heading="Invoices" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 ">
                <div className="search-bar d-flex justify-content-between mt-5 mb-2">
                  <div className="input-sec d-flex ">
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Enter The Product Name"
                    />
                    <Abs_Button title="Search" events={_handleSearchValue} />
                  </div>
                  <div className="text-end add-pro">
                   <Abs_Input 
                   type="text"
                   placeholder="Enter the Client Name"
                   />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="d-flex flex-column">
                  <label>Invoice Date:</label>
                  <input type="date" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <table className="table w-100 text-center">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Products</th>
                      <th>Qty</th>
                      <th>Sale</th>
                      <th>sales</th>
                      <th>Discount</th>
                      <th>Net Amount</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {_getData().map((e, idx) => (
                      <Table_Row
                        key={idx}
                        id={e.id}
                        productsName={e.ProductName}
                        unitcost={e.cost}
                        unitprice={e.price}
                        qty={e.qty}
                        pressDlt={() => {
                          setTableData(
                            tableData.filter((ele) => ele.id !== e.id)
                          );
                        }}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Invoices;

import React, { Component, useEffect, useState } from "react";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";
import Table_Row from "../../AbstractComponent/tablerow/Table_Row";
import AddProduct from "../addproduct/AddProduct";
import { Link } from "react-router-dom";
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
  // console.log(tableData, "<==");
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
                <div className="button-n-secName d-flex justify-content-between align-items-center">
                  <h2>Products</h2>
                </div>
                <div className="search-bar d-flex justify-content-between">
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
                    <Link to="/addproduct">
                      {" "}
                      <Abs_Button title="Add Product" events={_addProduct} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <table className="table w-100">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Products</th>
                      <th>Unit Cost</th>
                      <th>Unit Price</th>
                      <th>Qty</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* { console.log(tableData,'found here') } */}

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

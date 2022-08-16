import React, { Component, useEffect, useState } from "react";
import "./AddProduct.css";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";
import { Link } from "react-router-dom";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import {
  PERCENTAGE,
  FIXED,
  COMPANY,
  GREESE,
  LUBRICANTS,
  ATF,
  GEAROIL,
} from "../../../src/redux/consts";

const AddProduct = () => {
  function getItems() {
    const item = localStorage.getItem("productData");

    if (item) {
      return JSON.parse(localStorage.getItem("productData"));
    } else {
      return [];
    }
  }

  const [ProductName, setProductName] = useState("");
  const [cost, setCost] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [getpercent, setGetPercent] = useState(false);
  const [discountType, setDiscountType] = useState(PERCENTAGE);
  const [company, setCompany] = useState(COMPANY);
  const [itemCategory, setItemCategory] = useState(GREESE);

  const [productData, setProductData] = useState(getItems());
  const [carton, setCarton] = useState();
  const [cat, setCat] = useState(false);

  console.log("=>", productData);
  const _handleSaveProduct = (e) => {
    const kixxs = [
      ...productData,
      {
        id: productData.length + 1,
        ProductName,
        cost,
        price,
        qty,
      },
    ];

    setProductData(kixxs);
  };

  useEffect(() => {
    localStorage.setItem("productData", JSON.stringify(productData));
  }, [productData]);

  const handleDisbale = (type) => {
    setGetPercent(!getpercent);
    setDiscountType(type);
  };
  const Category = (e) => {
    setCat(!cat);
    setItemCategory(e);
  };

  const handleCompany = () => {};

  return (
    <>
      <section className="addproductsection">
        <div className="container">
          <div className="row heading-row">
            <div className="col-lg-12 head text-center">
              <Abs_Heading heading="Product Info" />
            </div>
          </div>
          <form>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div>
                  <label className="form-label">Product</label>
                  <Abs_Input
                    changeFunc={(e) => setProductName(e.target.value)}
                    type="text"
                    val={ProductName}
                    classN="form-control"
                  />
                </div>
                <div className="input-section">
                  <label className="form-label">Unit Price</label>
                  <Abs_Input
                    changeFunc={(e) => setPrice(e.target.value)}
                    type="number"
                    val={price}
                    classN="form-control"
                  />
                </div>

                <div className="input-section">
                  <label className="form-label">Quantity</label>
                  <Abs_Input
                    changeFunc={(e) => setQty(e.target.value)}
                    type="number"
                    val={qty}
                    classN="form-control"
                  />
                </div>
                <div className="input-section">
                  <label className="form-label">Carton Price</label>
                  <Abs_Input
                    changeFunc={(e) => setCarton(e.target.value)}
                    type="number"
                    val={qty}
                    classN="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div>
                  <label className="form-label">Category:</label>
                  <div className="dropdown">
                    <button
                      className="btn drop-btn dropdown-toggle w-100"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <p className="m-0">
                        {" "}
                        Select Categotry {`${itemCategory}`}{" "}
                      </p>
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => Category(GREESE)}
                      >
                        {GREESE}
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => Category(LUBRICANTS)}
                      >
                        {LUBRICANTS}
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => Category(ATF)}
                      >
                        {ATF}
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => Category(GEAROIL)}
                      >
                        {GEAROIL}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="input-section">
                  <label className="form-label">Discount:</label>
                  <div className="dropdown">
                    <button
                      className="btn drop-btn dropdown-toggle w-100"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <p className="m-0">
                        {" "}
                        Select Discount Mode {`${discountType}`}{" "}
                      </p>
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleDisbale(FIXED)}
                      >
                        {FIXED}
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handleDisbale(PERCENTAGE)}
                      >
                        {PERCENTAGE}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="input-section" aria-disabled>
                  <label className="form-label">Discount Price</label>
                  {getpercent ? (
                    <input type="text" class="form-control" />
                  ) : (
                    <input type="text" class="form-control" disabled />
                  )}
                </div>
                <div className="input-section">
                  <label className="form-label">Company:</label>
                  <Abs_Input type="text" classN="form-control" />
                </div>
              </div>
              <div className="form-submit-button">
                <Link to="">
                  <Abs_Button
                    title="Save Product"
                    events={_handleSaveProduct}
                  />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default AddProduct;

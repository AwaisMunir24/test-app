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
import Abs_Productlist from "../../AbstractComponent/Abs_Productlist/Abs_Productlist";

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
  const [company, setCompany] = useState("");
  const [itemCategory, setItemCategory] = useState(GREESE);
  const [fixedValue, setFixedValue] = useState();
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
        itemCategory,
        cost,
        price,
        qty,
        carton,
        fixedValue,
        company,
      },
    ];

    setProductData(kixxs);
    setProductName("");
    setItemCategory("");
    setCost("");
    setPrice("");
    setQty("");
    setCarton("");
    setCompany("");
    setFixedValue("");
    // console.log(company,"<==")
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
          {/* <!-- Tabs navs --> */}
          <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="ex1-tab-1"
                data-mdb-toggle="tab"
                href="#ex1-tabs-1"
                role="tab"
                aria-controls="ex1-tabs-1"
                aria-selected="true"
              >
                Add product
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="ex1-tab-2"
                data-mdb-toggle="tab"
                href="#ex1-tabs-2"
                role="tab"
                aria-controls="ex1-tabs-2"
                aria-selected="false"
              >
                Product list
              </a>
            </li>
          </ul>
          {/* <!-- Tabs navs --> */}

          {/* <!-- Tabs content --> */}
          <div class="tab-content" id="ex1-content">
            <div
              class="tab-pane fade show active"
              id="ex1-tabs-1"
              role="tabpanel"
              aria-labelledby="ex1-tab-1"
            >
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
                          <p className="m-0 porduct-downdowns">
                            {" "}
                            Select Discount Mode{" "}
                            <span> {`${discountType}`}</span>{" "}
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

                    <div className="input-section">
                      <label className="form-label">Carton Price</label>
                      <Abs_Input
                        changeFunc={(e) => setCarton(e.target.value)}
                        type="number"
                        val={carton}
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
                          <p className="m-0 porduct-downdowns">
                            {" "}
                            Select Categotry <span>{`${itemCategory}`}</span>{" "}
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
                      <label className="form-label">Quantity</label>
                      <Abs_Input
                        changeFunc={(e) => setQty(e.target.value)}
                        type="number"
                        val={qty}
                        classN="form-control"
                      />
                    </div>

                    <div className="input-section" aria-disabled>
                      <label className="form-label">Discount Price</label>

                      <input
                        disabled={discountType == PERCENTAGE}
                        min="1"
                        type="text"
                        class="form-control"
                        value={fixedValue}
                        onChange={(e) => setFixedValue(e.target.value)}
                      />
                    </div>
                    <div className="input-section">
                      <label className="form-label">Company:</label>
                      <Abs_Input
                        type="text"
                        classN="form-control"
                        val={company}
                        changeFunc={(e) => setCompany(e.target.value)}
                      />
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
            <div
              class="tab-pane fade"
              id="ex1-tabs-2"
              role="tabpanel"
              aria-labelledby="ex1-tab-2"
            >
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">product</th>
                    <th scope="col">Category</th>
                    <th scope="col">Unir Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Carton Price</th>
                    <th scope="col">Discount price</th>
                    <th scope="col">Company</th>
                  </tr>
                </thead>
                <tbody>
                  {productData.map((e, idx) => (
                    <Abs_Productlist
                      id={e.id}
                      ProductName={e.ProductName}
                      itemCategory={e.itemCategory}
                      price={e.price}
                      qty={e.qty}
                      carton={e.carton}
                      fixedValue={e.fixedValue}
                      company={e.company}
                      pressDlt={() => {
                        setProductData(
                          productData.filter((ele) => ele.id !== e.id)
                        );
                      }}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* <!-- Tabs content --> */}
        </div>
      </section>
    </>
  );
};
export default AddProduct;

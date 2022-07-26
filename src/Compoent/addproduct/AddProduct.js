import React, { Component, useEffect, useState } from "react";
import "./AddProduct.css";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";
import { Link } from "react-router-dom";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";

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

  const [productData, setProductData] = useState(getItems());

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

  return (
    <>
      <section className="addproductsection">
        <div className="container">
          <div className="row heading-row">
            <div className="col-lg-12 head text-center">
              <Abs_Heading
              heading="Product Info"
              />
             
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
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div>
                  <label className="form-label">Unit Cost</label>
                  <Abs_Input
                    changeFunc={(e) => setCost(e.target.value)}
                    type="number"
                    val={cost}
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

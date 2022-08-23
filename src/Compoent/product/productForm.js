import React, { useEffect, useState } from "react";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import {
  PERCENTAGE,
  FIXED,
  COMPANY,
  GREESE,
  LUBRICANTS,
  ATF,
  GEAROIL,
  LS_PRODUCT_DATA,
} from "../../redux/consts";
import { lsGetItem, lsSetItem } from "../../utils/helpers";

import { Link } from "react-router-dom";

const ProductForm = ({ updateData }) => {
  const [ProductName, setProductName] = useState("");
  const [cost, setCost] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [getpercent, setGetPercent] = useState("");
  const [discountType, setDiscountType] = useState(PERCENTAGE);
  const [company, setCompany] = useState("");
  const [itemCategory, setItemCategory] = useState(GREESE);
  const [fixedValue, setFixedValue] = useState("");
  const [productData, setProductData] = useState(lsGetItem(LS_PRODUCT_DATA));
  const [carton, setCarton] = useState();
  const [cat, setCat] = useState(false);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    lsSetItem(LS_PRODUCT_DATA, productData);
  }, [productData]);

  const handleDisbale = (type) => {
    setDiscountType(type);
  };

  const Category = (e) => {
    setCat(!cat);
    setItemCategory(e);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

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

    if (
      ProductName == "" ||
      itemCategory == ""
      // cost == "" ||
      // price == "" ||
      // qty == "" ||
      // carton == "" ||
      // fixedValue == "" ||
      // company == ""
    ) {

      setMessage(true);
      console.log("NOT wORING..")
    } else {
      console.log("WORKFING.1")
      setMessage(false);

    
      updateData(kixxs)
          setProductName("");
      // setItemCategory("");
      // setCost("");
      setPrice("");
      setQty("");
      setCarton("");
      setCompany("");
      // setFixedValue("");
      console.log("WORKFING.2")

    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="product_Information_section">
            <label className="form-label">Product</label>
            <Abs_Input
              changeFunc={(e) => setProductName(e.target.value)}
              type="text"
              val={ProductName}
              classN="form-control"
            />
            {message && !ProductName && (
              <p className="m-0 Data product_Error">Please Enter Product</p>
            )}
          </div>

          <div className="input-section product_Information_section2">
            <label className="form-label">Quantity</label>
            <Abs_Input
              changeFunc={(e) => setQty(e.target.value)}
              type="number"
              val={qty}
              classN="form-control"
            />
            {message && !qty && (
              <p className="m-0 Data product_Error2">Please Enter Product</p>
            )}
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
            {/* {message && !qty && <p className="m-0 Data">Please Enter Product</p>} */}
          </div>

          <div className="input-section product_Information_section3">
            <label className="form-label">Carton Price</label>
            <Abs_Input
              changeFunc={(e) => setCarton(e.target.value)}
              type="number"
              val={carton}
              classN="form-control"
            />
            {message && !carton && (
              <p className="m-0 Data product_Error3">Please Enter Product</p>
            )}
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
          <div className="input-section product_Information_section4">
            <label className="form-label">Company:</label>
            <Abs_Input
              type="text"
              classN="form-control"
              val={company}
              changeFunc={(e) => setCompany(e.target.value)}
            />
            {message && !company && (
              <p className="m-0 Data product_Error4">Please Enter Product</p>
            )}
          </div>

          <div className="input-section" aria-disabled>
            <label className="form-label">Discount Price</label>

            <input
              disabled={discountType == PERCENTAGE}
              min="1"
              type="text"
              class="form-control"
              value={discountType == PERCENTAGE ? "" : fixedValue}
              onChange={(e) => setFixedValue(e.target.value)}
            />
            {/* {message && !company && <p className="m-0 Data">Please Enter Product</p>} */}
          </div>
          <div className="input-section product_Information_section5">
            <label className="form-label">Unit Price</label>
            <Abs_Input
              changeFunc={(e) => setPrice(e.target.value)}
              type="number"
              val={price}
              classN="form-control"
            />
            {message && !price && (
              <p className="m-0 Data product_Error5">Please Enter Product</p>
            )}
          </div>
        </div>
        <div className="form-submit-button">
          <Abs_Button title="Save Product" />
        
        </div>
      </div>
    </form>
  );
};

export default ProductForm;

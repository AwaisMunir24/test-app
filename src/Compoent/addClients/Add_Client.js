import React, { Component, useEffect, useState } from "react";
import "./Add_Client.css";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";
import { Link } from "react-router-dom";
const AddClient = () => {
function getUsers () {
    const users=localStorage.getItem('userData');
    if(users){
        return JSON.parse(localStorage.getItem('userData'))
    }else{
        return []
    }
    

}


  const [clientName, setClientName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [shop, setShop] = useState("");


  const [userData,setUserData]=useState(getUsers());
  const SaveClient = () => {
    const Clients=[
        ...userData,{
            id:userData.length + 1,
            clientName,
            number,
            address,
            shop
        }
    ]
    setUserData(Clients);
 
  };
  useEffect(()=>{
    localStorage.setItem('userData',JSON.stringify(userData))
  },[userData]);

  return (
    <>
      <section className="addproductsection">
        <div className="container">
          <div className="row heading-row">
            <div className="col-lg-12 head">
              <h3 className="text-center">Add Clients</h3>
            </div>
          </div>
          <form>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div>
                  <label className="form-label">Client Name</label>
                  <Abs_Input
                    changeFunc={(e) => setClientName(e.target.value)}
                    type="text"
                    val={clientName}
                    classN="form-control"
                  />
                </div>
                <div className="input-section">
                  <label className="form-label">Address</label>
                  <Abs_Input
                    changeFunc={(e) => setAddress(e.target.value)}
                    type="text"
                    val={address}
                    classN="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div>
                  <label className="form-label">Number</label>
                  <Abs_Input
                    changeFunc={(e) => setNumber(e.target.value)}
                    type="number"
                    val={number}
                    classN="form-control"
                  />
                </div>
                <div className="input-section">
                  <label className="form-label">Shop Name:</label>
                  <Abs_Input
                    changeFunc={(e) => setShop(e.target.value)}
                    type="text"
                    val={shop}
                    classN="form-control"
                  />
                </div>
              </div>
              <div className="form-submit-button">
                <Link to="">
                  <Abs_Button title="Save Client" events={SaveClient} />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default AddClient;

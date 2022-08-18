import React, { Component, useEffect, useState } from "react";
import "./Add_Client.css";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";
import { Link } from "react-router-dom";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import Abs_ClientList from "../../AbstractComponent/Abs_ClientList/Abs_ClientList";
const AddClient = () => {
  function getUsers() {
    const users = localStorage.getItem("userData");
    if (users) {
      return JSON.parse(localStorage.getItem("userData"));
    } else {
      return [];
    }
  }

  const [clientName, setClientName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [shop, setShop] = useState("");
  const [userData, setUserData] = useState(getUsers());
  const SaveClient = () => {
    const Clients = [
      ...userData,
      {
        id: userData.length + 1,
        clientName,
        number,
        address,
        shop,
      },
    ];
    setUserData(Clients);
    setClientName("");
    setNumber("");
    setAddress("");
    setShop("");
  };
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <>
      <section className="addclient">
        <div className="container">
          <div className="row heading-row">
            <div className="col-lg-12 head text-center">
              <Abs_Heading heading="Client" />
            </div>
          </div>

          {/* <!-- Tabs navs --> */}
          <ul class="nav nav-tabs mb-3" id="myTab0" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab0"
                data-mdb-toggle="tab"
                data-mdb-target="#home0"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Add Clients
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab0"
                data-mdb-toggle="tab"
                data-mdb-target="#profile0"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                View Client List
              </button>
            </li>
          </ul>
          {/* Tabs navs  */}

          {/* Tabs content  */}
          <div class="tab-content" id="myTabContent0">
            <div
              className="tab-pane fade show active"
              id="home0"
              role="tabpanel"
              aria-labelledby="home-tab0"
            >
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
            <div
              class="tab-pane fade"
              id="profile0"
              role="tabpanel"
              aria-labelledby="profile-tab0"
            >
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Client Name</th>
                    <th scope="col">Shop Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Number</th>
                  </tr>
                </thead>
                {
                  userData.map((e,idx)=>(
                        <Abs_ClientList
                        key={idx}
                        id={e.id}
                        clientName={e.clientName}
                        number={e.number}
                        address={e.address}
                        shop={e.shop}
                        
                        />
                        ))
                }
              </table>
            </div>
          </div>
          {/* Tabs content  */}
        </div>
      </section>
    </>
  );
};
export default AddClient;

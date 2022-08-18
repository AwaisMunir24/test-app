import React, { Component, useState } from "react";
import "./PriceList.css";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import Abs_PriceList from "../../AbstractComponent/Abs_PriceList/Abs_PriceList";
const PriceList = () => {
  const [list, setList] = useState([
    {
      id: "1",
      name: "HYBRID ",
      disp: "Fully Synthatic",
      varient: "Api Sp",
      grade: "0W-16",
      pack: "1-liter",
      liter_Kg: "2070",
      rateprice: "2070",
      rate_ctn: "24840",
    },
  ]);
  const [ref, setRef] = useState("1");
  return (
    <>
      <section className="pircesection">
        {/* price list heading section starts here */}
        <div className="first-pricelist-section">
          <div className="container">
            <div className="row heading-row sales-section justify-content-center">
              <div className="col-lg-12 text-center ">
                <Abs_Heading heading="Price List" />
                <p> REF # {ref}</p>
              </div>
            </div>
            {/* <!-- Tabs navs --> */}
            <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active"
                  id="ex1-tab-1"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-1"
                  role="tab"
                  aria-controls="ex1-tabs-1"
                  aria-selected="true"
                >
                  Price List 1
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="ex1-tab-2"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-2"
                  role="tab"
                  aria-controls="ex1-tabs-2"
                  aria-selected="false"
                >
                  Price List 2
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link"
                  id="ex1-tab-3"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-3"
                  role="tab"
                  aria-controls="ex1-tabs-3"
                  aria-selected="false"
                >
                  Price List 3
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
                     <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Description</th>
                      <th scope="col">Grade</th>
                      <th scope="col">Pack</th>
                      <th scope="col">Rate LTR/KG Rs</th>
                      <th scope="col">Rate Price (Rs.)</th>
                      <th scope="col">Rate/ CTn (Rs.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* price list renders here */}
                  
                    {/* price list rendering ends here */}


                   
                  </tbody>
                </table>
              </div>
              <div
                class="tab-pane fade"
                id="ex1-tabs-2"
                role="tabpanel"
                aria-labelledby="ex1-tab-2"
              >
                    <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Description</th>
                      <th scope="col">Grade</th>
                      <th scope="col">Pack</th>
                      <th scope="col">Rate LTR/KG Rs</th>
                      <th scope="col">Rate Price (Rs.)</th>
                      <th scope="col">Rate/ CTn (Rs.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* price list renders here */}
                    {list.map((e, idx) => (
                      <Abs_PriceList
                        key={idx}
                        id={e.id}
                        name={e.name}
                        disp={e.disp}
                        varient={e.varient}
                        grade={e.grade}
                        pack={e.pack}
                        liter_Kg={e.liter_Kg}
                        rateprice={e.rateprice}
                        rate_ctn={e.rate_ctn}
                      />
                    ))}
                    {/* price list rendering ends here */}


                   
                  </tbody>
                </table>
              </div>
              <div
                class="tab-pane fade"
                id="ex1-tabs-3"
                role="tabpanel"
                aria-labelledby="ex1-tab-3"
              >
                   <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Description</th>
                      <th scope="col">Grade</th>
                      <th scope="col">Pack</th>
                      <th scope="col">Rate LTR/KG Rs</th>
                      <th scope="col">Rate Price (Rs.)</th>
                      <th scope="col">Rate/ CTn (Rs.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* price list renders here */}
                    {list.map((e, idx) => (
                      <Abs_PriceList
                        key={idx}
                        id={e.id}
                        name={e.name}
                        disp={e.disp}
                        varient={e.varient}
                        grade={e.grade}
                        pack={e.pack}
                        liter_Kg={e.liter_Kg}
                        rateprice={e.rateprice}
                        rate_ctn={e.rate_ctn}
                      />
                    ))}
                    {/* price list rendering ends here */}


                   
                  </tbody>
                </table>
              </div>
            </div>
            {/* <!-- Tabs content --> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default PriceList;

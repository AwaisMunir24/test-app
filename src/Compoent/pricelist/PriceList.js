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
      <section>
        {/* price list heading section starts here */}
        <div className="first-pricelist-section">
          <div className="container">
            <div className="row heading-row sales-section justify-content-center">
              <div className="col-lg-12 text-center ">
                <Abs_Heading heading="Price List" />
                <p> REF # {ref}</p>
              </div>
            </div>
          </div>
        </div>
        {/* price list heading section ends here */}

        <div className="second-pricelist-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
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

                    {/* price list renders end here */}
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
export default PriceList;

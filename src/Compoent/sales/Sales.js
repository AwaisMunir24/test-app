import React, { Component } from "react";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import "./Sales.css";
const Sales = () => {
  return (
    <>
      <section className="">
        <div className="first-sales-section">
        <div className="container">
          <div className="row heading-row sales-section justify-content-center">
            <div className="col-lg-12 text-center ">
              <Abs_Heading heading="Sales" />
            </div>
           
          </div>
          <div className="row sales-section ">
                <div className="col-lg-12 ">
                <div className="d-flex justify-content-center">
               
               <p><span>From :</span><Abs_Input type="date"/></p>
               <p className="px-2"><span>To :</span><Abs_Input type="date"/></p>
           </div>
                </div>
          </div>
         
        </div>
        </div>
        <div className="second-sale-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <table className="table w-100"> 
            <thead>
                    <tr className="text-center">
                      <th>#</th>
                      <th>Invoice Number</th>
                      <th>Date</th>
                      <th>Total  Price</th>
                      <th>Items Sold</th>
                      
                    </tr>
                  </thead>
                  </table>
            </div>
          </div>
        </div>
        </div>
      
      </section>
    </>
  );
};
export default Sales;

import React, { Component } from "react";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import "./Expenses.css";
const Expenses = () => {
  return (
    <>
      <section className="">
        <div className="first-expense-section">
          <div className="container">
            <div className="row heading-row sales-section justify-content-center">
              <div className="col-lg-12 text-center ">
                <Abs_Heading heading="Expense" />
              </div>
            </div>
            <div className="row sales-section ">
              <div className="col-lg-12 ">
                <div className="d-flex justify-content-center">
                  <p>
                    <span>From :</span>
                    <Abs_Input type="date" />
                  </p>
                  <p className="px-2">
                    <span>To :</span>
                    <Abs_Input type="date" />
                  </p>
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
                      <th>Date</th>
                      <th>Discription</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-center">
                      <td>1</td>
                      <td>10.10.2022</td>
                      <td>
                        <input />
                      </td>
                      <td>100/-</td>
                    </tr>
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
export default Expenses;

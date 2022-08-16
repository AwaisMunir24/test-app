import React, { Component, useState } from "react";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";
import "./Expenses.css";
const Expenses = () => {
  const [expenseDetail, setExpenseDetail] = useState();
  const [edit, save] = useState(true);
  const editsave = () => {
    // updateValue({ ...item, value: parseInt(updatecount) });
    save(!edit)
}
const [amount,setAmount]=useState();
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
            {/* <div className="row sales-section ">
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
            </div> */}
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
                      <td>
                        <Abs_Input type="date" />
                      </td>
                      <td>
                        {edit? <input
                          className="w-75"
                          type="text"
                          placeholder="Enter Detail"
                          value={expenseDetail}
                          onChange={(e) => setExpenseDetail(e.target.value)}
                        />:<div className="w-75 expensesvaluesd">{expenseDetail}</div>}
                       
                      </td>
                      <td className="">
                        {
                          edit? <Abs_Input
                          type="number"
                          placeholder="Enter the Amount"
                          val={amount}
                          changeFunc={(e)=>setAmount(e.target.value)}
                        />:<span>{amount}</span>
                        }
                       
                      </td>
                      <td>
                      <Abs_Button title={edit ? "Save" : "Edit"} events={()=>editsave()}/>
                      </td>
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

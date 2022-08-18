import React, { Component, useState, useEffect } from "react";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";
import "./Expenses.css";
import Abs_Expenselist from "../../AbstractComponent/Abs_Expenselist/Abs_Expenselist";
const Expenses = () => {
  function getExpense() {
    const item = localStorage.getItem("expense");

    if (item) {
      return JSON.parse(localStorage.getItem("expense"));
    } else {
      return [];
    }
  }
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseDetail, setExpenseDetail] = useState("");
  const [expDate, setExpDate] = useState("");
  const [amount, setAmount] = useState("");
  const [expense, setExpense] = useState(getExpense());
  const handleExpense = (e) => {
    const newExpense = [
      ...expense,
      {
        id: expense.length + 1,
        expDate,
        expenseTitle,
        amount,
        expenseDetail,
      },
    ];
    setExpense(newExpense);
    setExpDate("");
    setExpenseTitle("");
    setExpenseDetail("");
    setAmount("");
  };
  useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(expense));
  }, [expense]);
  return (
    <>
      <section className="expneses">
        <div className="first-expense-section">
          <div className="container">
            <div className="row heading-row sales-section justify-content-center">
              <div className="col-lg-12 text-center ">
                <Abs_Heading heading="Expense" />
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
                  Add Expense
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
                  View Expense List
                </a>
              </li>
            </ul>
            {/* <!-- Tabs navs --> */}
            <div class="tab-content" id="ex1-content">
              <div
                class="tab-pane fade show active"
                id="ex1-tabs-1"
                role="tabpanel"
                aria-labelledby="ex1-tab-1"
              >
                <div className="row justify-content-center text-end">
                  <div className="col-lg-3">
                    <span>Date</span>
                    <Abs_Input
                      val={expDate}
                      changeFunc={(e) => setExpDate(e.target.value)}
                      type="date"
                      placeholder="Enter the Task Title"
                      classN="w-75 mb-2 "
                    />
                  </div>
                </div>
                <div className="row ">
                  <div className="col-lg-12">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <Abs_Input
                        type="text"
                        placeholder="Enter the Expense Heading"
                        classN="w-50 mb-2 form-control"
                        val={expenseTitle}
                        changeFunc={(e) => setExpenseTitle(e.target.value)}
                      />
                      <Abs_Input
                        type="number"
                        placeholder="Enter Amount"
                        classN="w-50 mb-2 form-control"
                        val={amount}
                        changeFunc={(e) => setAmount(e.target.value)}
                      />
                      <textarea
                        className="form-control mb-4 w-50"
                        rows="4"
                        placeholder="Enter the Expense Detail"
                        value={expenseDetail}
                        onChange={(e) => setExpenseDetail(e.target.value)}
                      ></textarea>
                      <Abs_Button title="Add Expense" events={handleExpense} />
                    </div>
                  </div>
                </div>
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
                      <th scope="col">Date</th>
                      <th scope="col">Title</th>
                      <th scope="col">Amount</th>
                      <th scope="col">ExpenseDetail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expense.map((e, idx) => (
                      <Abs_Expenselist
                        key={idx}
                        id={e.id}
                        expDate={e.expDate}
                        expenseTitle={e.expenseTitle}
                        amount={e.amount}
                        expenseDetail={e.expenseDetail}
                        pressDlt={() => {
                          setExpense(
                            expense.filter((ele) => ele.id !== e.id)
                          );
                        }}
                      />
                    ))}
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

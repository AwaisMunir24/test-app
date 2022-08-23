import React, { Component, useState } from "react";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import { LS_EXPENSE_DATA } from "../../redux/consts";
import { lsGetItem } from "../../utils/helpers";
const ExpenseForm = ({ updateExpense }) => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseDetail, setExpenseDetail] = useState("");
  const [expDate, setExpDate] = useState("");
  const [amount, setAmount] = useState("");
  const [expense, setExpense] = useState(lsGetItem(LS_EXPENSE_DATA));
  const [message, setMessage] = useState(false);

  const onSubmitExpenseHandler = (e) => {
    e.preventDefault();

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

    if (
      expDate == "" ||
      expenseTitle == "" ||
      amount == "" ||
      expenseDetail == ""
    ) {
      setMessage(true);
    } else {
      setMessage(false);

      updateExpense(newExpense);
      setExpDate("");
      setExpenseTitle("");
      setExpenseDetail("");
      setAmount("");
    }

    // updateCompany(newComp);
  };

  return (
    <>
      <form onSubmit={onSubmitExpenseHandler}>
        <div className="row justify-content-center text-end">
          <div className="col-lg-3 mb-3">
            <div className="expss_date">
              <span>Date</span>
              <Abs_Input
                val={expDate}
                changeFunc={(e) => setExpDate(e.target.value)}
                type="date"
                placeholder="Enter the Task Title"
                classN="w-75 mb-2 "
              />
              {message && !expDate && (
                <p className="m-0 Data exp_Error_msg">Please Enter Date</p>
              )}
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-12">
            <div className="d-flex flex-column justify-content-center align-items-center exp_detail_error_section">
              <Abs_Input
                type="text"
                placeholder="Enter the Expense Heading"
                classN="w-50 mb-2 form-control"
                val={expenseTitle}
                changeFunc={(e) => setExpenseTitle(e.target.value)}
              />
              {message && !expenseTitle && (
                <p className="m-0 Data exp_Error_msg2">
                  Please Enter Expense Heading
                </p>
              )}

              <Abs_Input
                type="number"
                placeholder="Enter Amount"
                classN="w-50 mb-2 form-control"
                val={amount}
                changeFunc={(e) => setAmount(e.target.value)}
              />
              {message && !amount && (
                <p className="m-0 Data exp_Error_msg3">Please Expense Date</p>
              )}

              <textarea
                className="form-control mb-4 w-50"
                rows="4"
                placeholder="Enter the Expense Detail"
                value={expenseDetail}
                onChange={(e) => setExpenseDetail(e.target.value)}
              ></textarea>
              {message && !expenseDetail && (
                <p className="m-0 Data exp_Error_msg4">
                  Please Enter Expense Detail
                </p>
              )}

              <Abs_Button title="Add Expense" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default ExpenseForm;

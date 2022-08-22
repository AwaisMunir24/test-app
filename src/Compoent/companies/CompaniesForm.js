import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import { LS_COMPANY_DATA } from "../../redux/consts";
import { lsGetItem, lsSetItem } from "../../utils/helpers";
const CompaniesForm = ({updateCompany}) => {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");
  const [compDetail, setCompDetail] = useState(lsGetItem(LS_COMPANY_DATA));


  useEffect(() => {
    lsSetItem(LS_COMPANY_DATA,compDetail);
   }, [compDetail]);
   
  const handleCompany = () => {
    const newComp = [
      ...compDetail,
      {
        id: compDetail.length + 1,
        date,
        name,
        detail,
      },
    ];
   
    setName("");
    setDetail("");
    setDate("");

    updateCompany(newComp);
  };

  return (
    <>
      <div className="row justify-content-center text-end">
        <div className="col-lg-3 text-start d-flex">
          <span>Date: </span>
          <Abs_Input
            val={date}
            changeFunc={(e) => setDate(e.target.value)}
            type="date"
            placeholder="Enter the Task Title"
            classN="w-75 mb-2"
          />
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <Abs_Input
                type="text"
                classN="w-50 mb-3 form-control"
                placeholder="Enter the Company Name"
                val={name}
                changeFunc={(e) => setName(e.target.value)}
              />
              <textarea
                className="form-control mb-4 w-50"
                rows="4"
                placeholder="Enter the Company Discription"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
              ></textarea>
              <Link to=''>

              <Abs_Button title="Save" events={handleCompany} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CompaniesForm;

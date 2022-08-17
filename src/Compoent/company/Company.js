import React, { useState, useEffect } from "react";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";
import Abs_CompList from "../../AbstractComponent/Abs_CompList/Abs_CompList";
import "./Company/Company.css";
const Company = () => {
  function getItems() {
    const item = localStorage.getItem("compDetail");

    if (item) {
      return JSON.parse(localStorage.getItem("compDetail"));
    } else {
      return [];
    }
  }
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState("");
  const [compDetail, setCompDetail] = useState(getItems());
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
    setCompDetail(newComp);
  };
  useEffect(() => {
    localStorage.setItem("compDetail", JSON.stringify(compDetail));
  }, [compDetail]);
  function _getData() {
    return compDetail;
  }
  return (
    <>
      <section className="company-section">
        <div className="container">
          <div className="row heading-row">
            <div className="col-lg-12 text-center mb-4">
              <Abs_Heading heading="Company" />
            </div>

            {/* tabs navs starts here */}
            <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="ex1-tab-1"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-1"
                  role="tab"
                  aria-controls="ex1-tabs-1"
                  aria-selected="true"
                >
                  Add Company
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="ex1-tab-2"
                  data-mdb-toggle="tab"
                  href="#ex1-tabs-2"
                  role="tab"
                  aria-controls="ex1-tabs-2"
                  aria-selected="false"
                >
                  View Comapny List
                </a>
              </li>
            </ul>
            {/* tabs navs ends here */}

            {/* tabs contents starts here */}
            <div class="tab-content" id="ex1-content">
              <div
                class="tab-pane fade show active"
                id="ex1-tabs-1"
                role="tabpanel"
                aria-labelledby="ex1-tab-1"
              >
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
                        <Abs_Button title="Save" events={handleCompany} />
                      </div>
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
                      <th scope="col">Company Name</th>
                      <th scope="col">Discription</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compDetail.map((e, idx) => (
                      <Abs_CompList
                        key={idx}
                        id={e.id}
                        date={e.date}
                        name={e.name}
                        detail={e.detail}
                        pressDlt={() => {
                          setCompDetail(
                            compDetail.filter((ele) => ele.id !== e.id)
                          );
                        }}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* tabs cpontent ends here */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Company;

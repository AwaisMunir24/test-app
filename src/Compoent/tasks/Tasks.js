import React, { useEffect, useState } from "react";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";
import Abs_TaskList from "../../AbstractComponent/Abs_TaskList/Abs_TaskList";
import "./Tasks.css";
const Tasks = () => {
  function getItems() {
    const item = localStorage.getItem("list");

    if (item) {
      return JSON.parse(localStorage.getItem("list"));
    } else {
      return [];
    }
  }

  const [task, setTask] = useState("");
  const [detail, setDetail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endtDate, setEndDate] = useState("");
  const [list, setList] = useState(getItems());
  console.log("==>", list);
  const handleTask = (e) => {
    const newList = [
      ...list,
      {
        id: list.length + 1,
        startDate,
        task,
        detail,
        endtDate,
      },
    ];
    setList(newList);
    setTask("");
    setDetail("");
    setStartDate("");
    setEndDate("");
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <>
      <section className="task-section">
        <div className="container">
          <div className="row heading-row">
            <div className="col-lg-12 text-center mb-4">
              <Abs_Heading heading="Task" />
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
                  Add Task
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
                  View Task
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
                <div className="row justify-content-center text-end">
                  <div className="col-lg-3">
                    <span>To </span>
                    <Abs_Input
                      val={startDate}
                      changeFunc={(e)=>setStartDate(e.target.value)}
                      type="date"
                      placeholder="Enter the Task Title"
                      classN="w-75 mb-2 "
                    />
                  </div>
                  <div className="col-lg-3 text-start">
                    <span>From </span>
                    <Abs_Input
                      val={endtDate}
                      changeFunc={(e)=>setEndDate(e.target.value)}
                      type="date"
                      placeholder="Enter the Task Title"
                      classN="w-75 mb-2"
                    />
                  </div>
                </div>
                <div className="row ">
                  <div className="col-lg-12">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <Abs_Input
                        type="text"
                        placeholder="Enter the Task Title"
                        classN="w-50 mb-2 form-control"
                        val={task}
                        changeFunc={(e) => setTask(e.target.value)}
                      />
                      <textarea
                        className="form-control mb-4 w-50"
                        rows="4"
                        placeholder="Enter the Detail"
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                      ></textarea>
                      <Abs_Button title="Add Task" events={handleTask} />
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
                      <th scope="col">Start Date</th>
                      <th scope="col">Title</th>
                      <th scope="col">TitleDetail</th>
                      <th scope="col">End Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    list.map((e,idx)=>(
                      <Abs_TaskList
                      key={idx}
                      id={e.id}
                      startDate={e.startDate}
                      task={e.task}
                      detail={e.detail}
                      endtDate={e.endtDate}
                      pressDlt={() => {
                        setList(
                          list.filter((ele) => ele.id !== e.id)
                        );
                      }}
                      />

                    ))
                    }
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
export default Tasks;

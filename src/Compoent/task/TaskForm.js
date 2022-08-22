import React, { Component, useEffect, useState } from "react";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import { LS_TASK_DATA } from "../../redux/consts";
import { lsGetItem, lsSetItem } from "../../utils/helpers";
const TaskForm = ({ updateTask }) => {
  const [task, setTask] = useState("");
  const [detail, setDetail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endtDate, setEndDate] = useState("");
  const [list, setList] = useState(lsGetItem(LS_TASK_DATA));

  useEffect(() => {
    lsSetItem(LS_TASK_DATA, list);
  }, [list]);


  const handleTask = (e) => {
    const newList = [
      ...list,
      {
        id:list.length + 1,
        startDate,
        task,
        detail,
        endtDate,
      },
    ];
    setTask("");
    setDetail("");
    setStartDate("");
    setEndDate("");

    updateTask(newList);


  };
 

  return (
    <>
  
      <div className="row justify-content-center text-end">
        <div className="col-lg-3">
          <span>To </span>
          <Abs_Input
            val={startDate}
            changeFunc={(e) => setStartDate(e.target.value)}
            type="date"
            placeholder="Enter the Task Title"
            classN="w-75 mb-2 "
          />
        </div>
        <div className="col-lg-3 text-start">
          <span>From </span>
          <Abs_Input
            val={endtDate}
            changeFunc={(e) => setEndDate(e.target.value)}
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
     
    </>
  );
};
export default TaskForm;

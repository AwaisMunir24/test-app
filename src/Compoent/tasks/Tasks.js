import React, { useEffect, useState } from "react";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";
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



  const[task,setTask]=useState('');
  const[detail,setDetail]=useState('');
  const [list,setList]=useState(getItems());
  console.log("==>",list);
  const handleTask=(e)=>{
    const newList=[
      ...list,
      {
        id:list.length+1,
        task,
        detail
      }
    ];
    setList(newList);
    
    
  }
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
            <div className="row justify-content-center text-end">
              <div className="col-lg-3">
                <span>To </span>
              <Abs_Input
                  type="date"
                  placeholder="Enter the Task Title"
                  classN="w-75 mb-2 "

                 
                  />
              </div>
              <div className="col-lg-3 text-start">
                <span>From </span>
              <Abs_Input
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
                  changeFunc={(e)=>setTask(e.target.value)}
                  />
                  <textarea className="form-control mb-4 w-50 "  rows="4" placeholder="Enter the Detail" value={detail} onChange={(e)=>setDetail(e.target.value)}></textarea>
                  <Abs_Button
                  title="Add Task"
                  events={handleTask}
                  
                  />
                  </div>
                </div>
            </div>
          <div>{list.map((e,idx)=>(
            <div>
              {e.task}
              {e.detail}
            </div>
          ))}</div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Tasks;

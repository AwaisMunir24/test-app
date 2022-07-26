import React, { Component } from "react";
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import Abs_Input from "../../AbstractComponent/Abs_input/Abs_input";
import Abs_Button from "../../AbstractComponent/Abs_Button/Abs_Button";
import "./Tasks.css";
const Tasks = () => {
  return (
    <>
      <section className="task-section">
        <div className="container">
          <div className="row heading-row">
            <div className="col-lg-12 text-center mb-4">
              <Abs_Heading heading="Task" />
            </div>
            <div className="row">
                <div className="col-lg-12">
                  <div className=""> 
                
                  <Abs_Input
                  type="text"
                  placeholder="Enter the Task Title"
                  classN="w-100 mb-2"
                  />
                  <textarea className="form-control mb-4"  rows="4" placeholder="Enter the Detail"></textarea>
                  <Abs_Button
                  title="Add Task"
                  />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Tasks;

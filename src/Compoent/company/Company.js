import React, { Component } from 'react';
import Abs_Heading from '../../AbstractComponent/Abs_Heading/Abs_Heading';
import Abs_Input from '../../AbstractComponent/Abs_input/Abs_input';
import Abs_Button from '../../AbstractComponent/Abs_Button/Abs_Button';
// import './Company.css';
const Company=()=>{
    return(

        <>
        <section className="task-section">
        <div className="container">
          <div className="row heading-row">
            <div className="col-lg-12 text-center mb-4">
              <Abs_Heading heading="Company" />
            </div>
        
          </div>
          <div className='row'>
                <div className='col-lg-12'>
                    <div>
                        <Abs_Input 
                        type="text"
                        classN="w-100 mb-3"
                        placeholder="Enter the Company Name"
                        />
                         <textarea className="form-control mb-4"  rows="4" placeholder="Enter the Company Discription"></textarea>
                            <Abs_Button
                            title="Save"
                            />
                    </div>
                </div>
          </div>
        </div>
      </section>
        </>

    )
}
export default Company
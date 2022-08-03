import React, { Component, useState } from 'react';
import './Payments.css';
import Abs_Heading from "../../AbstractComponent/Abs_Heading/Abs_Heading";
import Abs_Input from '../../AbstractComponent/Abs_input/Abs_input';
import { BANK,CASH } from '../../redux/consts';
import Abs_Button from '../../AbstractComponent/Abs_Button/Abs_Button';

const Payments=()=>{

    const[payType,setPayType]=useState(BANK);
    const[bank,setBank]=useState(false);
    const handlePayment=(type)=>{
        setPayType(type);
        setBank(!bank)

    }
    return(
        <>
        <section className="payment-section">
        <div className="container">
          <div className="row heading-row">
            <div className="col-lg-12 text-center mb-4">
              <Abs_Heading heading="Payment" />
            </div>
            <div className='row justify-content-center' >
            <div className='col-lg-6'>
                <Abs_Input 
                classN="form-control w-100"
                placeholder="Search Client"

                />
            </div>
          </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
                <div className='d-flex align-items-center'>
                <label className='mb-0'>Name:</label>    
                <p className='ml-3 mb-0'>ABC User</p>
                </div>
                <div className='d-flex align-items-center mt-4' >
                <label className='mb-0'>Shop:</label>    
                <p className='ml-3 mb-0'>Makkah Lubricants</p>
                </div>
            </div>
            <div className='col-lg-6'>
            <div className='d-flex align-items-center'>
                <label className='mb-0'>phone Number:</label>    
                <p className='ml-3 mb-0'>0300-000000</p>
                </div>
                <div className='d-flex align-items-center mt-4' >
                <label className='mb-0'>Receivables:</label>    
                <p className='ml-3 mb-0'>00000</p>
                </div>
            </div>
          </div>
          <div className='row  mt-4'>
            <div className='col-lg-6'>
                <div>
            <label>Payments</label>
            <div className="dropdown">
                    <button
                      className="btn drop-btn dropdown-toggle w-100"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <p className="m-0">
                        {" "}
                        Select Payment Mode {`${payType}`}{" "}
                      </p>
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handlePayment(CASH)}
                      >
                        {CASH}
                      </a>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => handlePayment(BANK)}
                      >
                        {BANK}
                      </a>
                    </div>
                  </div>
            </div>
            </div>
               
          </div>
          <div className='row mt-3'>
               <div className='col-lg-6'>
                <textarea rows={4} className="w-100" placeholder='Please Enter the Detail Of Payment'> </textarea>
                </div> 
                <div>
                    <Abs_Button 
                    title="Save Data"
                    />
                </div>
          </div>

         
        </div>
      </section>
        </>
    )
}
export default Payments
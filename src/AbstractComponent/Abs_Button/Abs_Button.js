import React, { Component } from 'react';
import './Abs_Button.css';

const Abs_Button=(props)=>{
const {title,events,changeValue}=props;
    return(

        <>
        <div className='btn_add'>
                <button onClick={events} onChange={changeValue}> {title}</button>
        </div>
        </>


    )


}
export default Abs_Button
import React, { Component } from 'react';
const Abs_Expenselist=(props)=>{
    const{id,expDate,expenseTitle,amount,expenseDetail,pressDlt}=props;
    return(
        <>
        <tr>
            <td>{id}</td>
            <td>{expDate}</td>
            <td>{expenseTitle}</td>
            <td>{amount}</td>
            <td>{expenseDetail}</td>
            <td><i className="fa-solid fa-circle-minus" onClick={pressDlt}></i></td>
        </tr>
        </>
    )

}
export default Abs_Expenselist
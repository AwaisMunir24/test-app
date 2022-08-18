import React, { Component } from "react";
const Abs_Productlist = (props) => {
    const {id,ProductName,itemCategory,price,qty,carton,company,fixedValue,pressDlt}=props;
  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>{ProductName}</td>
        <td>{itemCategory}</td>
        <td>{price}</td>
        <td>{qty}</td>
        <td>{carton}</td>
        <td>{fixedValue}</td>
        <td>{company}</td>
        <td><i className="fa-solid fa-circle-minus" onClick={pressDlt}></i></td>
      </tr>
    </>
  );
};
export default Abs_Productlist;

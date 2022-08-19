import React, { Component, useState } from "react";
import Abs_Input from "../Abs_input/Abs_input";
const Abs_ReturnSale = (props) => {
  const { id, itemCode, quantity, rate, amount, pressDlt, checked , returnSale, setChecked,setListReturn,listReturn} = props;

  const [againCheck, setAgainCheck]= useState(checked);
  

  const markcheck = (id) => {
     const abc =  returnSale.find((element)=> element.id == id);
    //    console.log(abc.id)
    const alfa= [...listReturn,abc]
    setListReturn(alfa);
    console.log(alfa);
    if(abc.id == id) {
        setAgainCheck(!againCheck)
    }
};

    

  return (
    <>
      <tr>
        <td>
          { againCheck? (
            <i className="fa-solid fa-minus" onClick={() => markcheck(id)}></i>
          ) : (
            <i className="fa-solid fa-check" onClick={() => markcheck(id)}></i>
          )}{" "}
          {id}
        </td>
        <td>
          <Abs_Input val={itemCode} />
        </td>
        <td>
          <Abs_Input val={quantity} />
        </td>
        <td>
          <Abs_Input val={rate} />
        </td>
        <td>
          <Abs_Input val={amount} />
        </td>
        {/* <td>
          <i className="fa-solid fa-circle-minus " onClick={pressDlt}></i>
          <i className="fa-solid fa-plus"></i>
        </td> */}
      </tr>
    </>
  );
};
export default Abs_ReturnSale;

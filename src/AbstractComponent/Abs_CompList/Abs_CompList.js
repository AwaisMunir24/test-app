import React, { Component } from 'react';
const Abs_CompList=(props)=>{
    const{id,date,name,detail,pressDlt}=props;

return(

<> 
 
    <tr>
      <th scope="row">{id}</th>
      <td>{date}</td>
      <td>{name}</td>
      <td>{detail}</td>
      <td><i className="fa-solid fa-circle-minus" onClick={pressDlt}></i></td>
    </tr>
   

</>

)


}
export default Abs_CompList
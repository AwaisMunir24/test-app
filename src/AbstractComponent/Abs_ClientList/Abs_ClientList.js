import React, { Component } from "react";
const Abs_ClientList = (props) => {
  const { id, clientName, number, address, shop } = props;

  return (
    <>
      <tbody>
        <tr>
          <th scope="row">{id}</th>
          <td>{clientName}</td>
          <td>{number}</td>
          <td>{address}</td>
          <td>{shop}</td>
        </tr>
      </tbody>
    </>
  );
};
export default Abs_ClientList;

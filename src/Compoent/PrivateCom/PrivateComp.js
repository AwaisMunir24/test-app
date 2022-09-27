import React, { Component, useEffect } from 'react';
import { useNavigate,Outlet } from 'react-router-dom';
const PrivateComp=(props)=>{
    const {Component}=props;
    const navigate=useNavigate();
    useEffect(()=>{
    let login =localStorage.getItem('login');
        if(!login){
            navigate('/login')
        }
    },[]);
    return (
        <>
        <Component/>
        </>
    )
}
export default PrivateComp;
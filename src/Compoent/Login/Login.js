import React, { useState } from "react";
import "./Login.css";
import lubioil from "../../Assestes/photos/lubioil.png";
import logo from '../../Assestes/photos/lubi.jpg'

const Login = () => {
  return (
    <>
      <section className="login-bg ">
        <div className="container-fluid">
          <div className="row login-row">
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <img src={lubioil} alt="image" className="img-fluid" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center flex-column mb-4">
               <div className="d-flex form-log align-items-center">
                <img src={logo} />
                <h2>Lubricants</h2>
               </div>
              <form>
                <div className="form-outline mb-4">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control form-control-lg" required placeholder="User Name"  autoFocus/>
                </div>
                <div className="form-outline mb-4">
                <label className="form-label">Password</label>
                  <input className="form-control form-control-lg" type="password" required placeholder="Password"/>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                     

                      
                    />
                    <label className="form-check-label" >
                      {" "}
                      Remember Me{" "}
                    </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block btn-dark w-100 " onClick={(e)=>e.preventDefault()} >Sign in</button>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;

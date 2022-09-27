import "./App.css";
import MainFile from "./Compoent/MainFile/MainFile";
import Header from "./Compoent/Header/Header";
import Footer from "./Compoent/Footer/Footre";
import SidebarMenu from "./Compoent/MenuSideBar/MenuSidebar";
import { useState } from "react";

function App() {

  let login =localStorage.getItem('login');
  const [isLoged,setisLoged]=useState(login);
  
  return (
    <>
      <Header />
      <div className="content">
       
        {/* {adminList().length >= 1 ? <SidebarMenu /> : ""} */}
        {isLoged ? <SidebarMenu /> : ""}

        <MainFile />
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default App;

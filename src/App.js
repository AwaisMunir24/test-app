import "./App.css";
import MainFile from "./Compoent/MainFile/MainFile";
import Header from "./Compoent/Header/Header";
import Footer from "./Compoent/Footer/Footre";
import SidebarMenu from "./Compoent/MenuSideBar/MenuSidebar";

function App() {

  function adminList(){
    let items =JSON.parse (localStorage.getItem('admin'));
    if (items) {
       return JSON.parse (localStorage.getItem('admin'));
       }
       else{
        return []
       }
  }
  return (
    <>
    <Header/>
      <div className="content">
        {
         
              adminList().length>=1 ?<SidebarMenu/>:''
          
        }
      <MainFile />
      </div>
      <Footer/>
    </>
  );
}

export default App;

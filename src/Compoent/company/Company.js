import React, { useState ,useEffect} from 'react';
import Abs_Heading from '../../AbstractComponent/Abs_Heading/Abs_Heading';
import Abs_Input from '../../AbstractComponent/Abs_input/Abs_input';
import Abs_Button from '../../AbstractComponent/Abs_Button/Abs_Button';
// import './Company.css';
const Company=()=>{
  function getItems() {
    const item = localStorage.getItem("compDetail");

    if (item) {
      return JSON.parse(localStorage.getItem("compDetail"));
    } else {
      return [];
    }
  }
  const[name,setName]=useState('');
  const[detail,setDetail]=useState('');
   const [compDetail,setCompDetail]=useState(getItems());
  const handleCompany =()=>{
    const newComp=[
      ...compDetail,
      {
        id:compDetail.length+1,
        name,
        detail
      }
    ];
    setCompDetail(newComp);

  }
  useEffect(() => {
    localStorage.setItem("compDetail", JSON.stringify(compDetail));
  }, [compDetail]);
  function _getData() {
    return compDetail;
  }
    return(

        <>
        <section className="task-section">
        <div className="container">
          <div className="row heading-row">
            <div className="col-lg-12 text-center mb-4">
              <Abs_Heading heading="Company" />
            </div>
            <div className="row justify-content-center text-end">
              <div className="col-lg-3">
                <span>To </span>
              <Abs_Input
                  type="date"
                  placeholder="Enter the Task Title"
                  classN="w-75 mb-2"
                 
                  />
              </div>
              <div className="col-lg-3 text-start">
                <span>From </span>
              <Abs_Input
                  type="date"
                  placeholder="Enter the Task Title"
                  classN="w-75 mb-2"
                 
                  />
              </div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <Abs_Input 
                        type="text"
                        classN="w-50 mb-3 form-control" 
                        placeholder="Enter the Company Name"
                        val={name}
                        changeFunc={(e)=>setName(e.target.value)}
                        />
                         <textarea className="form-control mb-4 w-50"  rows="4" placeholder="Enter the Company Discription"
                         value={detail}
                         onChange={(e)=>setDetail(e.target.value)}
                         ></textarea>
                            <Abs_Button
                            title="Save"
                            events={handleCompany}
                            />
                    </div>
                </div>
          </div>
          </div>
     
         <div>{
          compDetail.map((e,idx)=>(
            <div>
              {e.name}
              {e.detail}
            </div>
          ))
          }</div>
          
         
        </div>
      </section>
        </>

    )
}
export default Company
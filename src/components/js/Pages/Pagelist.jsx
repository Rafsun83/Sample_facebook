import React from 'react'
import { Link } from 'react-router-dom'
// import css file
import "../../css/Pages/Pagelist.css";
import HomeLeftContent from '../Home/HomeLeftContent';
import profileImg from "../../images/profile.jpg";


const Pagelist = () => {
    return (
        <div className="Pagelist_main_content">
            <div>
                <HomeLeftContent/>
            </div>
            
            <div>
            {/* <!-- middle section pages name box --> */}
    <div className=" middle-section">
        <h4 className="page-manage">
        <strong >Pages You Manage</strong></h4>
{/* first pagelist box start */}
    <div className="middle-box">
        <div id="notifytext">
         <div className="notify">
             <div className="notification">
              <span className="iconify text-muted" 
              data-icon="mdi:bell-ring"></span>
              <p className="text-muted">Notification</p>
             </div>
             <div className="message">
                 <span className="iconify text-muted" 
                 data-icon="mdi:message-processing"></span>
               <p className="text-muted">Messages</p>
             </div>
         </div>
       
        </div>

     <div className="PagesPart">
         <div className="page-name">
              <img className="img-fluid rounded page-img" 
              src={profileImg} alt=""/>
             <div className="page-designation">
                 <h5 className="pagelist_page_name">DevTech BD</h5>
               
                 <p class="text-muted pagelist_activity"><span>Software Company.</span> 
                 <span>114 likes.</span> <span>117 follows</span></p>
             
             </div>
         </div>
     </div>

 </div>
{/* first pagelist box end  */}


    {/*  second pagelist box start  */}
 <div className="middle-box">
    <div id="notifytext">
     <div className="notify">
         <div className="notification">
          <span className="iconify text-muted" 
          data-icon="mdi:bell-ring"></span>
          <p className="text-muted">Notification</p>
         </div>
         <div className="message">
             <span className="iconify text-muted" 
             data-icon="mdi:message-processing"></span>
           <p class="text-muted">Messages</p>
         </div>
     </div>
   
    </div>

 <div className="PagesPart">
     <div className="page-name">
          <img className="img-fluid rounded page-img" src={profileImg} alt=""/>
         <div className="page-designation">
            <h5 className="pagelist_page_name">DevTech BD</h5>
           
            <p className="text-muted  pagelist_activity"><span>Software Company.</span> 
            <span>114 likes.</span> <span>117 follows</span></p>
            
         </div>
     </div>
 </div>
</div>
{/* second pagelist box end */}



          
        </div>
            </div>
        </div>
    )
}

export default Pagelist

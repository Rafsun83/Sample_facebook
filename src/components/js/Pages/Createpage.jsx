import React from 'react'
import { Link } from "react-router-dom";

// export css  file 
import "../../css/Pages/Createpage.css"
import profileImg from "../../images/profile.jpg"
import HomeLeftContent from '../Home/HomeLeftContent';
import coverImg from "../../images/cover.jpg";

const Createpage = () => {
    return (
 
        <div className="Createpage-main-section">
        <div>
         <HomeLeftContent/>
        </div>
        <div className="create_page">
        {/* <!-- create group pages  --> */}
                    <div className=" GroupCreate">
                        <div className="New-page-create">
                            <div className="GroupPages ">

                                <button className="text-muted">Your pages</button>
                                <button className="text-muted">Requested</button>
                            </div>
                        </div>

                        <hr/>
                    </div>
              
        </div>

     {/* -- Modal -- */}
            <div className="popup " id="popUp">
                <div className="popup-container ">
                    <h5>Create new page</h5>
                    <hr/>
        
                    <div className="groupForm">
                        <div className="coverImage">
                            <div className="cover">
                                {/* <img src="images/pic.jpg.jpg" class="img-fluid" alt="" srcset=""> */}
                                <img src={coverImg} alt="" />
                                <span className="iconify updateCover" data-icon="mdi:camera-wireless"></span>
                            </div>
        
                            <div className="profile">
                                {/* <img className="propic" src="images/pro.jpg" alt="" srcset=""> */}
                                <img className="propic" src={coverImg} alt="" />
                                <span className="iconify updateprofile" data-icon="mdi:camera-wireless"></span>
                            </div>
        
        
        
                        </div>
                    </div>
        
                    <div className="Input_form">
        
                        <div className="input_box">
                            <input className="input_item" name="text" type="text"/>
                            <label className="form_lebel" for="">Page name </label>
                        </div>
        
        
        
                        <div className="input_box">
                            <select>
                                  <option>Option 1</option>
                                  <option>Option 2</option>
                                  <option>Option 3</option>
                                  <option>Option 4</option>
                                  <option>Option 5</option>
                                </select>
                        </div>
                        <div className="input_box">
        
                            <textarea className="input_item" name="comment" form="usrform"></textarea>
                            <label className="form_lebel" for=""> Description</label> <br/>
                        </div>
        
        
        
                    </div>
        
        
        
                    <div className="popup-close" onclick="Close()">&times;</div>
        
        
        
        
        
        
                </div>
        
            </div>
            
    {/* <!-- java script link  --> */}
{/* 
<script>
function OpenPopUp() {
        document.getElementById('popUp').classList.add('active')

    }

    function Close() {
        document.getElementById('popUp').classList.remove('active')

    }

</script>
   */}
        
        </div>
        
           
       
    )
}


export default Createpage

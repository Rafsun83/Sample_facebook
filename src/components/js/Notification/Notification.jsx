import React from 'react'
import { Link } from 'react-router-dom'
// import css file
import "../../css/Notification/Notification.css"
import profileImg from "../../images/profile.jpg";


const Notification = () => {
    return (
        <div className="main-section">
        <div className="Notification-middle">
            <div className="notify-head">
                <h4>Notification</h4>
                <span className="iconify notify-head-icon" data-icon="mdi:dots-horizontal"></span>

            </div>
            <div>
                <h5>NEW</h5>
            </div>

            <div className="notify-card" data-aos="fade-right">
                <div className="Notification-image">
                    <img src={profileImg} alt=""/>
                    <span className="iconify notify-icon" data-icon="mdi:flag-variant"></span>
                </div>
                <div className="notify-suggest">
                    <p><span class="notify-name">Nishat Naila</span> <span className="notify-activity">added a photos in </span> <span className="notify-group">Stack learn-Programming community</span></p>
                    <span className="notify__time">4 hours ago</span>
                    {/* style="margin-block-end: 0 !important;" */}
                </div>
            </div>
            <div>
                <h5>Recently</h5>
                {/* style="margin-top: 1rem;" */}
            </div>

            {/* <!-- extra notification card  --> */}
            <div className="notify-card" data-aos="fade-left">
                <div className="Notification-image">
                    <img src={profileImg} alt=""/>
                    <span className="iconify notify-icon-group" data-icon="mdi:account-group"></span>

                </div>
                <div className="notify-suggest">
                    <p ><span className="notify-name">Nishat Naila</span> <span className="notify-activity">just posted an item for sale: </span> <span> Grab yours</span></p>
                    <span className="notify__time">4 hours ago</span>
                </div>
            </div>
            <div className="notify-card" data-aos="fade-right">
                <div className="Notification-image">
                    <img src={profileImg} alt=""/>
                    <span className="iconify notify-icon-react" data-icon="mdi:heart"></span>

                </div>
                <div className="notify-suggest">
                    <p><span className="notify-name">Nishat Naila</span> <span className="notify-activity">react your comment: </span> <span>"Eta best chilo"</span></p>
                    <span className="notify__time">4 hours ago</span>
                </div>
            </div>

            {/* <!-- extra notification  --> */}
            <div className="notify-card" data-aos="fade-left">
                <div className="Notification-image">
                    <img src={profileImg} alt=""/>
                    <span className="iconify notify-icon" data-icon="mdi:flag-variant"></span>
                </div>
                <div className="notify-suggest">
                    <p><span className="notify-name">Nishat Naila</span> <span className="notify-activity">added a photos in </span> <span className="notify-group">Stack learn-Programming community</span></p>
                    <span className="notify__time">4 hours ago</span>
                </div>
            </div>
            <div className="notify-card" data-aos="fade-right">
                <div className="Notification-image">
                    <img src={profileImg} alt=""/>
                    <span className="iconify notify-icon" data-icon="mdi:flag-variant"></span>
                </div>
                <div className="notify-suggest">
                    <p><span className="notify-name">Nishat Naila</span> <span className="notify-activity">added a photos in </span> <span className="notify-group">Stack learn-Programming community</span></p>
                    <span className="notify__time">4 hours ago</span>
                </div >
            </div>
            <div className="notify-card" data-aos="fade-left">
                <div className="Notification-image">
                    <img src={profileImg} alt=""/>
                    <span className="iconify notify-icon-group" data-icon="mdi:account-group"></span>

                </div>
                <div className="notify-suggest">
                    <p><span className="notify-name">Nishat Naila</span> <span className="notify-activity">just posted an item for sale: </span> <span> Grab yours</span></p>
                    <span className="notify__time">4 hours ago</span>
                </div>
            </div>
            <div className="notify-card" data-aos="fade-right">
                <div className="Notification-image">
                    <img src={profileImg} alt=""/>
                    <span className="iconify notify-icon-react" data-icon="mdi:heart"></span>

                </div>
                <div className="notify-suggest">
                    <p><span className="notify-name">Nishat Naila</span> <span className="notify-activity">react your comment: </span> <span>"Eta best chilo"</span></p>
                    <span className="notify__time">4 hours ago</span>
                </div>
            </div>
            <div className="notify-card" data-aos="fade-left">
                <div className="Notification-image">
                    <img src={profileImg} alt=""/>
                    <span className="iconify notify-icon-group" data-icon="mdi:account-group"></span>

                </div>
                <div class="notify-suggest">
                    <p><span className="notify-name">Nishat Naila</span> <span className="notify-activity">just posted an item for sale: </span> <span> Grab yours</span></p>
                    <span className="notify__time">4 hours ago</span>
                </div>
            </div>
            <div className="notify-card" data-aos="fade-right">
                <div className="Notification-image">
                    <img src={profileImg} alt=""/>
                    <span className="iconify notify-icon-react" data-icon="mdi:heart"></span>

                </div>
                <div className="notify-suggest">
                    <p><span className="notify-name">Nishat Naila</span> <span className="notify-activity">react your comment: </span> <span>"Eta best chilo"</span></p>
                    <span className="notify__time">4 hours ago</span>
                </div>
            </div>
            <div className="notify-card" data-aos="fade-left">
                <div className="Notification-image">
                    <img src={profileImg} alt=""/>
                    <span className="iconify notify-icon-group" data-icon="mdi:account-group"></span>

                </div>
                <div className="notify-suggest">
                    <p><span className="notify-name">Nishat Naila</span> <span className="notify-activity">just posted an item for sale: </span> <span> Grab yours</span></p>
                    <span className="notify__time">4 hours ago</span>
                </div>
            </div>
            <div className="notify-card" data-aos="fade-right">
                <div className="Notification-image">
                    <img src={profileImg} alt=""/>
                    <span className="iconify notify-icon-react" data-icon="mdi:heart"></span>

                </div>
                <div className="notify-suggest">
                    <p><span className="notify-name">Nishat Naila</span> <span classNameA="notify-activity">react your comment: </span> <span>"Eta best chilo"</span></p>
                    <span className="notify__time">4 hours ago</span>
                </div>
            </div>
            <div className="notify-card" data-aos="fade-left">
                <div className="Notification-image">
                    <img src={profileImg} alt=""/>
                    <span className="iconify notify-icon-group" data-icon="mdi:account-group"></span>

                </div>
                <div className="notify-suggest">
                    <p><span className="notify-name">Nishat Naila</span> <span className="notify-activity">just posted an item for sale: </span> <span> Grab yours</span></p>
                    <span className="notify__time">4 hours ago</span>
                </div>
            </div>
            <div className="notify-card" data-aos="fade-right">
                <div className="Notification-image">
                    <img src={profileImg} alt=""/>
                    <span class="iconify notify-icon-react" data-icon="mdi:heart"></span>

                </div>
                <div className="notify-suggest">
                    <p><span className="notify-name">Nishat Naila</span> <span className="notify-activity">react your comment: </span> <span>"Eta best chilo"</span></p>
                    <span className="notify__time">4 hours ago</span>
                </div>
            </div>

        </div>
     
    </div>
    
    )
}

export default Notification

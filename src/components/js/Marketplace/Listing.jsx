import React from 'react'
import { Link } from 'react-router-dom'

// import css file
import "../../css/Marketplace/Listing.css"; 
import HomeLeftContent from '../Home/HomeLeftContent';

const Listing = () => {
    return (
       <div className="Listing__section">
           <div>
               <HomeLeftContent/>
           </div>
            <div>
            {/* <!-- middle section  --> */}
            <div className="Listing-middle-section">
                <div className="middle-Listing">
                    {/* <!-- mobile bar  --> */}
                    <div className="like-mobile-bar">

                        <div className="mobile-bar-like-pages">
                            <span className="iconify like-icon-mobile" data-icon="mdi:flag-variant"></span>
                            <div>
                                <strong className="mobile__nav__name" >Your pages</strong>
                                {/* style="white-space: nowrap;" */}
                            </div>
                        </div>
                        <div className="mobile-bar-like-pages">
                            <span className="iconify like-icon-mobile" data-icon="mdi:account-child-circle"></span>
                            <div>
                                <strong className="mobile__nav__name">Discover</strong>
                                {/* style="white-space: nowrap;" */}
                            </div>
                        </div>
                        <div className="mobile-bar-like-pages">
                            <span className="iconify like-icon-mobile" data-icon="mdi:thumb-up"></span>
                            <div>
                                <strong className="mobile__nav__name">Like page</strong>
                                {/* style="white-space: nowrap;" */}
                            </div>
                        </div>
                    </div>
                    <div className="Listing-invites">
                        <h4><strong>Choose Listing Type</strong></h4>

                    </div>

                    {/* <!-- full card design 1 --> */}
                    <div className="Listing-sale-card">

                        <div className="Listing-Card">
                            <div className="Listing-Card-body">

                                <span className="iconify sale-icon" data-icon="mdi:point-of-sale"></span>

                                <h6>Item for sale </h6>
                                <p>Create a single listing for one or more items sale.</p>

                            </div>
                        </div>
                        <div className="Listing-Card">
                            <div className="Listing-Card-body">

                                <span className="iconify sale-icon" data-icon="mdi:point-of-sale"></span>

                                <h6>Vehicle for sale </h6>
                                <p>Create a single listing for one or more items sale.</p>

                            </div>
                        </div>
                        <div className="Listing-Card">
                            <div className="Listing-Card-body">

                                <span className="iconify sale-icon" data-icon="mdi:point-of-sale"></span>

                                <h6>Home for Sale or Rest</h6>
                                <p>Create a single listing for one or more items sale.</p>

                            </div>
                        </div>
                        <div className="Listing-Card">
                            <div className="Listing-Card-body">

                                <span className="iconify sale-icon" data-icon="mdi:point-of-sale"></span>

                                <h6>Job Opening </h6>
                                <p>Create a single listing for one or more items sale.</p>

                            </div>
                        </div>




                    </div>






                </div>


            </div>
        </div>
       </div>
    )
}

export default Listing

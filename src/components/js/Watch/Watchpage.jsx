import React from 'react'
import { Link } from 'react-router-dom'

// import css file 
import '../../css/Watch/Watch.css';
import profileImg from "../../images/profile.jpg";
import HomeLeftContent from '../Home/HomeLeftContent';
import Video from '../../Video/LiverpooII vs AС MiIIan 3−2 - Extеndеd Hіghlіghts & All Gоals 2021 HD.mp4';
import Video2nd from '../../Video/Ronaldo strikes as United hit Newcastle for four _ Highlights _ Manchester United 4-1 Newcastle.mp4';

const Watchpage = () => {
    return (
    <div className="main">
        <div className="MainSection">
            <HomeLeftContent/>
        </div>


        {/* <!-- middle section  --> */}
        <div className="Watch-middle-section">
            {/* <!-- mobile nav bar  --> */}
            <div className="Watch-mobile-bar">

                <div className="mobile-bar-Watch-pages">
                    <span className="iconify pages-icon" 
                    data-icon="mdi:flag-variant"></span>
                    <div>
                        <strong className="mobile_nav_name" >Your pages</strong>
                        {/* style="white-space: nowrap;" */}
                    </div>
                </div>
                <div className="mobile-bar-Watch-pages">
                    <span className="iconify modify-icon" 
                    data-icon="mdi:account-child-circle"></span>
                    <div>
                        <strong className="mobile_nav_name" >Discover</strong>
                        {/* style="white-space: nowrap;" */}
                    </div>
                </div>
                <div className="mobile-bar-Watch-pages">
                    <span className="iconify modify-icon" 
                    data-icon="mdi:thumb-up"></span>
                    <div>
                        <strong className="mobile_nav_name">Like page</strong>
                        {/* style="white-space: nowrap;" */}
                    </div>
                </div>

            </div>
            {/* <!-- mobile nav bar end  --> */}

            {/* <!-- middle video section card design 1 --> */}
            <div className="middle-Watch">

                {/* <!-- video card section 1 --> */}
                <div className="video-section">
                    <div className="video-content">
                        <div className="video-profile">

                        <img src={profileImg} alt=""/>

                            <div>
                                <Link className="Watch_pages_Name">
                                <h6>Family Entertainment BD . Follow</h6>
                                </Link>
                                <Link className="pages_post_time">
                                <p>4 Auguest <span className="iconify" 
                                data-icon="mdi:earth"></span> </p>
                                </Link>
                            </div>

                        </div>

                        <div className="video-copy-link">
                           <Link>
                           <span className="iconify copy-icon" 
                           data-icon="mdi:dots-horizontal"></span>
                           </Link>
                        </div>
                    </div>
                    <div class="video-describe">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quaerat.</p>
                    </div>
                    {/* <!-- video uploded here  --> */}
                    <Link>
                    <video className="page-video video-js vjs-theme-forest vjs-fluid " 
                    data-setup="{}" controls autoplay muted>
                     <source src={Video}
                    type="video/webm" />        
                    </video>
                    </Link>
                    {/* <!-- video uploaded end  --> */}

                    {/* <!-- like comment section  --> */}
                    <div class="video-react">
                        <div class="video-view">
                            <p>41K.</p>
                            <p>6.4K comments.</p>
                            <p>10M views</p>

                        </div>
                    </div>
                    <hr className="commentsection_upperline"/>
                    {/* style="margin-block-start: 0 !important;" */}
                    {/* <!-- like comment section end  --> */}

                    {/* <!--Like/ comment /share button start  --> */}
                    <div className="express-button">
                        <button className="express-button1">
                        <span className="iconify heart-icon" 
                        data-icon="mdi:comment-outline">
                        </span>COMMENT</button>
                        <button className="express-button2">
                        <span className="iconify heart-icon" 
                        data-icon="mdi:heart-outline">
                        </span>LIKE</button>
                        <button className="express-button3">
                        <span className="iconify heart-icon" 
                        data-icon="mdi:share-variant-outline">
                        </span>SHARE</button>

                    </div>
                    {/* like/comment/share button end  */}
                    <hr className="Comentsectin_underline" />
                    {/* comment box start  */}
                    <div className="comment-section">
                        <div className="comment-post-pic">
                            <img src={profileImg} alt=""/>

                        </div>
                        <textarea className="comment-input" 
                        placeholder="Write a public comment"></textarea>
                        <span className="iconify comment-icon" 
                        data-icon="mdi:emoticon-outline"></span>
                    </div>
                    {/* <!-- comment box end  --> */}
                </div>
                {/* <!-- video card section end  --> */}
            </div>

            {/* <!-- middle video section card design 2  --> */}
            <div className="middle-Watch">

                {/* <!-- video section 1 --> */}
                <div className="video-section">
                    <div className="video-content">
                        <div className="video-profile">
                            <Link>
                            <img src={profileImg} alt=""/>
                            </Link>
                            <div>
                          <Link className="Watch_pages_Name">
                          <h6>Family Entertainment BD . Follow</h6>
                          </Link>
                          <Link className="pages_post_time">
                          <p>4 Auguest <span className="iconify" 
                          data-icon="mdi:earth"></span> </p>
                          </Link>
                          </div>
                        </div>


                        <div className="video-copy-link">
                            <Link>
                            <span className="iconify copy-icon" 
                            data-icon="mdi:dots-horizontal"></span>
                            </Link>
                        </div>
                    </div>
                    <div className="video-describe">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quaerat.</p>
                    </div>
                    {/* <!-- video uploded here  --> */}
                   <Link>
                   <video className="page-video video-js vjs-theme-forest vjs-fluid " 
                    data-setup="{}" controls autoplay muted>
                    <source src={Video2nd}
                            type="video/webm" />        
                    </video>
                   </Link>
                    {/* <!-- video uploaded end  --> */}

                    {/* <!-- like comment section  --> */}
                    <div className="video-react">
                        <div className="video-view">
                            <p>41K.</p>
                            <p>6.4K comments.</p>
                            <p>10M views</p>

                        </div>
                    </div>
                    <hr  className="commentsection_upperline"/>
                    {/* style="margin-block-start: 0 !important;" */}
                    {/* <!-- like comment section end  --> */}

                    {/* <!-- comment/like/share button --> */}
                    <div className="express-button">
                        <button className="express-button1">
                        <span className="iconify heart-icon" 
                         data-icon="mdi:comment-outline">
                       </span>COMMENT</button>
                        <button className="express-button2">
                        <span className="iconify heart-icon" 
                        data-icon="mdi:heart-outline">
                        </span>LIKE</button>
                        <button className="express-button3">
                        <span className="iconify heart-icon" 
                        data-icon="mdi:share-variant-outline">
                        </span>SHARE</button>

                    </div>
                     {/* <!-- comment/like/share button --> */}
                    <hr  className="commentsection_upperline"/>
                    <div className="comment-section">
                        <div className="comment-post-pic">
                            <img src={profileImg} alt=""/>

                        </div>
                        <textarea className="comment-input" 
                        placeholder="Write a public comment"></textarea>
                        <Link>
                        <span className="iconify comment-icon" 
                        data-icon="mdi:emoticon-outline"></span>
                        </Link>
                    </div>
                    {/* <!-- comment section end  --> */}
                </div>
            </div>
        </div>


   
    </div>
   
    )
}

export default Watchpage

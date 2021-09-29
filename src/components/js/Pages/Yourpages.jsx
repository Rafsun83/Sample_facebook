import React from "react";
import { Link } from "react-router-dom";
// import css file
import "../../css/Pages/Yourpages.css";
import profileImg from "../../images/profile.jpg";
import HomeLeftContent from "../Home/HomeLeftContent";

const Yourpages = () => {
  return (
    <div className="Yourpages_main_section">
      <div>
        <HomeLeftContent />
      </div>
      <div>
        {/* <!-- middle section your pages main part start  --> */}
        <div className="Pagesmiddle">
          {/* <!-- mobile view nav bar  --> */}
          <div className="Yourpages-mobile-bar">
            {/* mobile view bar item-1 start */}
            <Link>
              <div className="mobile-bar-Your-pages">
                <span
                  className="iconify pages-icon"
                  data-icon="mdi:flag-variant"
                ></span>
                <div>
                  <strong className="mobile_nav">Your pages</strong>
                </div>
              </div>
            </Link>
            {/* mobile view bar item-1 end  */}
            {/* mobile view bar item-2 start  */}
            <Link>
              <div className="mobile-bar-Your-pages">
                <span
                  className="iconify modify-icon"
                  data-icon="mdi:account-child-circle"
                ></span>
                <div>
                  <strong className="mobile_nav">Discover</strong>
                </div>
              </div>
            </Link>
            {/* mobile view bar item-2 end  */}
            {/* mobile view bar item-3 start  */}
            <Link>
              <div className="mobile-bar-Your-pages">
                <span
                  className="iconify modify-icon"
                  data-icon="mdi:thumb-up"
                ></span>
                <div>
                  <strong className="mobile_nav">Like page</strong>
                </div>
              </div>
            </Link>
            {/* mobile view bar item-3 end  */}
          </div>
          {/* <!-- mobile view nab bar end  --> */}

          {/* <!-- yourpages middle section  --> */}
          <div className="yourpages-middle-section">
            <div className="yourpages-middle">
              <div className="yourpages-profile">
                {/* <img src="images/pro.jpg" alt="" srcset=""> */}
                <img src={profileImg} alt="" />
              </div>
              <div className="yourpages-description">
                <div className="Yourpages-Title">
                  <h3 className="group-title">DevTech BD</h3>
                  {/* profile dropdoen menu start */}
                  <div className="dropdown">
                    <button
                      className="btn more-btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      more
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <Link className="dropdown-item">
                        <li>Item 1</li>
                      </Link>
                      <Link className="dropdown-item">
                        <li>Item 2</li>
                      </Link>
                      <Link className="dropdown-item">
                        <li>Item 3</li>
                      </Link>
                    </ul>
                  </div>
                  {/* profile dropdown menu end  */}
                </div>

                {/* <!-- page like/comment option start  --> */}
                <div className="Yourpages-post">
                  <div>
                    <p>
                      {" "}
                      <span>
                        <strong>566</strong>
                      </span>{" "}
                      Posts
                    </p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      <span>
                        <strong>12.4K </strong>
                      </span>{" "}
                      Followers
                    </p>
                  </div>
                  <div>
                    <p>
                      {" "}
                      <span>
                        <strong>12K</strong>
                      </span>{" "}
                      Likes
                    </p>
                  </div>
                </div>
                {/* page like/comment option end  */}
                {/* <!-- page user details / about start --> */}
                <div className="Yourpage-history">
                  <p className="text-muted">
                    <strong>DevTech BD - Software Company</strong>
                  </p>
                  <div className="Yourpages-information">
                    <span className="iconify profile_icon"
                      data-icon="mdi:help-circle"
                    ></span>
                    <p>
                      DevTech BD is a group of skilled programmers and
                      developers. We build website, softwares, mobile Apps etc.
                    </p>
                  </div>
                  <div className="Yourpages-information">
                    <span className="iconify profile_icon"
                      data-icon="mdi:web"
                    ></span>
                    <p>Enter Website </p>
                  </div>
                  <div className="Yourpages-information">
                    <span className="iconify profile_icon"
                      data-icon="mdi:phone-plus"
                    ></span>
                    <p> 0171234675 </p>
                  </div>
                  <div className="Yourpages-information">
                    <span className="iconify  profile_icon"
                      data-icon="mdi:email"
                    ></span>
                    <p>Devtechbd@gmail.com </p>
                  </div>
                  <button className="eidit-button text-muted">
                    <span className="iconify"
                      data-icon="mdi:circle-edit-outline"
                    ></span>{" "}
                    Eidit Profile
                  </button>
                </div>
                {/* <!-- page user details about end  --> */}
              </div>
            </div>
          </div>

          {/* <!-- pagges grup photo / ad / business tools  --> */}

          <div className="Yourpages-photos-ad">
            <div className="Yourpages-album-section">
              {/* people reach start  */}
              <div>
                {/* photos album start  */}
                <div className="Yourpages-photos">
                  <div className="Yourpages-first">
                    <h4>Photos</h4>
                    <div class="album">
                      <Link>
                        <img src={profileImg} alt="" />
                      </Link>
                      <Link>
                        <img src={profileImg} alt="" />
                      </Link>
                      <Link>
                        <img src={profileImg} alt="" />
                      </Link>
                      <Link>
                        <img src={profileImg} alt="" />
                      </Link>
                      <Link>
                        <img src={profileImg} alt="" />
                      </Link>
                      <Link>
                        <img src={profileImg} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* pople start end  */}
                {/* people reach insights start  */}
                <div className="Yourpages-photos">
                  <div className="Yourpages-first">
                    <h4>Insights</h4>
                    {/* people reach card item-1 start  */}
                    <Link>
                      <div className="insights-div">
                        <div className="Insights-part">
                          <p className="text-muted">People Reached</p>
                          <h5>44</h5>
                        </div>
                      </div>
                    </Link>
                    {/* people reach card item-1 end */}
                    {/* people reach card item-2 start  */}
                    <Link>
                      <div className="insights-div">
                        <div className="Insights-part">
                          <p className="text-muted">People Reached</p>
                          <h5>44</h5>
                        </div>
                      </div>
                    </Link>
                    {/* people reacg card item-2 end  */}
                    {/* people reach card item-3 start  */}
                    <Link>
                      <div className="insights-div">
                        <div className="Insights-part">
                          <p className="text-muted">People Reached</p>
                          <h5>44</h5>
                        </div>
                      </div>
                    </Link>
                    {/* people reach card item-3 end */}
                  </div>
                </div>
                {/* people reach insights end  */}
              </div>
              {/* people reach end  */}

              <div className="Yourpages-photos">
                {/* <!-- ads create section start  --> */}
                <div className="create-Add">
                  <div className="create-add">
                    <div>
                      <h4> Create Ad</h4>
                    </div>
                    <Link>
                      <p>see all</p>
                    </Link>
                  </div>
                  <p>Would you like to grow your business?</p>
                  {/* Ads card item-1 start*/}
                  <Link>
                    <div className="row">
                      <div className="details-ad">
                        <span
                          className="iconify create-ad-icon"
                          data-icon="mdi:folder-plus-outline"
                        ></span>
                        <h4>Create new ad</h4>
                        <p>
                          making an ad using text,video or photos to promote
                          your business{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                  {/* Ads card item-1 end    */}
                  {/* Ads card item-2 start  */}
                  <Link>
                    <div className="row">
                      <div className="details-ad">
                        <span
                          className="iconify  
                                       create-ad-icon"
                          data-icon="mdi:thumb-up"
                        ></span>
                        <h4>Boost a Post</h4>
                        <p>
                          making an ad using text,video or photos to promote
                          your business{" "}
                        </p>
                      </div>
                    </div>
                  </Link>
                  {/* Ads card item-2 end  */}
                </div>
                {/* ads create section end  */}
              </div>
              {/* Business tools card item start  */}
              <div className="Yourpages-photos">
                <div className="Booked">
                  <h4>Free Reamble Business Tools</h4>
                  {/* business card item-1 start  */}
                  <Link>
                    <div className="Booking-item">
                      <div className="Booking">
                        <span
                          className="iconify booking-icon"
                          data-icon="mdi:calendar-check"
                        ></span>
                        <div>
                          <h6>Add Apointments Booking</h6>
                          {/* style="margin-block-end: 0 !important;" */}
                          <p>
                            Display your services and availibity so that people
                            can book an ...
                          </p>
                        </div>
                      </div>
                      <span
                        className="iconify next-icon"
                        data-icon="mdi:chevron-right"
                      ></span>
                    </div>
                  </Link>
                  {/* Business card item-1 end  */}
                  {/* Business card item-2 start  */}
                  <Link>
                    <div className="Booking-item">
                      <div className="Booking">
                        <span
                          className="iconify booking-icon"
                          data-icon="mdi:calendar-multiple"
                        ></span>
                        <div>
                          <h6>Host Paid Online Events</h6>
                          {/* style="margin-block-end: 0 !important;" */}
                          <p>
                            Create online events that people can pay to access.
                          </p>
                        </div>
                      </div>
                      <span
                        className="iconify next-icon"
                        data-icon="mdi:chevron-right"
                      ></span>
                    </div>
                  </Link>
                  {/* Business card item-2 end  */}
                  {/* Business card item-3 start  */}
                  <Link>
                    <div className="Booking-item">
                      <div className="Booking">
                        <span
                          className="iconify booking-icon"
                          data-icon="mdi:store-search"
                        ></span>
                        <div>
                          <h6>Post a Job</h6>
                          {/* style="margin-block-end: 0 !important;" */}
                          <p>
                            Find qualified candidate by posting job
                            opportunities with your business..
                          </p>
                        </div>
                      </div>
                      <span
                        className="iconify next-icon"
                        data-icon="mdi:chevron-right"
                      ></span>
                    </div>
                  </Link>
                  {/* Business card item-3 end  */}
                </div>
              </div>
              {/* Business tools card item end */}
            </div>
          </div>
          {/* <!-- pages middle nav bar start --> */}
          <div className="pages-bar">
            <div className="Yourpages-bar">
              <div className="Yourpages-bar-button">
                <Link>
                  <div>
                    <p> Home </p>
                  </div>
                </Link>
                <Link>
                  <div>
                    <p> Jobs</p>
                  </div>
                </Link>
                <Link>
                  <div>
                    <p> Reviews </p>
                  </div>
                </Link>
                <Link>
                  <div>
                    <p>Videos </p>
                  </div>
                </Link>
              </div>
              {/* promote button start  */}
              <div className="prom-div">
                <button className="promot-btn">
                  <span
                    className="iconify prom-icon"
                    data-icon="mdi:bullhorn-outline"
                  ></span>{" "}
                  Promote
                </button>
                <Link>
                  <div className="middle_bar_icon">
                    <span
                      className="iconify dot-icon"
                      data-icon="mdi:magnify"
                    ></span>
                    <span
                      className="iconify dot-icon"
                      data-icon="mdi:dots-horizontal"
                    ></span>
                  </div>
                </Link>
              </div>
              {/* promote button end  */}
            </div>
            <div></div>
          </div>
          {/* <!-- pages middle nav bar end  --> */}
          {/* <!-- create pages post section start  --> */}
          <div className="pages-post">
            <div className="post-Yourpages">
              <div className="pages-post-head">
                {/* User profile picture start */}
                <div className="pages-post-pic">
                  <img src={profileImg} alt="" />
                </div>
                {/* User profile picture end  */}
                {/* User name and post status start  */}
                <div className="pages-post-title">
                  <Link>
                    <p className="text-muted yourpage_user">
                      <strong className="user-Name">Wasek samin</strong> posted
                      an update
                    </p>
                  </Link>
                  <p className="text-muted">2 hours ago</p>
                </div>
                {/* User name and post status end  */}
              </div>
              <p className="text-muted">some text here write</p>
            </div>
            <div className="update-propic">
              <div>
                <img src={profileImg} alt="" />
                {/* Post like comment button start  */}
                <div class="express-button">
                  <button className="express-button1">
                    <span
                      className="iconify heart-icon"
                      data-icon="mdi:comment-outline"
                    ></span>
                    COMMENT
                  </button>
                  <button className="express-button2">
                    <span
                      className="iconify heart-icon"
                      data-icon="mdi:heart-outline"
                    ></span>
                    LIKE
                  </button>
                  <button className="express-button3">
                    <span
                      className="iconify heart-icon"
                      data-icon="mdi:share-variant-outline"
                    ></span>
                    SHARE
                  </button>
                </div>
                {/* Page like comment button end  */}
                <hr />
                {/* Comment box start  */}
                <div className="comment-section">
                  <div className="comment-post-pic">
                    <img src={profileImg} alt="" />
                  </div>
                  <input
                    className="comment-input"
                    placeholder="Write a public comment.."
                    type="text"
                  />
                  <span
                    className="iconify comment-icon"
                    data-icon="mdi:emoticon-outline"
                  ></span>
                </div>
                {/* Comment box end  */}
              </div>
            </div>
          </div>
          {/* <!-- create page post section end  --> */}
        </div>
      </div>
      {/* middle section yourpages end  */}
    </div>
  );
};

export default Yourpages;

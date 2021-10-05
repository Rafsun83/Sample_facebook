import React from "react";
import { Link } from "react-router-dom";

// import css file
import "../../css/Timeline/About.css";
import profileImg from "../../images/profile.jpg";
import coverImg from "../../images/cover.jpg";

const About = () => {
  return (
    <div className="Timelinepage-main-section">
      {/* <div>
           <HomeLeftContent/>
        </div> */}
      {/* Timeline middle section start  */}
      <div className="Timelinepage-middle-section">
        <div className="Timeline-middle">
          <div className="Timeline-image">
            {/* Timeline cover photos start */}
            <div className="cover-photo">
              <img className="Timeline-cover" src={coverImg} alt="" />
            </div>
            {/* Timeline cover photos end  */}
            {/* Timeline profile picture start */}
            <div className="profile-photo">
              <img className="Timeline-pro" src={profileImg} alt="" />
            </div>
            {/* Timeline profile picture end  */}
          </div>
          {/* Timline user name start */}
          <div className="User-Name">
            <h3>Wasek Samin</h3>
          </div>
          {/* Timeline user name end */}
          {/* Timeline section start after user name */}
          <div className="Timelinepage-photos-ad">
            {/* Timeline intro / friendslist and photos part start  */}
            <div className="Timelinepage-intro-section">
              <div className="Timelinepage-photos">
                {/* Timeline persinal intro section start */}
                <div className="Timelinepage-intro-details">
                  <div className="Timelinepage-personal-intro">
                    <div>
                      <h5> Intro</h5>
                    </div>
                    <div className="Info-personal">
                      <div className="Timeline-intro text-muted">
                        <span
                          className="iconify info-icon"
                          data-icon="mdi:store-clock"
                        ></span>
                        <p>Studying of Student</p>
                      </div>
                      <div className="Timeline-intro text-muted">
                        <span
                          className="iconify info-icon"
                          data-icon="mdi:school"
                        ></span>
                        <p>
                          Studied at{" "}
                          <Link>
                            <strong>
                              Bangladesh University of Business and
                              technology-(BUBT)
                            </strong>
                          </Link>{" "}
                        </p>
                      </div>
                      <div className="Timeline-intro text-muted">
                        <span
                          className="iconify info-icon"
                          data-icon="mdi:school"
                        ></span>
                        <p>Went to Mirpur Bangla high School</p>
                      </div>
                      <div className="Timeline-intro text-muted">
                        <span
                          className="iconify  info-icon"
                          data-icon="mdi:home-city"
                        ></span>
                        <p>
                          Lives in{" "}
                          <Link>
                            <strong>Dhaka, Bangladesh</strong>
                          </Link>{" "}
                        </p>
                      </div>
                      <div className="Timeline-intro text-muted">
                        <span
                          className="iconify info-icon"
                          data-icon="mdi:heart-pulse"
                        ></span>
                        <p>Single</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Timeline persoanl intro section end  */}
              </div>
              {/* Timeline page all friend list start */}
              <div className="Timelinepage-photos">
                <div>
                  <div className="Timeline-friend">
                    <div>
                      <h5 className="friend-numbers">Friends</h5>
                      <p className="text-muted friend-total">465 friends</p>
                    </div>
                    <Link to="/timeline/allfriend/">See All Friends </Link>
                  </div>
                  <div className="friend-list">
                    <div className="friend-timeline">
                      <Link className="friend-timeline">
                        <img src={profileImg} alt="" />
                      </Link>
                      <p>Wasek Samin</p>
                    </div>
                    <div className="friend-timeline">
                      <Link className="friend-timeline">
                        <img src={profileImg} alt="" />
                      </Link>
                      <p>Rafsun jani</p>
                    </div>
                    <div className="friend-timeline">
                      <Link className="friend-timeline">
                        <img src={profileImg} alt="" />
                      </Link>
                      <p>Rabbit Alam Arko</p>
                    </div>
                    <div className="friend-timeline">
                      <Link className="friend-timeline">
                        <img src={profileImg} alt="" />
                      </Link>
                      <p>Abdullah al azim</p>
                    </div>
                    <div className="friend-timeline">
                      <Link className="friend-timeline">
                        <img src={profileImg} alt="" />
                      </Link>
                      <p>Sabikur Rahman</p>
                    </div>
                    <div className="friend-timeline">
                      <Link className="friend-timeline">
                        <img src={profileImg} alt="" />
                      </Link>
                      <p>Sabikur Rahman</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Timeline page all friends end  */}
              {/* Timelinepage photos start  */}
              <div className="Timelinepage-photos">
                <div className="Timelinepage-first">
                  <h5>Photos</h5>
                  <div className="Timeline-album">
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
              {/* Timeline page photos end  */}
            </div>
            {/* Timeline intro/photos and friendlist end  */}
            {/* <!-- Timelinepage middle nav bar start --> */}
            <div className="Timeline-bar">
              <div className="Timelinepages-bar">
                {/* Timeline nav bar item start */}
                <div className="Timelinepages-bar-button">
                  <Link  to="/timelinepage">Posts</Link>
                  <Link> About </Link>
                  <Link to="/timeline/allfriend/"> Friends </Link>
                  <Link to="/timeline/photos/">Photos </Link>
                </div>
                {/* Timeline nav bar item end  */}
                {/* timeline edit button start */}
                <div className="edit-div">
                  <button className="timelineEdit-btn">
                    <span
                      className="iconify Edit-icon"
                      data-icon="mdi:account-edit"
                    ></span>{" "}
                    Edit Profile
                  </button>
                  <Link>
                    <span
                      className="iconify dot-icon"
                      data-icon="mdi:dots-horizontal"
                    ></span>
                  </Link>
                </div>
                {/* timeline edit button end  */}
              </div>
              <div></div>
            </div>
            {/* <!-- pages middle nav bar end  --> */}

            {/* <!-- about details section start --> */}
            <div className="About-info">
              {/* about section 2part both here start  */}
              <div className="intro-details">
                {/* about section left content start */}
                <div className="info-head">
                  <h5>About</h5>
                  <div className="info-list">
                    <Link className="text-muted">Overview</Link>
                  </div>
                  <div className="info-list ">
                    <Link className="text-muted">Work and education</Link>
                  </div>
                  <div className="info-list">
                    <Link className="text-muted">Contact and basic info</Link>
                  </div>
                  <div className="info-list">
                    <Link className="text-muted">Family and relationships</Link>
                  </div>
                  <div className="info-list">
                    <Link className="text-muted">Details about you</Link>
                  </div>
                  <div className="info-list">
                    <Link className="text-muted">Life events</Link>
                  </div>
                </div>
                {/* about section left content end  */}
                {/* about section right  content sstart  */}
                <div className="info-details">
                  <div className="info-edit">
                    {/* about section item content start  */}
                    <div className="info-change">
                      <Link>
                        <span
                          className="iconify info-change-icon"
                          data-icon="mdi:alarm-plus"
                        ></span>
                      </Link>
                      <Link>
                        <span>Add a workplaces</span>
                      </Link>
                    </div>
                    {/* about section item contentn end  */}
                    {/* about section item content start  */}
                    <div className="info-change">
                      <Link>
                        <span
                          className="iconify info-change-icon"
                          data-icon="mdi:alarm-plus"
                        ></span>
                      </Link>
                      <Link>
                        <span> Add a workplaces</span>
                      </Link>
                    </div>
                    {/* about section item contentn end  */}
                    {/* about section item content start  */}
                    <div className="info-change">
                      <Link>
                        <span
                          className="iconify info-change-icon"
                          data-icon="mdi:alarm-plus"
                        ></span>
                      </Link>
                      <Link>
                        <span> Add a workplaces</span>
                      </Link>
                    </div>
                    {/* about section item conten end  */}
                    {/* about section item content start  */}
                    <div className="Timeline-info text-muted">
                      <div className="Timeline-intro">
                        <span
                          className="iconify  info-icon"
                          data-icon="mdi:home-city"
                        ></span>
                        <p>
                          Lives in{" "}
                          <Link>
                            <strong>Dhaka, Bangladesh</strong>
                          </Link>{" "}
                        </p>
                      </div>
                      <div className="min-device">
                        <Link>
                          <span
                            className="iconify"
                            data-icon="mdi:earth"
                          ></span>
                        </Link>
                        <Link>
                          <span
                            className="iconify info-location-icon"
                            data-icon="mdi:dots-horizontal"
                          ></span>
                        </Link>
                      </div>
                    </div>
                    {/* about section item content end  */}
                    {/* about section item content start  */}
                    <div className="Timeline-info text-muted">
                      <div className="Timeline-intro">
                        <span
                          className="iconify  info-icon"
                          data-icon="mdi:home-city"
                        ></span>
                        <p>
                          From{" "}
                          <Link>
                            <strong> Dhaka, Bangladesh</strong>
                          </Link>
                        </p>
                      </div>
                      <div className="min-device">
                        <Link>
                          <span
                            className="iconify"
                            data-icon="mdi:earth"
                          ></span>
                        </Link>
                        <Link>
                          <span
                            className="iconify info-location-icon"
                            data-icon="mdi:dots-horizontal"
                          ></span>
                        </Link>
                      </div>
                    </div>
                    {/* about section item content end  */}
                    {/* about section item content start  */}
                    <div className="info-change">
                      <Link>
                        <span
                          className="iconify info-change-icon"
                          data-icon="mdi:alarm-plus"
                        ></span>
                      </Link>
                      <Link>
                        <span>Add a workplaces</span>
                      </Link>
                    </div>
                    {/* about section item content end  */}
                    {/* about section item content start  */}
                    <div className="info-number">
                      <div className="info-change-phone">
                        <Link>
                          <span
                            className="iconify info-icon"
                            data-icon="mdi:phone-plus"
                          ></span>
                        </Link>
                        <div>
                          <span className="text-muted"> 018287635734</span>
                          <p>Mobile</p>
                        </div>
                      </div>
                      <span
                        className="iconify info-location-icon"
                        data-icon="mdi:pencil-outline"
                      ></span>
                    </div>
                    {/* about section item content end  */}
                  </div>
                </div>
                {/* about section right content end  */}
              </div>
              {/* about section both 2part here end  */}
            </div>
            {/* <!-- about details section end  --> */}
          </div>
          {/* Timeline section end after user name  */}
        </div>
      </div>
      {/* Timeline middle section end  */}
    </div>
  );
};

export default About;

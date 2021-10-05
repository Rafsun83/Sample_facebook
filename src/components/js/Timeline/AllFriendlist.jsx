import React from "react";
import { Link } from "react-router-dom";

// css file import
import "../../css/Timeline/AllFriendlist.css";
import profileImg from "../../images/profile.jpg";
import coverImg from "../../images/cover.jpg";

const AllFriendlist = () => {
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
                      {/* instution name start */}
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
                      {/* Institute name  end  */}
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
                          </Link>
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
                    <Link>
                      <Link to="/timeline/allfriend/">See All Friends</Link>
                    </Link>
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
                  <Link to="/timelinepage">Posts</Link>
                  <Link to="/timeline/about/">About</Link>
                  <Link> Friends</Link>
                  <Link to="/timeline/photos/"> Photos</Link>
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

            {/* <!-- friend list main section start  --> */}
            <div className="All-Friend-list">
              <div className="Friend-list">
                {/* friend list section head content start */}
                <div className="friend-list-bar">
                  <div>
                    <h4>Friends</h4>
                  </div>
                  <div className="Friend-search  h-100">
                    <div className="searchbar">
                      <input
                        className="search_input"
                        type="text"
                        name=""
                        placeholder="Search..."
                      />
                      <span
                        className="iconify search_icon"
                        data-icon="mdi:magnify"
                      ></span>
                    </div>
                    <button>Friend Request</button>
                  </div>
                </div>
                {/* friend list section head content end  */}
                {/* <!-- friend list section head bar start  --> */}
                <div className="added-friend">
                  <div className="Friend-details">
                    <Link>All Friends</Link>
                    <Link>Recently Added</Link>
                    <Link>Following</Link>
                  </div>
                </div>
                {/* friend list section head bar end  */}

                {/* <!-- friend list section friend-card start  --> */}
                <div className="friend-list-section">
                  <div className="Friend-card">
                    {/* friend list single friend card start */}
                    <div className="Friendlist-view">
                      <div className="Friendlist-details">
                        <img src={profileImg} alt="" />
                        <div className="friend-name">
                          <Link>
                            <span>Sakibur Rahman</span>
                          </Link>
                          <p>12 mutual friends</p>
                        </div>
                      </div>
                      <div>
                        <Link>
                          <span
                            className="iconify friend-icon"
                            data-icon="mdi:dots-horizontal"
                          ></span>
                        </Link>
                      </div>
                    </div>
                    {/* friend list single friend card end  */}
                    {/* friend list single friend card start  */}
                    <div className="Friendlist-view">
                      <div className="Friendlist-details">
                        {/* <img src="images/pro.jpg" alt=""> */}
                        <img src={profileImg} alt="" />
                        <div className="friend-name">
                          <Link>
                            <span>Sakibur Rahman</span>
                          </Link>
                          <p>12 mutual friends</p>
                        </div>
                      </div>
                      <div>
                        <Link>
                          <span
                            className="iconify friend-icon"
                            data-icon="mdi:dots-horizontal"
                          ></span>
                        </Link>
                      </div>
                    </div>
                    {/* friend list single friend card end  */}
                    {/* friend list single friend card start  */}
                    <div className="Friendlist-view">
                      <div className="Friendlist-details">
                        {/* <img src="images/pro.jpg" alt=""> */}
                        <img src={profileImg} alt="" />
                        <div className="friend-name">
                          <Link>
                            <span>Sakibur Rahman</span>
                          </Link>
                          <p>12 mutual friends</p>
                        </div>
                      </div>
                      <div>
                        <Link>
                          <span
                            className="iconify friend-icon"
                            data-icon="mdi:dots-horizontal"
                          ></span>
                        </Link>
                      </div>
                    </div>
                    {/* friend list single friend card end  */}
                    {/* friend list single friend card start  */}
                    <div className="Friendlist-view">
                      <div className="Friendlist-details">
                        {/* <img src="images/pro.jpg" alt=""> */}
                        <img src={profileImg} alt="" />
                        <div className="friend-name">
                          <Link>
                            <span>Sakibur Rahman</span>
                          </Link>
                          <p>12 mutual friends</p>
                        </div>
                      </div>
                      <div>
                        <Link>
                          <span
                            className="iconify friend-icon"
                            data-icon="mdi:dots-horizontal"
                          ></span>
                        </Link>
                      </div>
                    </div>
                    {/* friend list single friend card end  */}
                    {/* friend list single friend card start  */}
                    <div className="Friendlist-view">
                      <div className="Friendlist-details">
                        {/* <img src="images/pro.jpg" alt=""> */}
                        <img src={profileImg} alt="" />
                        <div className="friend-name">
                          <Link>
                            <span>Sakibur Rahman</span>
                          </Link>
                          <p>12 mutual friends</p>
                        </div>
                      </div>
                      <div>
                        <Link>
                          <span
                            className="iconify friend-icon"
                            data-icon="mdi:dots-horizontal"
                          ></span>
                        </Link>
                      </div>
                    </div>
                    {/* friend list single friend card end  */}
                    {/* friend list single friend card start  */}
                    <div className="Friendlist-view">
                      <div className="Friendlist-details">
                        {/* <img src="images/pro.jpg" alt=""> */}
                        <img src={profileImg} alt="" />
                        <div className="friend-name">
                          <Link>
                            <span>Sakibur Rahman</span>
                          </Link>
                          <p>12 mutual friends</p>
                        </div>
                      </div>
                      <div>
                        <Link>
                          <span
                            className="iconify friend-icon"
                            data-icon="mdi:dots-horizontal"
                          ></span>
                        </Link>
                      </div>
                    </div>
                    {/* friend list single friend card end  */}
                    {/* friend list single friend card start  */}
                    <div className="Friendlist-view">
                      <div className="Friendlist-details">
                        {/* <img src="images/pro.jpg" alt=""> */}
                        <img src={profileImg} alt="" />
                        <div className="friend-name">
                          <Link>
                            <span>Sakibur Rahman</span>
                          </Link>
                          <p>12 mutual friends</p>
                        </div>
                      </div>
                      <div>
                        <Link>
                          {" "}
                          <span
                            className="iconify friend-icon"
                            data-icon="mdi:dots-horizontal"
                          ></span>
                        </Link>
                      </div>
                    </div>
                    {/* friend list single friend card end  */}
                  </div>
                </div>
              </div>
            </div>
            {/* friend list main section end  */}
          </div>
          {/* <!-- friend list section end  --> */}
        </div>
        {/* Timeline section end after user name  */}
      </div>
    </div>
    // timeline end
  );
};

export default AllFriendlist;

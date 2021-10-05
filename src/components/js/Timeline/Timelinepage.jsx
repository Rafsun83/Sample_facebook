import React from "react";
import { Link } from "react-router-dom";

// import css file
import "../../css/Timeline/Timelinepage.css";
import profileImg from "../../images/profile.jpg";
import coverImg from "../../images/cover.jpg";
const Timelinepage = () => {
  return (
    <div className="Timelinepage-main-section">
 
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
                    <Link to="/timeline/allfriend/">See All Friends</Link>
                  </div>
                  <div className="friend-list">
                    <div className="friend-timeline">
                      <Link className="friend-timeline">
                        <img src={profileImg} alt="" />
                      </Link>
                      <p>Wasek Samin</p>
                    </div>
                    {/* friend card  */}
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
                <div className="Timelinepages-bar-button">
                  <Link to="/timelinepage">Posts</Link>
                  <Link to="/timeline/about/" >About</Link>
                  <Link to="/timeline/allfriend/" > Friends </Link>
                  <Link to="/timeline/photos/"> Photos</Link>
                </div>
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

            {/* <!-- post create and post update section  --> */}
            <div className="Timeline-Post-create">
              <div className="out-div">
                {/* timeline post write here start */}
                <div className="Timeline-post">
                  <div className="create-Timeline-post">
                    {/* who post write her profile start  */}
                    <img src={profileImg} alt="" />
                    {/* who post write her profile end */}
                    {/* Post write input start */}
                    <form action="/form/submit" method="POST">
                      <textarea
                        class="comment text-muted"
                        placeholder="What's on your feelings? "
                      ></textarea>
                      <br />
                    </form>
                    {/* post write input end  */}
                  </div>
                  {/* Post update photos upload button start  */}
                  <div className="TimelinePost-button">
                    <div className="Postupdate-button">
                      <button className="post-btn">
                        <span
                          className="iconify post-icon"
                          data-icon="mdi:note-check"
                        ></span>{" "}
                        Post
                      </button>
                    </div>
                    <div className="Postupdate-button">
                      <button className="post-btn">
                        <span
                          className="iconify photos-icon"
                          data-icon="mdi:image-plus"
                        ></span>{" "}
                        Photos
                      </button>
                    </div>

                    <div className="Postupdate-button">
                      <button className="post-btn">
                        <span
                          className="iconify video-icon"
                          data-icon="mdi:video-plus"
                        ></span>{" "}
                        Videos
                      </button>
                    </div>
                  </div>
                  {/* post upadte photos upload button end  */}
                </div>
                {/*timeline post write here end  */}
              </div>
              <div className="Timeline-Updatepost">
                <div className="Timeline-Update-Post">
                  {/* <!-- create pages post section  --> */}
                  <div className="pages-post">
                    <div className="post-Yourpages">
                      <div className="pages-post-head">
                        {/* timeline profile picture start */}
                        <div className="pages-post-pic">
                          <img src={profileImg} alt="" />
                        </div>
                        {/* timeline profile picture end  */}
                        <div className="pages-post-title">
                          <Link>
                            <p className="Post-Name">
                              <strong className="user-Name">Wasek samin</strong>{" "}
                              posted an update
                            </p>
                          </Link>
                          <p className="text-muted">2 hours ago</p>
                        </div>
                      </div>
                      <p className="text-muted">some text here write</p>
                    </div>
                    <div className="update-propic">
                      <div>
                        <img src={profileImg} alt="" />
                        {/* post like comment button start  */}
                        <div className="express-button">
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
                        {/* timeline like comment button end  */}
                        <hr className="comment-upline" />
                        {/* style="margin-left: 1rem; margin-right: 1rem; border: 1px solid;  margin-bottom: .5rem;" */}
                        {/* post comment start */}
                        <div className="comment-section">
                          <div className="comment-post-pic">
                            <img src={profileImg} alt="" />
                          </div>
                          {/* comment write input start */}
                          <input
                            className="comment-input"
                            placeholder="Write a public comment.."
                            type="text"
                          />
                          <span
                            className="iconify comment-icon"
                            data-icon="mdi:emoticon-outline"
                          ></span>
                          {/* comment write input end  */}
                        </div>
                        {/* post comment end  */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- create page post end  --> */}
                  {/* <!-- create pages post section extra one --> */}
                  <div className="pages-post">
                    <div className="post-Yourpages">
                      <div className="pages-post-head">
                        <div className="pages-post-pic">
                          {/* <img src="images/pro.jpg" alt=""> */}
                          <img src={profileImg} alt="" />
                        </div>
                        <div className="pages-post-title">
                          <Link>
                            <p className="Post-Name">
                              <strong className="user-Name">Wasek samin</strong>{" "}
                              posted an update
                            </p>
                          </Link>
                          <p className="text-muted">2 hours ago</p>
                        </div>
                      </div>
                      <p className="text-muted">some text here write</p>
                    </div>
                    <div className="update-propic">
                      <div>
                        <img src={profileImg} alt="" />

                        <div className="express-button">
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
                        <hr className="comment-upline" />
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
                      </div>
                    </div>
                  </div>
                  {/* <!-- create page post section end  --> */}
                  {/* <!-- create pages post section  --> */}
                  <div className="pages-post">
                    <div className="post-Yourpages">
                      <div className="pages-post-head">
                        <div className="pages-post-pic">
                          {/* <img src="images/pro.jpg" alt=""> */}
                          <img src={profileImg} alt="" />
                        </div>
                        <div className="pages-post-title">
                          <Link>
                            <p className=" Post-Name">
                              <strong className="user-Name">Wasek samin</strong>{" "}
                              posted an update
                            </p>
                          </Link>

                          <p className="text-muted">2 hours ago</p>
                        </div>
                      </div>
                      <p className="text-muted">some text here write</p>
                    </div>
                    <div className="update-propic">
                      <div>
                        {/* <img src="images/pro.jpg" alt=""> */}
                        <img src={profileImg} alt="" />

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
                        <hr className="comment-upline" />
                        <div className="comment-section">
                          <div className="comment-post-pic">
                            {/* <img src="images/pro.jpg" alt=""> */}
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
                      </div>
                    </div>
                  </div>
                  {/* <!-- create page post end  --> */}
                </div>
              </div>
            </div>
          </div>
          {/* Timeline section end after user name  */}
        </div>
      </div>
      {/* Timeline middle section end  */}
    </div>
  );
};

export default Timelinepage;

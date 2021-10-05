import React from "react";
import { Link } from "react-router-dom";

// import css and image
import "../../css/Pages/Invitepage.css";
import profileImg from "../../images/profile.jpg";
import HomeLeftContent from "../Home/HomeLeftContent";
const Invitepage = () => {
  return (
    // invite full page start
    <div className="invite-section">
      {/* invite page left side content start */}
      <div>
        <HomeLeftContent />
      </div>
      {/* invite page left side content end  */}
      {/* invite page middle content start  */}
      <div className="likepage-middle-section">
        <div className="likepage-middle-invites">
          {/* mobile bar */}
          <div className="like-mobile-bar">
            <div className="mobile-bar-like-pages">
              <span
                className="iconify pages-icon"
                data-icon="mdi:flag-variant"
              ></span>
              <div className="mobile-bar-icon">
                <strong>Your pages</strong>
              </div>
            </div>
            <div className="mobile-bar-like-pages">
              <span
                className="iconify like-icon-mobile"
                data-icon="mdi:account-child-circle"
              ></span>
              <div className="mobile-bar-icon">
                <strong>Discover</strong>
              </div>
            </div>
            <div className="mobile-bar-like-pages">
              <span
                className="iconify like-icon-mobile"
                data-icon="mdi:thumb-up"
              ></span>
              <div className="mobile-bar-icon">
                <strong>Like page</strong>
              </div>
            </div>
          </div>
          {/* mobile bar end        */}
          <div className="page-invites">
            <h4>
              <strong>Invites</strong>
            </h4>
            <h6>
              <strong>Page Invites</strong>
            </h6>
          </div>
          {/* invite page invite card start  */}
          <div className="middle-likecard">
            <div className="card  invites-card">
              {/* invite card first part  */}
              <div className=" card-invite">
                {/* invite group profile picture start */}
                <Link className="invite-meme-name">
                  <img src={profileImg} alt="" />
                </Link>
                {/* invite group profile picture end  */}
                {/* invite group name and catagory start  */}
                <div className="card-body invite-card-body">
                  <h4 className="card-title  invite-page-name">
                    {" "}
                    Travel Bangladesh and abroad{" "}
                  </h4>
                  <p className="card-text text-muted service">
                    Product/Service
                  </p>
                  {/* invite group name nad catagory end  */}
                  {/* who invite her/he name start */}
                  <div className="liked-page">
                    <Link className="invite-profile-image">
                      <img src={profileImg} alt="" />
                    </Link>
                    <p className="card-text">
                      <small class="text-muted">
                        <strong>Wasek samin</strong>
                        <span>Invited you to like this page</span>
                      </small>
                    </p>
                  </div>
                  {/* who invite her/he name end  */}
                  {/* invite accept or reject button start */}
                  <div className="button-card">
                    <button type="button" className="btn btn-primary">
                      <strong>Accept</strong>
                    </button>
                    <button
                      type="button"
                      id="reject-btn"
                      className="btn btn-primary"
                    >
                      <strong>Reject</strong>
                    </button>
                  </div>
                  {/* invite accept or reject button end  */}
                </div>
              </div>
              {/* invite card first part end  */}

              {/* invite card second part  */}
              <div className=" card-invite">
                {/* invite group profile picture start */}
                <Link className="invite-meme-name">
                  <img src={profileImg} alt="" />
                </Link>
                {/* invite group profile picture end  */}
                {/* invite group name and catagory start  */}
                <div className="card-body invite-card-body">
                  <h4 className="card-title   invite-page-name">
                    {" "}
                    Travel Bangladesh and abroad{" "}
                  </h4>
                  <p className="card-text text-muted service">
                    Product/Service
                  </p>
                  {/* invite group name nad catagory end  */}
                  {/* who invite her/he name start */}
                  <div className="liked-page">
                    <Link className="invite-profile-image">
                      <img src={profileImg} alt="" />
                    </Link>
                    <p className="card-text">
                      <small class="text-muted">
                        <strong>Wasek samin</strong>
                        <span>Invited you to like this page</span>
                      </small>
                    </p>
                  </div>
                  {/* who invite her/he name end  */}
                  {/* invite accept or reject button start */}
                  <div className="button-card">
                    <button type="button" className="btn btn-primary">
                      <strong>Accept</strong>
                    </button>
                    <button
                      type="button"
                      id="reject-btn"
                      className="btn btn-primary"
                    >
                      <strong>Reject</strong>
                    </button>
                  </div>
                  {/* invite accept or reject button end  */}
                </div>
              </div>
              {/* invite card second part end  */}
              {/* invite card third part start  */}
              <div className=" card-invite">
                {/* invite group profile picture start */}
                <Link className="invite-meme-name">
                  <img src={profileImg} alt="" />
                </Link>
                {/* invite group profile picture end  */}
                {/* invite group name and catagory start  */}
                <div className="card-body invite-card-body">
                  <h4 className="card-title  invite-page-name">
                    Travel Bangladesh and abroad{" "}
                  </h4>
                  <p className="card-text text-muted service">
                    Product/Service
                  </p>
                  {/* invite group name nad catagory end  */}
                  {/* who invite her/he name start */}
                  <div className="liked-page">
                    <Link className="invite-profile-image">
                      <img src={profileImg} alt="" />
                    </Link>
                    <p className="card-text">
                      <small class="text-muted">
                        <strong>Wasek samin</strong>
                        <span>Invited you to like this page</span>
                      </small>
                    </p>
                  </div>
                  {/* who invite her/he name end  */}
                  {/* invite accept or reject button start */}
                  <div className="button-card">
                    <button type="button" className="btn btn-primary">
                      <strong>Accept</strong>
                    </button>
                    <button
                      type="button"
                      id="reject-btn"
                      className="btn btn-primary"
                    >
                      <strong>Reject</strong>
                    </button>
                  </div>
                  {/* invite accept or reject button end  */}
                </div>
              </div>
              {/* invite card third part end  */}
            </div>
          </div>
          {/* invite page invite card end  */}
        </div>
      </div>
      {/* invite page middle content end  */}
    </div>
  );
};

export default Invitepage;

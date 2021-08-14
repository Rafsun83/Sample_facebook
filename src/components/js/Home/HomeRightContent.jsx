import React from "react";
import { Link } from "react-router-dom";

// Icons
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

// Imported files
import "../../css/Home/HomeRightContent.css";
import postImg from "../../images/Post 1.jpg";

const HomeRightContent = () => {
  return (
    <div className="home__right">
      {/* User pages section starts */}

      {/* Your pages title section starts */}
      <div className="my__pages my-3">
        <p className="fw-bold text-muted">Your pages</p>
        <MoreHorizIcon className="dots__icon text-muted" />
      </div>
      {/* Your pages title section ends */}

      {/* Your all pages section starts */}
      <div className="all__pages">
        <Link className="pages__image my-2">
          <img src={postImg} alt="" />
          <p className="fw-bold">DevTech BD</p>
        </Link>
        {/* Your page notification and promotion section starts */}
        <div className="page__notify ms-3 my-2">
          <Link className="mb-1">
            <div>
              <NotificationsActiveOutlinedIcon />
              <small className="ms-2 text-muted">1 Notification</small>
            </div>
          </Link>
          <Link>
            <div>
              <span
                className="iconify"
                data-icon="tabler:speakerphone"
                data-inline="false"
              ></span>
              <small className="ms-2 text-muted">Create Promotion</small>
            </div>
          </Link>
        </div>
        {/* Your page notification and promotion section ends */}

        <Link className="pages__image my-2">
          <img src={postImg} alt="" />
          <p className="fw-bold">DevTech BD</p>
        </Link>
        {/* Your page notification and promotion section starts */}
        <div className="page__notify ms-3 my-2">
          <Link className="mb-1">
            <div>
              <NotificationsActiveOutlinedIcon />
              <small className="ms-2 text-muted">1 Notification</small>
            </div>
          </Link>
          <Link>
            <div>
              <span
                className="iconify"
                data-icon="tabler:speakerphone"
                data-inline="false"
              ></span>
              <small className="ms-2 text-muted">Create Promotion</small>
            </div>
          </Link>
        </div>
        {/* Your page notification and promotion section ends */}
      </div>
      {/* Your all pages section ends */}

      {/* User pages section starts */}
      <hr />

      {/* User contact section starts */}

      {/* Your contact title section starts  */}
      <div className="my__contacts mb-2">
        <p className="fw-bold text-muted">Contacts</p>
        <div>
          <VideoCallOutlinedIcon className="dots__icon text-muted" />
          <SearchOutlinedIcon className="dots__icon text-muted" />
          <MoreHorizIcon className="dots__icon text-muted" />
        </div>
      </div>
      {/* Your contact title section ends  */}

      {/* Your all contacts section starts */}
      <div className="all__contacts">
        <Link className="pages__image my-2">
          <div>
            <img src={postImg} alt="" />
            <div className="online__dot"></div>
          </div>
          <p className="fw-bold">DevTech BD</p>
        </Link>
        <Link className="pages__image my-2">
          <div>
            <img src={postImg} alt="" />
            <div className="online__dot"></div>
          </div>
          <p className="fw-bold">DevTech BD</p>
        </Link>
        <Link className="pages__image my-2">
          <div>
            <img src={postImg} alt="" />
            <div className="online__dot"></div>
          </div>
          <p className="fw-bold">DevTech BD</p>
        </Link>
      </div>
      {/* Your all contacts section ends */}

      {/* User contact section ends */}

      <hr />

      {/* User group section starts */}

      {/* Your group title section starts  */}
      <div className="my__contacts mb-2">
        <p className="fw-bold text-muted">Group Conversations</p>
      </div>
      {/* Your group title section ends  */}

      {/* Your all contacts section starts */}
      <div className="all__contacts">
        <Link className="pages__image my-2">
          <div>
            <img src={postImg} alt="" />
            <div className="online__dot"></div>
          </div>
          <p className="fw-bold">DevTech BD</p>
        </Link>
        <Link className="pages__image my-2">
          <div>
            <img src={postImg} alt="" />
            <div className="online__dot"></div>
          </div>
          <p className="fw-bold">DevTech BD</p>
        </Link>
        <Link className="pages__image my-2">
          <div>
            <img src={postImg} alt="" />
            <div className="online__dot"></div>
          </div>
          <p className="fw-bold">DevTech BD</p>
        </Link>
        <Link className="pages__image my-2">
          <div>
            <img src={postImg} alt="" />
            <div className="online__dot"></div>
          </div>
          <p className="fw-bold">DevTech BD</p>
        </Link>
        <Link className="pages__image my-2">
          <div>
            <img src={postImg} alt="" />
            <div className="online__dot"></div>
          </div>
          <p className="fw-bold">DevTech BD</p>
        </Link>
      </div>
      {/* Your all contacts section ends */}

      {/* User group section ends */}
    </div>
  );
};

export default HomeRightContent;

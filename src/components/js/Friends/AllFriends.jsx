import React from "react";
import { Link } from "react-router-dom";

// Icons
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

// Imported files
import "../../css/Friends/FriendRequests.css";
import "../../css/Friends/AllFriends.css";
import personImg from "../../images/profile.jpg";
import friendImg from "../../images/friend.png";

const AllFriends = () => {
  return (
    <>
      {/* Friend requests desktop version section starts */}
      <div className="friend__requestSection">
        {/* Friend requests left section starts */}
        <div className="friend__requestsLeftSection pt-3">
          {/* Friend requests header section starts */}
          <div className="friend__requestsHeader px-2">
            <Link to="/friends/">
              <NavigateBeforeIcon className="me-2" />
            </Link>
            <div>
              <Link to="/friends/" className="friend__smallLink">
                <small>Friends</small>
              </Link>
              <h4 className="fw-bold">All Friends</h4>
            </div>
          </div>

          {/* All friends left header search bar section starts */}
          <div className="all__friendsSearchBox mb-3">
            <SearchIcon className="header__searchIcon" />
            <form method="GET">
              <input type="search" placeholder="Search Friends..." />
            </form>
          </div>
          {/* All friends left header search bar section starts */}

          {/* Friend requests header section ends */}

          {/* Friend requests border line section starts */}
          <div className="friend__requestsBorderLine mb-3"></div>
          {/* Friend requests border line section ends */}

          {/* Friend requests context section starts */}
          <div className="all__friendsContext">
            <h6 className="fw-bold px-3 text-primary">564 Friends</h6>

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* Extra */}
            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">Rabbith Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}

            {/* View all friend requests section starts */}
            <div className="view__allFriendRequests px-1">
              <div className="view__friendRequets pe-3 ps-1 py-3">
                {/* Friend requests person image section starts */}
                <Link className="friend__requestsImg">
                  <img src={personImg} alt="" />
                </Link>
                {/* Friend requests person image section ends */}

                {/* All friends body section starts */}
                <div className="all__friendsBodyText">
                  <Link className="friend__requestsPersonNameAndDate">
                    <p className="fw-bold">ease Alam Arko</p>
                    <div className="all__friendsDots">
                      <MoreHorizIcon />
                    </div>
                  </Link>
                </div>
                {/* All friends body section ends */}
              </div>
            </div>
            {/* View all friend requests section ends */}
          </div>
          {/* Friend requests context section ends */}
        </div>
        {/* Friend requests left section ends */}

        {/* Friend request right section starts */}
        <div className="friend__requestsRightSection">
          <div className="friend__requestsRightContent">
            <div className="friend__requestRightImg">
              <img src={friendImg} alt="" />
            </div>
            <p className="fw-bold mt-3">
              Select a person's name to preview their profile
            </p>
          </div>
        </div>
        {/* Friend request right section ends */}
      </div>
      {/* Friend requests desktop version section ends */}

      {/* Friend request mobile version section starts */}
      {/* Friends mobile/tab screen section starts */}
      <div className="friend__requestsMobileSection">
        {/* Friends mobile top section starts */}
        <div className="all__friendTopSection mt-3">
          <Link to="/friends/">
            <ArrowBackIosIcon />
          </Link>
          <p className="fw-bold">All Friends</p>
        </div>

        <div className="border__line"></div>

        {/* Mobile friend request header section starts */}
        <div className="all__friendMobileSearchBar mt-3 me-2">
          <SearchIcon className="header__searchIcon" />
          <form method="GET">
            <input type="search" placeholder="Search Friends..." />
          </form>
        </div>
        {/* Mobile friend request header section ends */}

        {/* Friends mobile top section ends */}

        <div className="mobile__friendRequest">
          <div className="all__friendsMobileHeader mb-4">
            <div>
              <h4 className="fw-bold">
                <span className="text-primary fw-bold">564</span> Friends
              </h4>

              {/* Sort all friends section starts */}
              <div className="sort__allFriends me-2">
                <p className="fw-bold">Sort</p>
              </div>
              {/* Sort all friends section ends */}
            </div>
          </div>
          {/* mobile friend request header section ends */}

          {/* Mobile friend request body section starts */}
          <Link className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <div>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </div>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <div className="all__friendMobileBody">
                <div className="pe-2">
                  <p className="fw-bold">Abdullah Al Azim</p>
                  <div className="all__friendsDots">
                    <MoreHorizIcon />
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </Link>
          {/* Mobile friend request body section ends */}

          {/* Extra */}
          {/* Mobile friend request body section starts */}
          <Link className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <div>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </div>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <div className="all__friendMobileBody">
                <div className="pe-2">
                  <p className="fw-bold">Abdullah Al Azim</p>
                  <div className="all__friendsDots">
                    <MoreHorizIcon />
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </Link>
          {/* Mobile friend request body section ends */}

          {/* Mobile friend request body section starts */}
          <Link className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <div>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </div>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <div className="all__friendMobileBody">
                <div className="pe-2">
                  <p className="fw-bold">Abdullah Al Azim</p>
                  <div className="all__friendsDots">
                    <MoreHorizIcon />
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </Link>
          {/* Mobile friend request body section ends */}

          {/* Mobile friend request body section starts */}
          <Link className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <div>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </div>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <div className="all__friendMobileBody">
                <div className="pe-2">
                  <p className="fw-bold">Abdullah Al Azim</p>
                  <div className="all__friendsDots">
                    <MoreHorizIcon />
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </Link>
          {/* Mobile friend request body section ends */}

          {/* Mobile friend request body section starts */}
          <Link className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <div>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </div>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <div className="all__friendMobileBody">
                <div className="pe-2">
                  <p className="fw-bold">Abdullah Al Azim</p>
                  <div className="all__friendsDots">
                    <MoreHorizIcon />
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </Link>
          {/* Mobile friend request body section ends */}

          {/* Mobile friend request body section starts */}
          <Link className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <div>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </div>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <div className="all__friendMobileBody">
                <div className="pe-2">
                  <p className="fw-bold">Abdullah Al Azim</p>
                  <div className="all__friendsDots">
                    <MoreHorizIcon />
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </Link>
          {/* Mobile friend request body section ends */}

          {/* Mobile friend request body section starts */}
          <Link className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <div>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </div>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <div className="all__friendMobileBody">
                <div className="pe-2">
                  <p className="fw-bold">Abdullah Al Azim</p>
                  <div className="all__friendsDots">
                    <MoreHorizIcon />
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </Link>
          {/* Mobile friend request body section ends */}

          {/* Mobile friend request body section starts */}
          <Link className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <div>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </div>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <div className="all__friendMobileBody">
                <div className="pe-2">
                  <p className="fw-bold">Abdullah Al Azim</p>
                  <div className="all__friendsDots">
                    <MoreHorizIcon />
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </Link>
          {/* Mobile friend request body section ends */}

          {/* Mobile friend request body section starts */}
          <Link className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <div>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </div>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <div className="all__friendMobileBody">
                <div className="pe-2">
                  <p className="fw-bold">Abdullah Al Azim</p>
                  <div className="all__friendsDots">
                    <MoreHorizIcon />
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </Link>
          {/* Mobile friend request body section ends */}

          {/* Mobile friend request body section starts */}
          <Link className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <div>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </div>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <div className="all__friendMobileBody">
                <div className="pe-2">
                  <p className="fw-bold">Abdullah Al Azim</p>
                  <div className="all__friendsDots">
                    <MoreHorizIcon />
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </Link>
          {/* Mobile friend request body section ends */}

          {/* Mobile friend request body section starts */}
          <Link className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <div>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </div>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <div className="all__friendMobileBody">
                <div className="pe-2">
                  <p className="fw-bold">Abdullah Al Azim</p>
                  <div className="all__friendsDots">
                    <MoreHorizIcon />
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </Link>
          {/* Mobile friend request body section ends */}

          {/* Mobile friend request body section starts */}
          <Link className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <div>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </div>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <div className="all__friendMobileBody">
                <div className="pe-2">
                  <p className="fw-bold">Abdullah Al Azim</p>
                  <div className="all__friendsDots">
                    <MoreHorizIcon />
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </Link>
          {/* Mobile friend request body section ends */}

          {/* Mobile friend request body section starts */}
          <Link className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <div>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </div>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <div className="all__friendMobileBody">
                <div className="pe-2">
                  <p className="fw-bold">Abdullah Al Azim</p>
                  <div className="all__friendsDots">
                    <MoreHorizIcon />
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </Link>
          {/* Mobile friend request body section ends */}

          {/* Mobile friend request body section starts */}
          <Link className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <div>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </div>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <div className="all__friendMobileBody">
                <div className="pe-2">
                  <p className="fw-bold">Abdullah Al Azim</p>
                  <div className="all__friendsDots">
                    <MoreHorizIcon />
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </Link>
          {/* Mobile friend request body section ends */}

          {/* Mobile friend request body section starts */}
          <Link className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <div>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </div>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <div className="all__friendMobileBody">
                <div className="pe-2">
                  <p className="fw-bold">Abdullah Al Azim</p>
                  <div className="all__friendsDots">
                    <MoreHorizIcon />
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </Link>
          {/* Mobile friend request body section ends */}

          {/* Mobile friend request body section starts */}
          <Link className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <div>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </div>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <div className="all__friendMobileBody">
                <div className="pe-2">
                  <p className="fw-bold">Abdullah Al Azim</p>
                  <div className="all__friendsDots">
                    <MoreHorizIcon />
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </Link>
          {/* Mobile friend request body section ends */}
        </div>
      </div>
      {/* Friends mobile/tab screen section ends */}

      {/* Friend request mobile version section ends */}
    </>
  );
};

export default AllFriends;

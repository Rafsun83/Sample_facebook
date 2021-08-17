import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

// Icons
import SettingsIcon from "@material-ui/icons/Settings";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

// Imported files
import "../../css/Friends/FriendsHome.css";
import personImg from "../../images/person.jpg";

// Imported context files
import { DropItemsContext } from "../../ContextData/DropItemsContext";

const FriendsHome = () => {
  const { showDropItems, setShowDropItems } = useContext(DropItemsContext);

  const onDropItems = () => {
    setShowDropItems(!showDropItems);

    if (showDropItems) {
      document.getElementById("myBody").style.overflowY = "auto";
    } else {
      document.getElementById("myBody").style.overflowY = "hidden";
    }
  };

  return (
    <div className="friends__home">
      {/* Friends big screen section starts */}
      <div className="friends__desktopVersion">
        {/* Friends left section starts */}
        <div className="friends__leftSection">
          <div>
            {/* Friends left header section starts */}
            <div className="friends__leftSectionHeader px-3 mt-3 mb-2">
              <h4 className="fw-bold">Friends</h4>
              <Button>
                <SettingsIcon />
              </Button>
            </div>
            {/* Friends left header section starts */}

            {/* Friends left bottom section starts */}
            <div className="friends__bottomSectionStarts px-3">
              <Link to="/friends/">
                <div className="fw-bold">
                  <div className="friend__requestsLink friend__requestFirst">
                    <span
                      className="iconify"
                      data-icon="fluent:people-16-regular"
                      data-flip="horizontal"
                    ></span>{" "}
                    Home
                  </div>
                  <div>
                    <ArrowForwardIosOutlinedIcon />
                  </div>
                </div>
              </Link>
              <Link to="/friends/requests/">
                <div className="fw-bold">
                  <div className="friend__requestsLink">
                    <span
                      className="iconify"
                      data-icon="icon-park-outline:people-right"
                    ></span>{" "}
                    Friend Requests
                  </div>
                  <div>
                    <ArrowForwardIosOutlinedIcon />
                  </div>
                </div>
              </Link>
              <Link to="/friends/suggestions/">
                <div className="fw-bold">
                  <div className="friend__requestsLink">
                    <span
                      className="iconify"
                      data-icon="icon-park-outline:people-plus-one"
                    ></span>{" "}
                    Suggestions
                  </div>
                  <div>
                    <ArrowForwardIosOutlinedIcon />
                  </div>
                </div>
              </Link>
              <Link to="/friends/list/">
                <div className="fw-bold">
                  <div className="friend__requestsLink friend__requestLast">
                    <span
                      className="iconify"
                      data-icon="fluent:people-team-16-regular"
                    ></span>{" "}
                    All Friends
                  </div>
                  <div>
                    <ArrowForwardIosOutlinedIcon />
                  </div>
                </div>
              </Link>
            </div>
            {/* Friends left bottom section starts */}
          </div>
        </div>

        {/* Friends left section ends */}

        {/* Friends right section starts */}
        <div className="friends__rightSection my-3">
          {/* Friend right header section starts */}
          <div className="friend__rightHeader">
            <h5 className="fw-bold">Friend Requests</h5>
            <Link className="me-3 friends__seeAll">See All</Link>
          </div>
          {/* Friend right header section ends */}

          {/* Friend right bottom section starts */}
          <div className="friend__rightBottom">
            <div className="card">
              <Link className="friend__image">
                <img src={personImg} alt="" />
              </Link>

              <Link className="friend__context px-3 mt-2">
                <p className="fw-bold">Sakib Ovii</p>
              </Link>

              <div className="friend__actionBtn mx-3">
                <Button variant="contained" className="my-2">
                  Confirm
                </Button>
                <Button variant="contained" className="mb-3">
                  Delete
                </Button>
              </div>
            </div>

            <div className="card">
              <Link className="friend__image">
                <img src={personImg} alt="" />
              </Link>

              <Link className="friend__context px-3 mt-2">
                <p className="fw-bold">Sakib Ovii</p>
              </Link>

              <div className="friend__actionBtn mx-3">
                <Button variant="contained" className="my-2">
                  Confirm
                </Button>
                <Button variant="contained" className="mb-3">
                  Delete
                </Button>
              </div>
            </div>

            <div className="card">
              <Link className="friend__image">
                <img src={personImg} alt="" />
              </Link>

              <Link className="friend__context px-3 mt-2">
                <p className="fw-bold">Sakib Ovii</p>
              </Link>

              <div className="friend__actionBtn mx-3">
                <Button variant="contained" className="my-2">
                  Confirm
                </Button>
                <Button variant="contained" className="mb-3">
                  Delete
                </Button>
              </div>
            </div>

            <div className="card">
              <Link className="friend__image">
                <img src={personImg} alt="" />
              </Link>

              <Link className="friend__context px-3 mt-2">
                <p className="fw-bold">Sakib Ovii</p>
              </Link>

              <div className="friend__actionBtn mx-3">
                <Button variant="contained" className="my-2">
                  Confirm
                </Button>
                <Button variant="contained" className="mb-3">
                  Delete
                </Button>
              </div>
            </div>

            <div className="card">
              <Link className="friend__image">
                <img src={personImg} alt="" />
              </Link>

              <Link className="friend__context px-3 mt-2">
                <p className="fw-bold">Sakib Ovii</p>
              </Link>

              <div className="friend__actionBtn mx-3">
                <Button variant="contained" className="my-2">
                  Confirm
                </Button>
                <Button variant="contained" className="mb-3">
                  Delete
                </Button>
              </div>
            </div>

            <div className="card">
              <Link className="friend__image">
                <img src={personImg} alt="" />
              </Link>

              <Link className="friend__context px-3 mt-2">
                <p className="fw-bold">Sakib Ovii</p>
              </Link>

              <div className="friend__actionBtn mx-3">
                <Button variant="contained" className="my-2">
                  Confirm
                </Button>
                <Button variant="contained" className="mb-3">
                  Delete
                </Button>
              </div>
            </div>

            <div className="card">
              <Link className="friend__image">
                <img src={personImg} alt="" />
              </Link>

              <Link className="friend__context px-3 mt-2">
                <p className="fw-bold">Sakib Ovii</p>
              </Link>

              <div className="friend__actionBtn mx-3">
                <Button variant="contained" className="my-2">
                  Confirm
                </Button>
                <Button variant="contained" className="mb-3">
                  Delete
                </Button>
              </div>
            </div>
          </div>

          {/* Friends right section see all button section starts */}
          <div className="friends__seeMoreBtn my-3">
            <Button className="fw-bold" variant="contained">
              See More <ExpandMoreIcon />{" "}
            </Button>
          </div>
          {/* Friends right section see all button section ends */}

          {/* Friend right bottom section ends */}
        </div>

        <div className="friends__rightSection mb-3 mt-4">
          {/* Friend right header section starts */}
          <div className="friend__rightHeader">
            <h5 className="fw-bold">People You May Know</h5>
            <Link className="me-3 friends__seeAll">See All</Link>
          </div>
          {/* Friend right header section ends */}

          {/* Friend right bottom section starts */}
          <div className="friend__rightBottom">
            {/* Friend request card section starts */}
            <div className="card">
              {/* Friend request person image section starts */}
              <Link className="friend__image">
                <img src={personImg} alt="" />
              </Link>
              {/* Friend request person image section ends */}

              {/* Friend request context and button section starts */}
              <Link className="friend__context px-3 mt-2">
                <p className="fw-bold">Sakib Ovii</p>
              </Link>

              <div className="friend__actionBtn mx-3">
                <Button variant="contained" className="my-2">
                  Add Friend
                </Button>
                <Button variant="contained" className="mb-3">
                  Remove
                </Button>
              </div>
              {/* Friend request context and button section ends */}
            </div>
            {/* Friend request card section ends */}

            {/* Extra */}
            <div className="card">
              <Link className="friend__image">
                <img src={personImg} alt="" />
              </Link>

              <Link className="friend__context px-3 mt-2">
                <p className="fw-bold">Sakib Ovii</p>
              </Link>

              <div className="friend__actionBtn mx-3">
                <Button variant="contained" className="my-2">
                  Add Friend
                </Button>
                <Button variant="contained" className="mb-3">
                  Remove
                </Button>
              </div>
            </div>

            <div className="card">
              <Link className="friend__image">
                <img src={personImg} alt="" />
              </Link>

              <Link className="friend__context px-3 mt-2">
                <p className="fw-bold">Sakib Ovii</p>
              </Link>

              <div className="friend__actionBtn mx-3">
                <Button variant="contained" className="my-2">
                  Add Friend
                </Button>
                <Button variant="contained" className="mb-3">
                  Remove
                </Button>
              </div>
            </div>

            <div className="card">
              <Link className="friend__image">
                <img src={personImg} alt="" />
              </Link>

              <Link className="friend__context px-3 mt-2">
                <p className="fw-bold">Sakib Ovii</p>
              </Link>

              <div className="friend__actionBtn mx-3">
                <Button variant="contained" className="my-2">
                  Add Friend
                </Button>
                <Button variant="contained" className="mb-3">
                  Remove
                </Button>
              </div>
            </div>

            <div className="card">
              <Link className="friend__image">
                <img src={personImg} alt="" />
              </Link>

              <Link className="friend__context px-3 mt-2">
                <p className="fw-bold">Sakib Ovii</p>
              </Link>

              <div className="friend__actionBtn mx-3">
                <Button variant="contained" className="my-2">
                  Add Friend
                </Button>
                <Button variant="contained" className="mb-3">
                  Remove
                </Button>
              </div>
            </div>

            <div className="card">
              <Link className="friend__image">
                <img src={personImg} alt="" />
              </Link>

              <Link className="friend__context px-3 mt-2">
                <p className="fw-bold">Sakib Ovii</p>
              </Link>

              <div className="friend__actionBtn mx-3">
                <Button variant="contained" className="my-2">
                  Add Friend
                </Button>
                <Button variant="contained" className="mb-3">
                  Remove
                </Button>
              </div>
            </div>

            <div className="card">
              <Link className="friend__image">
                <img src={personImg} alt="" />
              </Link>

              <Link className="friend__context px-3 mt-2">
                <p className="fw-bold">Sakib Ovii</p>
              </Link>

              <div className="friend__actionBtn mx-3">
                <Button variant="contained" className="my-2">
                  Add Friend
                </Button>
                <Button variant="contained" className="mb-3">
                  Remove
                </Button>
              </div>
            </div>
          </div>
          {/* Extra */}

          {/* Friend right bottom section ends */}
        </div>
        {/* Friends right section ends */}
      </div>
      {/* Friends big screen section ends */}

      {/* Friends mobile/tab screen section starts */}
      <div className="friends__mobileSection">
        {/* Friends mobile top section starts */}
        <div className="friends__mobileTopSection mt-3">
          <Link to="/friends/suggestions/" className="fw-bold">
            Suggestions
          </Link>
          <Link to="/friends/list/" className="fw-bold">
            All Friends
          </Link>
        </div>
        {/* Friends mobile top section ends */}

        <div className="border__line"></div>

        <div className="mobile__friendRequest">
          {/* mobile friend request header section starts */}
          <div className="mobile__friendRequestHeader">
            <div>
              <h4 className="fw-bold">
                Friend Requests <span className="text-primary fw-bold">25</span>
              </h4>
            </div>
            {/* Expand more icon section starts */}
            <div className="friends__mobileExpandMoreIcon">
              <ExpandMoreIcon />
            </div>
            {/* Expand more icon section ends */}
          </div>
          {/* mobile friend request header section ends */}

          {/* Mobile friend request body section starts */}
          <div className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <Link>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </Link>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <Link>
                <p className="fw-bold">Abdullah Al Azim</p>
              </Link>
              <div className="mobile__friendRequestBtn">
                <Button variant="contained" className="fw-bold">
                  Confirm
                </Button>
                <Button variant="contained" className="fw-bold">
                  Delete
                </Button>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </div>
          {/* Mobile friend request body section ends */}

          {/* Extra */}
          <div className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <Link>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </Link>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <Link>
                <p className="fw-bold">Abdullah Al Azim</p>
              </Link>
              <div className="mobile__friendRequestBtn">
                <Button variant="contained" className="fw-bold">
                  Confirm
                </Button>
                <Button variant="contained" className="fw-bold">
                  Delete
                </Button>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </div>

          <div className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <Link>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </Link>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <Link>
                <p className="fw-bold">Abdullah Al Azim</p>
              </Link>
              <div className="mobile__friendRequestBtn">
                <Button variant="contained" className="fw-bold">
                  Confirm
                </Button>
                <Button variant="contained" className="fw-bold">
                  Delete
                </Button>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </div>

          {/* Mobile friend request see all button section starts */}
          <div className="mobile__friendSeeMoreBtn my-3">
            <Button variant="contained" className="fw-bold">
              See All
            </Button>
          </div>
          {/* Mobile friend request see all button section ends */}

          {/* Mobile friend people you may know section starts */}
          <div className="mobile__friendRequestHeader">
            <div>
              <h4 className="fw-bold">People You May Know</h4>
            </div>
          </div>
          {/* mobile friend request header section ends */}

          {/* Mobile friend request body section starts */}
          <div className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <Link>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </Link>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <Link>
                <p className="fw-bold">Abdullah Al Azim</p>
              </Link>
              <div className="mobile__friendRequestBtn">
                <Button variant="contained" className="fw-bold">
                  Add Friend
                </Button>
                <Button variant="contained" className="fw-bold">
                  Remove
                </Button>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </div>
          {/* Mobile friend request body section ends */}

          {/* Extra */}
          <div className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <Link>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </Link>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <Link>
                <p className="fw-bold">Abdullah Al Azim</p>
              </Link>
              <div className="mobile__friendRequestBtn">
                <Button variant="contained" className="fw-bold">
                  Add Friend
                </Button>
                <Button variant="contained" className="fw-bold">
                  Remove
                </Button>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </div>

          <div className="mobile__friendRequestBody mt-3">
            {/* Mobile friend person image section starts */}
            <Link>
              <div className="mobile__friendImg">
                <img src={personImg} alt="" />
              </div>
            </Link>
            {/* Mobile friend person image section ends */}

            {/* Mobile friend request context section starts */}
            <div className="mobile__friendContext">
              <Link>
                <p className="fw-bold">Abdullah Al Azim</p>
              </Link>
              <div className="mobile__friendRequestBtn">
                <Button variant="contained" className="fw-bold">
                  Add Friend
                </Button>
                <Button variant="contained" className="fw-bold">
                  Remove
                </Button>
              </div>
            </div>
            {/* Mobile friend request context section ends */}
          </div>
          {/* Mobile friend people you may know section ends */}
        </div>
      </div>
      {/* Friends mobile/tab screen section ends */}
    </div>
  );
};

export default FriendsHome;

import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

// Icons
import SettingsIcon from "@material-ui/icons/Settings";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import RadioOutlinedIcon from "@material-ui/icons/RadioOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

// Imported files
import "../../css/Friends/FriendRequests.css";
import "../../css/Friends/AllFriends.css";
import "../../css/Groups/GroupLeftSidebar.css";
import personImg from "../../images/profile.jpg";
import friendImg from "../../images/friend.png";

const GroupLeftSidebar = ({ onFeedPage, setOnFeedPage }) => {
  return (
    <div className="group__leftSidebar">
      {/* Friend requests left section starts */}
      <div className="friend__requestsLeftSection pt-3">
        {/* Friend requests header section starts */}
        <div className="friend__requestsHeader px-2">
          <div className="group__leftSidebarHeader mb-2">
            <h4 className="fw-bold">Groups</h4>
            <Button>
              <SettingsIcon />
            </Button>
          </div>
        </div>

        {/* All friends left header search bar section starts */}
        <div className="all__friendsSearchBox mb-3">
          <SearchIcon className="header__searchIcon" />
          <form method="GET">
            <input type="search" placeholder="Search Groups..." />
          </form>
        </div>
        {/* All friends left header search bar section starts */}

        {/* Friend requests header section ends */}

        {/* Friend requests border line section starts */}
        <div className="friend__requestsBorderLine mb-3"></div>
        {/* Friend requests border line section ends */}

        {/* Friend requests context section starts */}
        <div className="all__friendsContext">
          <div className="px-2 group__headerLinks">
            {onFeedPage === true ? (
              <Link
                to="/groups/feed/"
                style={{ backgroundColor: "var(--less-primary-color)" }}
                onClick={setOnFeedPage(true)}
              >
                <RadioOutlinedIcon className="me-2" />
                <p className="fw-bold">Your Feed</p>
              </Link>
            ) : (
              <Link to="/groups/feed/">
                <RadioOutlinedIcon className="me-2" />
                <p className="fw-bold">Your Feed</p>
              </Link>
            )}
            {onFeedPage === false ? (
              <Link
                to="/groups/discover/"
                style={{ backgroundColor: "var(--less-primary-color)" }}
                onClick={setOnFeedPage(false)}
              >
                <ExploreOutlinedIcon className="me-2" />
                <p className="fw-bold">Discover</p>
              </Link>
            ) : (
              <Link to="/groups/discover/">
                <RadioOutlinedIcon className="me-2" />
                <p className="fw-bold">Discover</p>
              </Link>
            )}
            <Link to="/groups/create/">
              <Button variant="contained" className="fw-bold">
                <AddOutlinedIcon /> Create New Group
              </Button>
            </Link>
          </div>
          <div className="friend__requestsBorderLine mb-3"></div>

          {/* Group left sidebar bottom part section starts */}
          <div className="group__leftSectionBottomPart px-3">
            <h6 className="fw-bold mb-4">Groups you have joined</h6>

            <div className="group__infoContainer">
              <Link>
                {/* Group image section starts */}
                <div className="group__image">
                  <img src={personImg} alt="" />
                </div>
                {/* Group image section ends */}

                {/* Group title section starts */}
                <div className="group__titleContext">
                  <p className="fw-bold">
                    Pythonaeeaeacececaeaefefageaafegaefaefeafefaeeacf
                  </p>
                  <small className="text-muted">
                    Last active 1 hour agoegeeaegeffeaveaeaveaeacaecaeeaffe
                  </small>
                </div>
                {/* Group title section ends */}
              </Link>
            </div>
          </div>
          {/* Group left sidebar bottom part section ends */}
        </div>
      </div>
      {/* Friend requests left section ends */}
    </div>
  );
};

export default GroupLeftSidebar;

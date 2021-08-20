import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";

// Icons
import OndemandVideoOutlinedIcon from "@material-ui/icons/OndemandVideoOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import InsertChartOutlinedRoundedIcon from "@material-ui/icons/InsertChartOutlinedRounded";

// Imported files
import "../../css/Header/HeaderDropItems.css";
import profileImg from "../../images/profile.jpg";

// Imported context files
import {DropItemsContext} from "../../ContextData/DropItemsContext";

const HeaderDropItems = () => {
  const {showDropItems, setShowDropItems} = useContext(DropItemsContext);

  useEffect(() => {
    if (showDropItems) {
      document.getElementById("myBody").style.overflowY = "auto";
    } else {
      document.getElementById("myBody").style.overflowY = "hidden";
    }
  }, [showDropItems]);

  return (
    <div className="header__dropItems">
      {/* Header drop all links section starts */}

      <div className="header__dropLinks">
      {/* Profile and facebook page section starts */}
        <Link className="drop__items">
          <div className="drop__profile__img">
            <img src={profileImg} alt="" />
          </div>
          <div className="drop__profileName">
            <p>Wasek Samin</p>
          </div>
        </Link>

        <Link className="drop__items" to="/covid-19-info/" onClick={() => {setShowDropItems(!showDropItems)}}>
          <div className="home__leftIcon">
            <span
              className="iconify"
              data-icon="carbon:coronavirus"
              data-inline="false"
            ></span>
          </div>
          <div className="drop__profileName">
            <p>Covid-19 Information Center</p>
          </div>
        </Link>

        <Link to="/friends" className="drop__items" onClick={() => setShowDropItems(!showDropItems)}>
          <div className="home__leftIcon">
            <span
              className="iconify"
              data-icon="fluent:people-add-20-regular"
              data-inline="false"
            ></span>
          </div>
          <div className="drop__profileName">
            <p>Friends</p>
          </div>
        </Link>

        <Link className="drop__items">
          <div className="home__leftIcon">
            <OndemandVideoOutlinedIcon />
          </div>
          <div className="drop__profileName">
            <p>Watch</p>
          </div>
        </Link>

        <Link to="/groups/feed/" className="drop__items" onClick={() => {setShowDropItems(!showDropItems)}}>
          <div className="home__leftIcon">
            <PeopleAltOutlinedIcon />
          </div>
          <div className="drop__profileName">
            <p>Group</p>
          </div>
        </Link>

        <Link className="drop__items">
          <div className="home__leftIcon">
            <StorefrontOutlinedIcon />
          </div>
          <div className="drop__profileName">
            <p>Market Place</p>
          </div>
        </Link>

        <Link className="drop__items">
          <div className="home__leftIcon">
            <span
              className="iconify"
              data-icon="tabler:speakerphone"
              data-inline="false"
            ></span>
          </div>
          <div className="drop__profileName">
            <p>Ad Center</p>
          </div>
        </Link>

        <Link className="drop__items">
          <div className="home__leftIcon">
            <InsertChartOutlinedRoundedIcon />
          </div>
          <div className="drop__profileName">
            <p>Ads Manager</p>
          </div>
        </Link>

        <Link className="drop__items">
          <div className="home__leftIcon">
            <span
              className="chat__icon iconify"
              data-icon="bi:chat-left-text"
              data-inline="false"
            ></span>
          </div>
          <div className="drop__profileName">
            <p>Chat</p>
          </div>
        </Link>

        <Link className="drop__items">
          <div className="home__leftIcon">
            <span
              className="iconify"
              data-icon="ri:pages-line"
              data-inline="false"
            ></span>
          </div>
          <div className="drop__profileName">
            <p>Pages</p>
          </div>
        </Link>

        <Link className="drop__items">
          <div className="home__leftIcon">
            <span
              className="iconify"
              data-icon="ri:pages-line"
              data-inline="false"
            ></span>
          </div>
          <div className="drop__profileName">
            <p>Pages</p>
          </div>
        </Link>

        <Link className="drop__items">
          <div className="home__leftIcon">
            <span
              className="iconify"
              data-icon="ri:pages-line"
              data-inline="false"
            ></span>
          </div>
          <div className="drop__profileName">
            <p>Pages</p>
          </div>
        </Link>

        <Link className="drop__items">
          <div className="home__leftIcon">
            <span
              className="iconify"
              data-icon="ri:pages-line"
              data-inline="false"
            ></span>
          </div>
          <div className="drop__profileName">
            <p>Pages</p>
          </div>
        </Link>
        {/* Profile and facebook page section starts */}

        <hr className="horizontal__line" />

        {/* User shortcut section starts */}
        <div className="drop__userShortCuts">
          <p className="ps-3 text-muted fw-bold">Your Shortcuts</p>

          <Link className="drop__items">
            <div className="drop__profile__img">
              <img src={profileImg} alt="" />
            </div>
            <div className="drop__profileName">
              <p>DevTech BD</p>
            </div>
          </Link>

          <Link className="drop__items">
            <div className="drop__profile__img">
              <img src={profileImg} alt="" />
            </div>
            <div className="drop__profileName">
              <p>DevTech BD</p>
            </div>
          </Link>

          <Link className="drop__items">
            <div className="drop__profile__img">
              <img src={profileImg} alt="" />
            </div>
            <div className="drop__profileName">
              <p>DevTech BD</p>
            </div>
          </Link>
        </div>
        {/* User shortcut section ends */}
      </div>
      {/* Header drop all links section ends */}
    </div>
  );
};

export default HeaderDropItems;

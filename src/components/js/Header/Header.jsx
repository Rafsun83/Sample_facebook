import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

// Tooltip
import Tooltip from "@material-ui/core/Tooltip";

// Icons
import SearchIcon from "@material-ui/icons/Search";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import OndemandVideoOutlinedIcon from "@material-ui/icons/OndemandVideoOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import SportsEsportsOutlinedIcon from "@material-ui/icons/SportsEsportsOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";

// Imported files
import "../../css/Header/Header.css";
import HeaderDropItems from "./HeaderDropItems";
import logoImg from "../../images/finallogo.jpeg";
import profileImg from "../../images/profile.jpg";

// Imported context files
import {DropItemsContext} from "../../ContextData/DropItemsContext";

const Header = () => {
  const {showDropItems, setShowDropItems} = useContext(DropItemsContext);

  const onDropItems = () => {
    setShowDropItems(!showDropItems);

    if (showDropItems) {
      document.getElementById("myBody").style.overflowY = "auto";
    } else {
      document.getElementById("myBody").style.overflowY = "hidden";
    }
  }

  return (
    <div className="header">
      {/* Header left section starts */}
      <div className="header__links">
        {/* Logo image section starts */}
        <Link className="logo__img" to="/">
          <img src={logoImg} alt="" />
        </Link>
        {/* Logo image section ends */}

        {/* Header searchbar section starts */}
        <div className="search__onMaxScreen">
          <form method="GET" className="header__searchbar">
            <SearchIcon className="header__searchIcon" />
            <input type="search" placeholder="Search Fivvour Business" />
          </form>
        </div>

        <div className="dropdown search__onMidScreen ms-2">
          <button
            className="dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <SearchIcon className="header__searchIcon" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li className="header__midScreenSearchMenu">
              <form method="GET" className="header__searchbar">
                <input type="search" placeholder="Search Fivvour Business" />
              </form>
            </li>
          </ul>
        </div>
        {/* Header searchbar section ends */}

        <div className="header__icons mobile__burgerMenu">
          <Tooltip title="More">
            <Button className="icon__link" onClick={onDropItems}>
              <MenuIcon className="header__icon" />
            </Button>
          </Tooltip>
        </div>

        {showDropItems && <HeaderDropItems />}
      </div>
      {/* Header left section ends */}

      {/* Header middle content section starts */}
      {/* Header icons section starts */}
      <div className="header__links header__middleSection">
        <div className="header__icons">
          <Tooltip title="Home">
            <Link to="/" className="icon__link">
              <HomeOutlinedIcon className="header__icon" />
            </Link>
          </Tooltip>
        </div>
        <div className="header__icons">
          <Tooltip title="Watch">
            <Link className="icon__link" to="/page/watch/">
              <OndemandVideoOutlinedIcon className="header__icon" />
            </Link>
          </Tooltip>
        </div>
        <div className="header__icons">
          <Tooltip title="Marketplace">
            <Link className="icon__link" to="/marketplace/">
              <StorefrontOutlinedIcon className="header__icon" />
            </Link>
          </Tooltip>
        </div>
        <div className="header__icons">
          <Tooltip title="Groups">
            <Link to="" className="icon__link">
              <PeopleAltOutlinedIcon className="header__icon" />
            </Link>
          </Tooltip>
        </div>
        <div className="header__icons">
          <Tooltip title="Gaming">
            <Link className="icon__link">
              <SportsEsportsOutlinedIcon className="header__icon" />
            </Link>
          </Tooltip>
        </div>
        <div className="header__icons tab__burgerMenu">
          <Tooltip title="More">
            <Button
              className="icon__link"
              onClick={onDropItems}
            >
              <MenuIcon className="header__icon" />
            </Button>
          </Tooltip>

          {showDropItems && <HeaderDropItems />}
        </div>
      </div>
      {/* Header icons section ends */}
      {/* Header middle content section ends */}

      {/* Header right section starts */}
      <div className="header__links">
        {/* User profile section starts */}
        <Tooltip className="your__profileLink" title="Your Profile">
          <div className="profile__section">
            <Link className="user__profile" to="/timelinepage">
              <div className="userProfile__img">
                <img src={profileImg} alt="" />
              </div>
              <div className="user__firstName">
                <p>Wasek</p>
              </div>
            </Link>
          </div>
        </Tooltip>
        {/* User profile section ends */}

        {/* Create post section starts */}
        <Tooltip title="Create">
          <div className="right__icons">
            <AddOutlinedIcon className="right__icon" />
          </div>
        </Tooltip>
        {/* Create post section ends */}

        {/* Show all chat section starts */}
        <Tooltip title="Chat">
          <div className="right__icons">
            <ChatIcon className="right__icon" />
          </div>
        </Tooltip>
        {/* Show all chat section ends */}

        {/* Show all notification section starts */}
        <Tooltip title="Notifications">
          <div className="right__icons">
            <Link to="/notification/">
               <NotificationsIcon className="right__icon" />
            </Link>
          </div>
        </Tooltip>
        {/* Show all notification section ends */}

        {/* Show arrow drop section starts */}
        <Tooltip title="Account">
          <div className="right__icons">
            <ArrowDropDownIcon className="right__icon arrow__drop" />
          </div>
        </Tooltip>
        {/* Show arrow drop section ends */}
      </div>
      {/* Header right section ends */}
    </div>
  );
};

export default Header;

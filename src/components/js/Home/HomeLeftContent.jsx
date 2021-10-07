import React from "react";
import { Link } from "react-router-dom";

// Icons
import OndemandVideoOutlinedIcon from "@material-ui/icons/OndemandVideoOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import InsertChartOutlinedRoundedIcon from "@material-ui/icons/InsertChartOutlinedRounded";

// Imported files
import profileImg from "../../images/profile.jpg";
import "../../css/Home/HomeLeftContent.css";

const HomeLeftContent = () => {
  return (
    <div className="home__left">
      <div className="home__leftSection">
        {/* Profile section starts */}
        <Link className="home__leftLinks">
          <div className="home__leftContent">
        
           <div className="profile__leftImg">
              <img src={profileImg} alt="" />
            </div>
            <Link to="/timelinepage">
            <div className="home__leftText">
              <p>Wasek Samin</p>
            </div>
           </Link>
          </div>
        </Link>
        {/* Profile section ends */}

        {/* Covid center section starts */}
        <Link className="home__leftLinks" to="covid-19-info">
          <div className="home__leftContent">
            <div className="home__leftIcon">
              <span
                className="iconify"
                data-icon="carbon:coronavirus"
                data-inline="false"
              ></span>
            </div>
            <div className="home__leftText">
              <p>Covid-19 Information Center</p>
            </div>
          </div>
        </Link>
        {/* Covid center section ends */}

        {/* Friends section starts */}
        <Link to="/friends" className="home__leftLinks">
          <div className="home__leftContent">
            <div className="home__leftIcon">
              <span
                className="iconify"
                data-icon="fluent:people-add-20-regular"
                data-inline="false"
              ></span>
            </div>
            <div className="home__leftText friends__text">
              <p>Friends</p>
            </div>
          </div>
        </Link>
        {/* Friends section ends */}

        {/* Watch section starts */}
        <Link className="home__leftLinks" to="/page/watch/">
          <div className="home__leftContent">
            <div className="watch__icon">
              <OndemandVideoOutlinedIcon />
            </div>
            <div className="home__leftText">
              <p>Watch</p>
            </div>
          </div>
        </Link>
        {/* Watch section ends */}

        {/* Groups section starts */}
        <Link to="/groups/feed/" className="home__leftLinks">
          <div className="home__leftContent">
            <div className="group__icon">
              <PeopleAltOutlinedIcon />
            </div>
            <div className="home__leftText">
              <p>Groups</p>
            </div>
          </div>
        </Link>
        {/* Groups section ends */}

        {/* Marketplace section starts */}
        <Link className="home__leftLinks" to="/marketplace/">
          <div className="home__leftContent">
            <div className="market__icon">
              <StorefrontOutlinedIcon />
            </div>
            <div className="home__leftText">
              <p>Marketplace</p>
            </div>
          </div>
        </Link>
        {/* Marketplace section ends */}

        {/* Advertising section starts */}
        <Link className="home__leftLinks" to="/page/managepage/">
          <div className="home__leftContent">
            <div className="home__leftIcon">
              <span
                className="iconify"
                data-icon="tabler:speakerphone"
                data-inline="false"
              ></span>
            </div>
            <div className="home__leftText">
              <p>Ad Center</p>
            </div>
          </div>
        </Link>
        {/* Advertising section ends */}

        {/* Advertise manager section starts */}
        <Link className="home__leftLinks">
          <div className="home__leftContent">
            <div className="advertiseManager__icon">
              <InsertChartOutlinedRoundedIcon />
            </div>
            <div className="home__leftText">
              <p>Ads Manager</p>
            </div>
          </div>
        </Link>
        {/* Advertise manager section ends */}

        {/* Chat section starts */}
        <Link className="home__leftLinks">
          <div className="home__leftContent">
            <div className="home__leftIcon">
              <span
                className="chat__icon iconify"
                data-icon="bi:chat-left-text"
                data-inline="false"
              ></span>
            </div>
            <div className="home__leftText">
              <p>Chat</p>
            </div>
          </div>
        </Link>
        {/* Chat manager section ends */}

        {/* Pages section starts */}
        <Link className="home__leftLinks" to="/page/invite/">
          <div className="home__leftContent">
            <div className="home__leftIcon">
              <span
                className="iconify"
                data-icon="ri:pages-line"
                data-inline="false"
              ></span>
            </div>
            <div className="home__leftText">
              <p>Pages</p>
            </div>
          </div>
        </Link>
        {/* Pages manager section ends */}
      </div>
    </div>
  );
};

export default HomeLeftContent;

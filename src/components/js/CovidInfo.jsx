import React from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";

// Icons
import LibraryAddOutlinedIcon from "@material-ui/icons/LibraryAddOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

// Imported files
import "../css/CovidInfo.css";
import "./CovidInfoSlider";
import CovidInfoSlider from "./CovidInfoSlider";
import boardImg from "../images/board.png";
import womanImg from "../images/woman.png";
import virusImg from "../images/virus.png";

const CovidInfo = () => {
  // Show page top section starts
  const showPagebackground = () => {
    return (
      // Page background image section starts
      <div className="page__bg">
        {/* Page info section starts */}
        <div className="page__info">
          <div className="page__bgContent">
            {/* Page title content section starts */}
            <div className="page__titleContent">
              <p className="text-muted">Fivour</p>
              <p className="fw-bold">Covid-19 Information Center</p>
              <p>Follow for updates and notifications</p>
            </div>
            {/* Page title content section starts */}

            {/* Page follow content section starts */}
            <div className="page__followContent">
              <Button className="page__followBtn" variant="contained">
                <LibraryAddOutlinedIcon className="me-2" />
                Follow
              </Button>
              <Tooltip title="Share">
                <Button>
                  <ShareOutlinedIcon />
                </Button>
              </Tooltip>

              <Tooltip title="Info">
                <Button>
                  <InfoOutlinedIcon />
                </Button>
              </Tooltip>
            </div>
            {/* Page follow content section ends */}
          </div>
        </div>
        {/* Page info section ends */}
      </div>
      // Page background image section ends
    );
  };
  // Show page top section ends

  // Show load more about corona virus section starts
  const showLoadMoreAboutCoronaVirus = () => {
    return (
      <div className="covid__learnMore card p-3 my-3">
        <h6 className="fw-bold mb-3">
          Learn more about coronavirus (COVID-19) at corona.gov.bd
        </h6>

        <div className="covid__learnMorePage">
          <Button variant="contained">Visit corona.govt.bd</Button>
          <Tooltip title="Leading Health Organizations">
            <Button variant="contained">
              <InfoOutlinedIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
    );
  };
  // Show load more about corona virus section ends

  // Show covid facts section starts
  const showCovidFactSection = () => {
    return (
      <div className="covid__facts card p-3">
        <h6 className="fw-bold">Facts About Covid-19</h6>
        <p className="text=muted covid__factText">
          These facts come from leading health organizations. They correct
          common, untrue rumors about COVID-19.
        </p>

        <div className="covid__factsContent">
          <Link>
            <div className="covid__img">
              <img src={boardImg} alt="" />
            </div>
            <div>
              <p className="fw-bold covid__factContext">
                Vaccines are throughly tested for safety before they'are made
                available to the public
              </p>
            </div>
          </Link>

          <Link>
            <div className="covid__img">
              <img src={womanImg} alt="" />
            </div>
            <div>
              <p className="fw-bold covid__factContext">
                Vaccines are throughly tested for safety before they'are made
                available to the public
              </p>
            </div>
          </Link>

          <Link>
            <div className="covid__img">
              <img src={virusImg} alt="" />
            </div>
            <div>
              <p className="fw-bold covid__factContext">
                Vaccines are throughly tested for safety before they'are made
                available to the public
              </p>
            </div>
          </Link>
        </div>

        <div className="covid__seeAll my-2">
          <Button variant="contained" className="fw-bold">
            See All
          </Button>
        </div>

        <div className="covid__sources">
          <span>Sources: </span>
          <Link>
            <small>World Health Organization, </small>
          </Link>
          <Link>
            <small>GAVI, the Vaccine Alliance</small>
          </Link>
        </div>
      </div>
    );
  };
  // Show covid facts section ends

  // Show covid follow organization section starts
  const showCovidFollowOrgs = () => {
    return (
      <div className="covid__followOrganizations">
        <div className="card p-3">
          <h6 className="fw-bold">Leading Health Organizations</h6>

          <div className="covid__followOrgs">
            <div className="my-2">
              <div className="covid__followOrgsImg">
                <img src={virusImg} alt="" />
              </div>
              <div className="covid__followOrgsTitle">
                <p className="fw-bold">
                  Directorate Generate of Health Services
                </p>
                <div>
                  <small className="text-muted">Government Organization</small>
                </div>
                <div className="covid__OrgsFollowBtn my-2">
                  <Button variant="contained">Follow</Button>
                  <Button variant="contained">Visit Website</Button>
                </div>
              </div>
            </div>

            <div className="my-2">
              <div className="covid__followOrgsImg">
                <img src={virusImg} alt="" />
              </div>
              <div className="covid__followOrgsTitle">
                <p className="fw-bold">
                  Directorate Generate of Health Services
                </p>
                <div>
                  <small className="text-muted">Government Organization</small>
                </div>
                <div className="covid__OrgsFollowBtn my-2">
                  <Button variant="contained">Follow</Button>
                  <Button variant="contained">Visit Website</Button>
                </div>
              </div>
            </div>

            <div className="my-2">
              <div className="covid__followOrgsImg">
                <img src={virusImg} alt="" />
              </div>
              <div className="covid__followOrgsTitle">
                <p className="fw-bold">
                  Directorate Generate of Health Services
                </p>
                <div>
                  <small className="text-muted">Government Organization</small>
                </div>
                <div className="covid__OrgsFollowBtn my-2">
                  <Button variant="contained">Follow</Button>
                  <Button variant="contained">Visit Website</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  // Show covid follow organization section ends

  return (
    <div className="covid__info container">
      {/* Page top section starts */}
      {showPagebackground()}
      {/* Page top section ends */}

      {/* Covid info content section starts */}
      <div className="covid__infoContent my-3">
        {/* Page left section starts */}
        <div>
          {/* Covid slider */}
          <CovidInfoSlider />
          {/* Learn more about corona virus section starts */}
          {showLoadMoreAboutCoronaVirus()}
          {/* Learn more about corona virus section ends */}

          {/* Covid facts section starts */}
          {showCovidFactSection()}
          {/* Covid facts section ends */}
        </div>
        {/* Page left section ends */}

        {/* Page right section starts */}

        {/* Covid follow organization section starts */}
        {showCovidFollowOrgs()}
        {/* Covid follow organization section starts */}

        {/* Page right section ends */}
      </div>
      {/* Covid info content section ends */}
    </div>
  );
};

export default CovidInfo;

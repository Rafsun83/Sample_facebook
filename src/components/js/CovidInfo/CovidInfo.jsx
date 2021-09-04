import React from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";

// Icons
import LibraryAddOutlinedIcon from "@material-ui/icons/LibraryAddOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

// Imported files
import "../../css/CovidInfo/CovidInfo.css";
import "./CovidInfoSlider";
import CovidInfoSlider from "./CovidInfoSlider";
import CovidPreventionTipSlider from "./CovidPreventionTipSlider";
import boardImg from "../../images/board.png";
import womanImg from "../../images/woman.png";
import virusImg from "../../images/virus.png";
import preventImg from "../../images/prevention.png";
import CovidInfoPosts from "./CovidInfoPosts";
import CovidFollowOrgsSliderForMobile from "./CovidFollowOrgsSliderForMobile";

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
            <div className="page__titleContent mb-2">
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
              <div className="shared__infoBtn">
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
          <Link>
            <Button variant="contained">Visit corona.govt.bd</Button>
          </Link>
          <Tooltip
            className="covid__infoBtn"
            title="Leading Health Organizations"
          >
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
      <div className="covid__facts card my-3 p-3">
        <h6 className="fw-bold">Facts About Covid-19</h6>
        <p className="text=muted covid__factText">
          These facts come from leading health organizations. They correct
          common, untrue rumors about COVID-19.
        </p>

        <div className="covid__factsContent">
          <Link className="mb-2">
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

          <Link className="mb-2">
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

          <Link className="mb-2">
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

        <Link className="covid__seeAll my-2">
          <Button variant="contained" className="fw-bold">
            See All
          </Button>
        </Link>

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
          <h6 className="fw-bold mb-3">Leading Health Organizations</h6>

          <div className="covid__followOrgs">
            <div className="my-2">
              <div className="covid__followOrgsImg">
                <Link>
                  <img src={virusImg} alt="" />
                </Link>
              </div>
              <div className="covid__followOrgsTitle">
                <Link>
                  <p className="fw-bold">
                    Directorate Generate of Health Services
                  </p>
                </Link>
                <div>
                  <small className="text-muted">Government Organization</small>
                </div>
                <div className="covid__OrgsFollowBtn my-2">
                  <Button variant="contained">Follow</Button>
                  <Link>
                    <Button variant="contained">Visit Website</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="my-2">
              <div className="covid__followOrgsImg">
                <Link>
                  <img src={virusImg} alt="" />
                </Link>
              </div>
              <div className="covid__followOrgsTitle">
                <Link>
                  <p className="fw-bold">
                    Directorate Generate of Health Services
                  </p>
                </Link>
                <div>
                  <small className="text-muted">Government Organization</small>
                </div>
                <div className="covid__OrgsFollowBtn my-2">
                  <Button variant="contained">Follow</Button>
                  <Link>
                    <Button variant="contained">Visit Website</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="my-2">
              <div className="covid__followOrgsImg">
                <Link>
                  <img src={virusImg} alt="" />
                </Link>
              </div>
              <div className="covid__followOrgsTitle">
                <Link>
                  <p className="fw-bold">
                    Directorate Generate of Health Services
                  </p>
                </Link>
                <div>
                  <small className="text-muted">Government Organization</small>
                </div>
                <div className="covid__OrgsFollowBtn my-2">
                  <Button variant="contained">Follow</Button>
                  <Link>
                    <Button variant="contained">Visit Website</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  // Show covid follow organization section ends

  const showCovidFollowOrgsForMobileScreen = () => {
    return (
      <div className="covid__followOrganizationsMobile">
        <div className="card p-3">
          <h6 className="fw-bold mb-3">Leading Health Organizations</h6>

          <CovidFollowOrgsSliderForMobile />
        </div>
      </div>
    );
  };

  // Show covid prevention tip section starts
  const showCovidPreventionTip = () => {
    return (
      <div className="card p-3 covid__preventionCard my-2">
        <h6 className="fw-bold">Common Prevention Tips</h6>
        <div className="mb-3">
          <small className="text-muted">Protect yourself and others</small>
        </div>

        {/* Covid prevention tip slider */}
        <CovidPreventionTipSlider />

        <div className="covid__preventionSource">
          <small>Source: World Health Organization</small>
        </div>
      </div>
    );
  };
  // Show covid prevention tip section ends

  // Show covid find support section starts
  const showCovidFindSupport = () => {
    return (
      <div className="card p-3 my-2">
        <h5 className="fw-bold">Find the Support You Need</h5>
        <p className="text-muted">
          See ideas from experts on positive steps you can take to support your
          emotional health.
        </p>

        <div className="covid__supportContent">
          <Link className="covid__supportContext mb-3">
            <div className="covid__supportImg">
              <img src={preventImg} alt="" />
            </div>

            <div>
              <small className="text-muted">5 Tips</small>

              <h5 className="fw-bold">Experiencing Domestic Abuse</h5>
            </div>
          </Link>
        </div>

        <div className="covid__supportContent mb-3">
          <Link className="covid__supportContext">
            <div className="covid__supportImg">
              <img src={preventImg} alt="" />
            </div>

            <div>
              <small className="text-muted">5 Tips</small>

              <h5 className="fw-bold">Experiencing Domestic Abuse</h5>
            </div>
          </Link>
        </div>
      </div>
    );
  };
  // Show covid find support section ends

  // Show covid emotional section starts
  const showCovidEmotionalHealth = () => {
    return (
      <div className="card p-3 my-2">
        <h5 className="fw-bold">Emotional Health</h5>
        <p className="text-muted">
          See ideas from experts on positive steps you can take to support your
          emotional health.
        </p>

        <div className="covid__supportContent">
          <Link className="covid__supportContext mb-3">
            <div className="covid__supportImg">
              <img src={preventImg} alt="" />
            </div>

            <div className="mt-1">
              <small className="text-muted">7 Tips</small>

              <h5 className="fw-bold">Depression What You Should Know</h5>
            </div>
          </Link>
        </div>

        <div className="covid__supportContent mb-3">
          <Link className="covid__supportContext">
            <div className="covid__supportImg">
              <img src={preventImg} alt="" />
            </div>

            <div className="mt-1">
              <small className="text-muted">6 Tips</small>

              <h5 className="fw-bold">Managing Stress</h5>
            </div>
          </Link>
        </div>

        <div className="covid__supportContent mb-3">
          <Link className="covid__supportContext">
            <div className="covid__supportImg">
              <img src={preventImg} alt="" />
            </div>

            <div className="mt-1">
              <small className="text-muted">6 Tips</small>

              <h5 className="fw-bold">Navigating Grief and Loss</h5>
            </div>
          </Link>
        </div>

        {/* Visit emotional health button section starts */}
        <Link className="covid__visitEmotionalHealthBtn">
          <Button variant="contained">Visit Emotional Health</Button>
        </Link>
        {/* Visit emotional health button section ends */}
      </div>
    );
  };
  // Show covid emotional section ends

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

          {/* Covid page posts section starts */}
          <CovidInfoPosts />
          {/* Covid page posts section ends */}

          {/* Covid prevention tips section starts */}
          {showCovidPreventionTip()}
          {/* Covid prevention tips section ends */}

          {/* For small/medium screen */}
          {/* Covid follow organization section starts */}
          {showCovidFollowOrgsForMobileScreen()}
          {/* Covid follow organization section starts */}

          {/* Covid find support section starts */}
          {showCovidFindSupport()}
          {/* Covid find support section ends */}

          {/* Covid emotional health section starts */}
          {showCovidEmotionalHealth()}
          {/* Covid emotional health section ends */}
        </div>
        {/* Page left section ends */}

        {/* Page right section starts */}

        {/* For big screen */}
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

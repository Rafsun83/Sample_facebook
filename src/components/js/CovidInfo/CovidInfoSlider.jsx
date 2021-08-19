import React from "react";
import Slider from "react-slick";
import Button from "@material-ui/core/Button";

// Icons
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Imported files
import "../../css/CovidInfo/CovidInfoSlider.css";

const CovidInfoSlider = () => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.75,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 1.75,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 575,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 1.3,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 430,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };

  // Dummy data
  const bdNewCase = 11463;
  const bdTotalCase = 1365158;
  const globalNewCase = 654424;
  const globalTotalCase = 201198793;

  return (
    <div className="covid__card card p-3">
      {/* Covid info published date section starts */}
      <div className="covid__infoPublishedDate">
        <div>
          <small className="text-muted">August 10, 2021</small>
          <h6 className="fw-bold">Latest Updates</h6>
        </div>
        <div>
          <Button>
            <InfoOutlinedIcon />
          </Button>
        </div>
      </div>
      {/* Covid info published date section ends */}

      {/* Covid info slider section starts */}
      <Slider {...settings} className="covid__infoSlider">
        {/* Covid card info section starts */}
        <div className="covid__infoCard card p-3">
          <div className="covid__country mb-2">
            <h6 className="fw-bold">Bangladesh</h6>
          </div>
          <div className="covid__caseContent">
            <div>
              <small className="text-muted">New Cases</small>
              <div>
                <span
                  className="iconify"
                  data-icon="foundation:graph-bar"
                ></span>
              </div>
            </div>
            <div>
              <small className="text-muted">Yesterday</small>
              <p className="fw-bold">+{bdNewCase.toLocaleString()}</p>
            </div>
            <div>
              <small className="text-muted">Total Cases</small>
              <p className="fw-bold">{bdTotalCase.toLocaleString()}</p>
            </div>
          </div>
          <div>
            <small className="text-muted covid__infoUpdatedTime">
              Updated 3 hours ago
            </small>
          </div>
        </div>
        <div className="covid__infoCard card p-3">
          <div className="covid__country mb-2">
            <h6 className="fw-bold">Global</h6>
          </div>
          <div className="covid__caseContent">
            <div>
              <small className="text-muted">New Cases</small>
              <div>
                <span
                  className="iconify"
                  data-icon="foundation:graph-bar"
                ></span>
              </div>
            </div>
            <div>
              <small className="text-muted">Yesterday</small>
              <p className="fw-bold">+{globalNewCase.toLocaleString()}</p>
            </div>
            <div>
              <small className="text-muted">Total Cases</small>
              <p className="fw-bold">{globalTotalCase.toLocaleString()}</p>
            </div>
          </div>
          <div>
            <small className="text-muted covid__infoUpdatedTime">
              Updated 3 hours ago
            </small>
          </div>
        </div>

        {/* Covid more data section starts */}
        <div className="covid__moreData card p-3">
          <div>
            <div className="covid__moreDataArrowIcon">
              <ArrowRightAltOutlinedIcon />
            </div>
            <p className="fw-bold">See More Data</p>
          </div>
        </div>
        {/* Covid more data section ends */}

        <div className="hide__slider"></div>
        {/* Covid card info section ends */}
      </Slider>
      {/* Covid info slider section ends */}
    </div>
  );
};

export default CovidInfoSlider;

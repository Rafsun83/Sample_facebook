import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Imported files
import "../../css/CovidInfo/CovidPreventionTipSlider.css";
import preventImg from "../../images/prevention.png";

const CovidPreventionTipSlider = () => {
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
        breakpoint: 500,
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

  return (
    <Slider {...settings} className="covid__infoSlider">
      <div className="card covid__preventionSliderCard">
        <div className="covid__preventionImg">
          <img src={preventImg} alt="" />
        </div>

        <div className="covidPrevention__context px-3 mt-2 mb-3">
          <p>
            When you can’t keep a safe distance from others, cover your mouth
            and nose with a mask
          </p>
        </div>
      </div>

      <div className="covid__preventionSliderCard card">
        <div className="covid__preventionImg">
          <img src={preventImg} alt="" />
        </div>

        <div className="covidPrevention__context px-3 mt-2 mb-3">
          <p>
            When you can’t keep a safe distance from others, cover your mouth
            and nose with a mask
          </p>
        </div>
      </div>

      <div className="covid__preventionSliderCard card">
        <div className="covid__preventionImg">
          <img src={preventImg} alt="" />
        </div>

        <div className="covidPrevention__context px-3 mt-2 mb-3">
          <p>
            When you can’t keep a safe distance from others, cover your mouth
            and nose with a mask
          </p>
        </div>
      </div>

      <div className="hide__slider"></div>
    </Slider>
  );
};

export default CovidPreventionTipSlider;

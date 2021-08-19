import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Imported files
import virusImg from "../../images/virus.png";
import "../../css/CovidInfo/CovidFollowOrgsSliderForMobile.css";

const CovidFollowOrgsSliderForMobile = () => {
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
      <div className="card p-3">
        <div className="covid__followOrgsMobileImg mx-auto">
          <Link>
            <img src={virusImg} alt="" />
          </Link>
        </div>

        <div className="text-center covid__followOrgsMobileContext mt-1 mb-2">
          <Link>
            <p className="fw-bold">Directorate Generate of Health Service</p>
          </Link>

          <div>
            <small className="text-muted">Government Organization</small>
          </div>
        </div>

        <div className="covid__followOrgsMobileFollowBtns">
          <Button variant="contained">Follow</Button>
          <Link>
            <Button variant="contained">Visit Website</Button>
          </Link>
        </div>
      </div>

      <div className="card p-3">
        <div className="covid__followOrgsMobileImg mx-auto">
          <Link>
            <img src={virusImg} alt="" />
          </Link>
        </div>

        <div className="text-center covid__followOrgsMobileContext mt-1 mb-2">
          <Link>
            <p className="fw-bold">Directorate Generate of Health Service</p>
          </Link>

          <div>
            <small className="text-muted">Government Organization</small>
          </div>
        </div>

        <div className="covid__followOrgsMobileFollowBtns">
          <Button variant="contained">Follow</Button>
          <Link>
            <Button variant="contained">Visit Website</Button>
          </Link>
        </div>
      </div>

      <div className="card p-3">
        <div className="covid__followOrgsMobileImg mx-auto">
          <Link>
            <img src={virusImg} alt="" />
          </Link>
        </div>

        <div className="text-center covid__followOrgsMobileContext mt-1 mb-2">
          <Link>
            <p className="fw-bold">Directorate Generate of Health Service</p>
          </Link>

          <div>
            <small className="text-muted">Government Organization</small>
          </div>
        </div>

        <div className="covid__followOrgsMobileFollowBtns">
          <Button variant="contained">Follow</Button>
          <Link>
            <Button variant="contained">Visit Website</Button>
          </Link>
        </div>
      </div>

      <div className="card p-3">
        <div className="covid__followOrgsMobileImg mx-auto">
          <Link>
            <img src={virusImg} alt="" />
          </Link>
        </div>

        <div className="text-center covid__followOrgsMobileContext mt-1 mb-2">
          <Link>
            <p className="fw-bold">Directorate Generate of Health Service</p>
          </Link>

          <div>
            <small className="text-muted">Government Organization</small>
          </div>
        </div>

        <div className="covid__followOrgsMobileFollowBtns">
          <Button variant="contained">Follow</Button>
          <Link>
            <Button variant="contained">Visit Website</Button>
          </Link>
        </div>
      </div>

      <div className="card p-3">
        <div className="covid__followOrgsMobileImg mx-auto">
          <Link>
            <img src={virusImg} alt="" />
          </Link>
        </div>

        <div className="text-center covid__followOrgsMobileContext mt-1 mb-2">
          <Link>
            <p className="fw-bold">Directorate Generate of Health Service</p>
          </Link>

          <div>
            <small className="text-muted">Government Organization</small>
          </div>
        </div>

        <div className="covid__followOrgsMobileFollowBtns">
          <Button variant="contained">Follow</Button>
          <Link>
            <Button variant="contained">Visit Website</Button>
          </Link>
        </div>
      </div>

      <div className="hide__slider"></div>
    </Slider>
  );
};

export default CovidFollowOrgsSliderForMobile;

import React from "react";
import Button from "@material-ui/core/Button";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Imported files
import "../../css/Groups/GroupDiscoverSuggestionSlider.css";
import "../../css/Groups/GroupDiscoverCategorySlider.css";
import profileImg from "../../images/Post 1.jpg";

const GroupDiscoverCategorySlider = () => {
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
    slidesToShow: 15,
    slidesToScroll: 15,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 3500,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 13,
          slidesToScroll: 13,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 3000,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 11,
          slidesToScroll: 11,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 2500,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 9,
          slidesToScroll: 9,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 7,
          slidesToScroll: 7,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 5,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 1249,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 6,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 1061,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 5,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 880,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 705,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 501,
        settings: {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 350,
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
    <Slider
      {...settings}
      className="group__discoverSuggestionSliderContent group__discoverCategorySliderContent"
    >
      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Extra */}
      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}
      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg group__discoverCategoryImg">
          <Link>
            <div className="group__discoverOverlay"></div>
            <img src={profileImg} alt="" />
            <p className="px-2">My category</p>
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      <div className="hide__slider"></div>
      {/* Group discover suggested post card section ends */}
    </Slider>
  );
};

export default GroupDiscoverCategorySlider;

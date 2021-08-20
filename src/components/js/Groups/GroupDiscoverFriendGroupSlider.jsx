import React from "react";
import Button from "@material-ui/core/Button";
import Slider from "react-slick";
import { Link } from "react-router-dom";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Icons
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

// Imported files
import "../../css/Groups/GroupDiscoverSuggestionSlider.css";
import profileImg from "../../images/Post 1.jpg";

const GroupDiscoverSuggestionSlider = () => {
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
    slidesToShow: 8,
    slidesToScroll: 8,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 3500,
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
        breakpoint: 3000,
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
        breakpoint: 2500,
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
        breakpoint: 2000,
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
        breakpoint: 1600,
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
        breakpoint: 1249,
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
        breakpoint: 1199,
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
        breakpoint: 1099,
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
        breakpoint: 991,
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
        breakpoint: 540,
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
    <Slider {...settings} className="group__discoverSuggestionSliderContent">
      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg">
          <CloseOutlinedIcon className="group__suggestionCloseIcon" />
          <Link>
            <img src={profileImg} alt="" />
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}

        {/* Group discover suggested post card context section starts */}
        <div className="group__discoverSuggestedPostContext mt-2 mb-3 px-2">
          <div className="mb-2">
            <Link>
              <p className="fw-bold">Laravel Bangladesh Community</p>
            </Link>
            <small className="text-muted">
              10K members <span className="group__postDot">⚈</span> 10 posts day
            </small>
            <div>
              <small className="text-muted fw-bold">
                35 friends are members.
              </small>
            </div>
          </div>
          <div>
            <Button variant="contained">Join Group</Button>
          </div>
        </div>
        {/* Group discover suggested post card context section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Extra */}
      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg">
          <CloseOutlinedIcon className="group__suggestionCloseIcon" />
          <Link>
            <img src={profileImg} alt="" />
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}

        {/* Group discover suggested post card context section starts */}
        <div className="group__discoverSuggestedPostContext mt-2 mb-3 px-2">
          <div className="mb-2">
            <Link>
              <p className="fw-bold">Laravel Bangladesh Community</p>
            </Link>
            <small className="text-muted">
              10K members <span className="group__postDot">⚈</span> 10 posts day
            </small>
            <div>
              <small className="text-muted fw-bold">
                35 friends are members.
              </small>
            </div>
          </div>
          <div>
            <Button variant="contained">Join Group</Button>
          </div>
        </div>
        {/* Group discover suggested post card context section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg">
          <CloseOutlinedIcon className="group__suggestionCloseIcon" />
          <Link>
            <img src={profileImg} alt="" />
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}

        {/* Group discover suggested post card context section starts */}
        <div className="group__discoverSuggestedPostContext mt-2 mb-3 px-2">
          <div className="mb-2">
            <Link>
              <p className="fw-bold">Laravel Bangladesh Community</p>
            </Link>
            <small className="text-muted">
              10K members <span className="group__postDot">⚈</span> 10 posts day
            </small>
            <div>
              <small className="text-muted fw-bold">
                35 friends are members.
              </small>
            </div>
          </div>
          <div>
            <Button variant="contained">Join Group</Button>
          </div>
        </div>
        {/* Group discover suggested post card context section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg">
          <CloseOutlinedIcon className="group__suggestionCloseIcon" />
          <Link>
            <img src={profileImg} alt="" />
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}

        {/* Group discover suggested post card context section starts */}
        <div className="group__discoverSuggestedPostContext mt-2 mb-3 px-2">
          <div className="mb-2">
            <Link>
              <p className="fw-bold">Laravel Bangladesh Community</p>
            </Link>
            <small className="text-muted">
              10K members <span className="group__postDot">⚈</span> 10 posts day
            </small>
            <div>
              <small className="text-muted fw-bold">
                35 friends are members.
              </small>
            </div>
          </div>
          <div>
            <Button variant="contained">Join Group</Button>
          </div>
        </div>
        {/* Group discover suggested post card context section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg">
          <CloseOutlinedIcon className="group__suggestionCloseIcon" />
          <Link>
            <img src={profileImg} alt="" />
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}

        {/* Group discover suggested post card context section starts */}
        <div className="group__discoverSuggestedPostContext mt-2 mb-3 px-2">
          <div className="mb-2">
            <Link>
              <p className="fw-bold">Laravel Bangladesh Community</p>
            </Link>
            <small className="text-muted">
              10K members <span className="group__postDot">⚈</span> 10 posts day
            </small>
            <div>
              <small className="text-muted fw-bold">
                35 friends are members.
              </small>
            </div>
          </div>
          <div>
            <Button variant="contained">Join Group</Button>
          </div>
        </div>
        {/* Group discover suggested post card context section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg">
          <CloseOutlinedIcon className="group__suggestionCloseIcon" />
          <Link>
            <img src={profileImg} alt="" />
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}

        {/* Group discover suggested post card context section starts */}
        <div className="group__discoverSuggestedPostContext mt-2 mb-3 px-2">
          <div className="mb-2">
            <Link>
              <p className="fw-bold">Laravel Bangladesh Community</p>
            </Link>
            <small className="text-muted">
              10K members <span className="group__postDot">⚈</span> 10 posts day
            </small>
            <div>
              <small className="text-muted fw-bold">
                35 friends are members.
              </small>
            </div>
          </div>
          <div>
            <Button variant="contained">Join Group</Button>
          </div>
        </div>
        {/* Group discover suggested post card context section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg">
          <CloseOutlinedIcon className="group__suggestionCloseIcon" />
          <Link>
            <img src={profileImg} alt="" />
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}

        {/* Group discover suggested post card context section starts */}
        <div className="group__discoverSuggestedPostContext mt-2 mb-3 px-2">
          <div className="mb-2">
            <Link>
              <p className="fw-bold">Laravel Bangladesh Community</p>
            </Link>
            <small className="text-muted">
              10K members <span className="group__postDot">⚈</span> 10 posts day
            </small>
            <div>
              <small className="text-muted fw-bold">
                35 friends are members.
              </small>
            </div>
          </div>
          <div>
            <Button variant="contained">Join Group</Button>
          </div>
        </div>
        {/* Group discover suggested post card context section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg">
          <CloseOutlinedIcon className="group__suggestionCloseIcon" />
          <Link>
            <img src={profileImg} alt="" />
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}

        {/* Group discover suggested post card context section starts */}
        <div className="group__discoverSuggestedPostContext mt-2 mb-3 px-2">
          <div className="mb-2">
            <Link>
              <p className="fw-bold">Laravel Bangladesh Community</p>
            </Link>
            <small className="text-muted">
              10K members <span className="group__postDot">⚈</span> 10 posts day
            </small>
            <div>
              <small className="text-muted fw-bold">
                35 friends are members.
              </small>
            </div>
          </div>
          <div>
            <Button variant="contained">Join Group</Button>
          </div>
        </div>
        {/* Group discover suggested post card context section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg">
          <CloseOutlinedIcon className="group__suggestionCloseIcon" />
          <Link>
            <img src={profileImg} alt="" />
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}

        {/* Group discover suggested post card context section starts */}
        <div className="group__discoverSuggestedPostContext mt-2 mb-3 px-2">
          <div className="mb-2">
            <Link>
              <p className="fw-bold">Laravel Bangladesh Community</p>
            </Link>
            <small className="text-muted">
              10K members <span className="group__postDot">⚈</span> 10 posts day
            </small>
            <div>
              <small className="text-muted fw-bold">
                35 friends are members.
              </small>
            </div>
          </div>
          <div>
            <Button variant="contained">Join Group</Button>
          </div>
        </div>
        {/* Group discover suggested post card context section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg">
          <CloseOutlinedIcon className="group__suggestionCloseIcon" />
          <Link>
            <img src={profileImg} alt="" />
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}

        {/* Group discover suggested post card context section starts */}
        <div className="group__discoverSuggestedPostContext mt-2 mb-3 px-2">
          <div className="mb-2">
            <Link>
              <p className="fw-bold">Laravel Bangladesh Community</p>
            </Link>
            <small className="text-muted">
              10K members <span className="group__postDot">⚈</span> 10 posts day
            </small>
            <div>
              <small className="text-muted fw-bold">
                35 friends are members.
              </small>
            </div>
          </div>
          <div>
            <Button variant="contained">Join Group</Button>
          </div>
        </div>
        {/* Group discover suggested post card context section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg">
          <CloseOutlinedIcon className="group__suggestionCloseIcon" />
          <Link>
            <img src={profileImg} alt="" />
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}

        {/* Group discover suggested post card context section starts */}
        <div className="group__discoverSuggestedPostContext mt-2 mb-3 px-2">
          <div className="mb-2">
            <Link>
              <p className="fw-bold">Laravel Bangladesh Community</p>
            </Link>
            <small className="text-muted">
              10K members <span className="group__postDot">⚈</span> 10 posts day
            </small>
            <div>
              <small className="text-muted fw-bold">
                35 friends are members.
              </small>
            </div>
          </div>
          <div>
            <Button variant="contained">Join Group</Button>
          </div>
        </div>
        {/* Group discover suggested post card context section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg">
          <CloseOutlinedIcon className="group__suggestionCloseIcon" />
          <Link>
            <img src={profileImg} alt="" />
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}

        {/* Group discover suggested post card context section starts */}
        <div className="group__discoverSuggestedPostContext mt-2 mb-3 px-2">
          <div className="mb-2">
            <Link>
              <p className="fw-bold">Learn Javascript</p>
            </Link>
            <small className="text-muted">
              10K members <span className="group__postDot">⚈</span> 10 posts day
            </small>
            <div>
              <small className="text-muted fw-bold">
                35 friends are members.
              </small>
            </div>
          </div>
          <div>
            <Button variant="contained">Join Group</Button>
          </div>
        </div>
        {/* Group discover suggested post card context section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg">
          <CloseOutlinedIcon className="group__suggestionCloseIcon" />
          <Link>
            <img src={profileImg} alt="" />
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}

        {/* Group discover suggested post card context section starts */}
        <div className="group__discoverSuggestedPostContext mt-2 mb-3 px-2">
          <div className="mb-2">
            <Link>
              <p className="fw-bold">Laravel Bangladesh Community</p>
            </Link>
            <small className="text-muted">
              10K members <span className="group__postDot">⚈</span> 10 posts day
            </small>
            <div>
              <small className="text-muted fw-bold">
                35 friends are members.
              </small>
            </div>
          </div>
          <div>
            <Button variant="contained">Join Group</Button>
          </div>
        </div>
        {/* Group discover suggested post card context section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg">
          <CloseOutlinedIcon className="group__suggestionCloseIcon" />
          <Link>
            <img src={profileImg} alt="" />
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}

        {/* Group discover suggested post card context section starts */}
        <div className="group__discoverSuggestedPostContext mt-2 mb-3 px-2">
          <div className="mb-2">
            <Link>
              <p className="fw-bold">Laravel Bangladesh Community</p>
            </Link>
            <small className="text-muted">
              10K members <span className="group__postDot">⚈</span> 10 posts day
            </small>
            <div>
              <small className="text-muted fw-bold">
                35 friends are members.
              </small>
            </div>
          </div>
          <div>
            <Button variant="contained">Join Group</Button>
          </div>
        </div>
        {/* Group discover suggested post card context section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg">
          <CloseOutlinedIcon className="group__suggestionCloseIcon" />
          <Link>
            <img src={profileImg} alt="" />
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}

        {/* Group discover suggested post card context section starts */}
        <div className="group__discoverSuggestedPostContext mt-2 mb-3 px-2">
          <div className="mb-2">
            <Link>
              <p className="fw-bold">Laravel Bangladesh Community</p>
            </Link>
            <small className="text-muted">
              10K members <span className="group__postDot">⚈</span> 10 posts day
            </small>
            <div>
              <small className="text-muted fw-bold">
                35 friends are members.
              </small>
            </div>
          </div>
          <div>
            <Button variant="contained">Join Group</Button>
          </div>
        </div>
        {/* Group discover suggested post card context section ends */}
      </div>
      {/* Group discover suggested post card section ends */}

      {/* Group discover suggested post card section starts */}
      <div className="card">
        {/* Group discover suggested post card image section starts */}
        <div className="group__discoverSuggestedPostImg">
          <CloseOutlinedIcon className="group__suggestionCloseIcon" />
          <Link>
            <img src={profileImg} alt="" />
          </Link>
        </div>
        {/* Group discover suggested post card image section ends */}

        {/* Group discover suggested post card context section starts */}
        <div className="group__discoverSuggestedPostContext mt-2 mb-3 px-2">
          <div className="mb-2">
            <Link>
              <p className="fw-bold">Laravel Bangladesh Community</p>
            </Link>
            <small className="text-muted">
              10K members <span className="group__postDot">⚈</span> 10 posts day
            </small>
            <div>
              <small className="text-muted fw-bold">
                35 friends are members.
              </small>
            </div>
          </div>
          <div>
            <Button variant="contained">Join Group</Button>
          </div>
        </div>
        {/* Group discover suggested post card context section ends */}
      </div>

      <div className="hide__slider"></div>
      {/* Group discover suggested post card section ends */}
    </Slider>
  );
};

export default GroupDiscoverSuggestionSlider;

import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Icons
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

// Imported files
import profileImg from "../../images/Post 1.jpg";
import "../../css/Groups/GroupFeedSuggestion.css";

const GroupFeedSuggestion = () => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings} className="group__suggestionSliderSection">
      <div className="card">
        {/* Group feed suggestion slider image section starts */}
        <div className="group__suggestionImg">
          <CloseOutlinedIcon className="group__suggestionCloseIcon" />
          <Link>
            <img src={profileImg} alt="" />
          </Link>
        </div>
        {/* Group feed suggestion slider image section ends */}

        {/* Group feed suggestion context section starts */}
        <div className="group__suggestionContext mt-2 px-2">
          <Link>
            <p className="fw-bold">Fiverr in Bangladesh</p>
          </Link>

          {/* Group feed suggestion total members section starts */}
          <div className="group__suggestedTotalMembers">
            <p className="text-muted">
              327K members <span className="group__postDot">⚈</span> 70 posts a
              day
            </p>
          </div>
          {/* Group feed suggestion total members section ends */}

          {/* Group feed suggestion join button section starts */}
          <div className="group__suggestedJoinBtn">
            <Button variant="contained">Join</Button>
          </div>
          {/* Group feed suggestion join button section ends */}
        </div>
        {/* Group feed suggestion context section ends */}
      </div>

      <div className="card">
        {/* Group feed suggestion slider image section starts */}
        <div className="group__suggestionImg">
          <CloseOutlinedIcon className="group__suggestionCloseIcon" />
          <img src={profileImg} alt="" />
        </div>
        {/* Group feed suggestion slider image section ends */}

        {/* Group feed suggestion context section starts */}
        <div className="group__suggestionContext mt-2 px-2">
          <Link>
            <p className="fw-bold">Fiverr in Bangladesh</p>
          </Link>

          {/* Group feed suggestion total members section starts */}
          <div className="group__suggestedTotalMembers">
            <p className="text-muted">
              327K members <span className="group__postDot">⚈</span> 70 posts a
              day
            </p>
          </div>
          {/* Group feed suggestion total members section ends */}

          {/* Group feed suggestion join button section starts */}
          <div className="group__suggestedJoinBtn">
            <Button variant="contained">Join</Button>
          </div>
          {/* Group feed suggestion join button section ends */}
        </div>
        {/* Group feed suggestion context section ends */}
      </div>

      <div className="card">
        {/* Group feed suggestion slider image section starts */}
        <div className="group__suggestionImg">
          <CloseOutlinedIcon className="group__suggestionCloseIcon" />
          <img src={profileImg} alt="" />
        </div>
        {/* Group feed suggestion slider image section ends */}

        {/* Group feed suggestion context section starts */}
        <div className="group__suggestionContext mt-2 px-2">
          <Link>
            <p className="fw-bold">Fiverr in Bangladesh</p>
          </Link>

          {/* Group feed suggestion total members section starts */}
          <div className="group__suggestedTotalMembers">
            <p className="text-muted">
              327K members <span className="group__postDot">⚈</span> 70 posts a
              day
            </p>
          </div>
          {/* Group feed suggestion total members section ends */}

          {/* Group feed suggestion join button section starts */}
          <div className="group__suggestedJoinBtn">
            <Button variant="contained">Join</Button>
          </div>
          {/* Group feed suggestion join button section ends */}
        </div>
        {/* Group feed suggestion context section ends */}
      </div>
    </Slider>
  );
};
export default GroupFeedSuggestion;

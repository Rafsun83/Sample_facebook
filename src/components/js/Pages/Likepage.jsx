import React from "react";
import { Link } from "react-router-dom";
// css file import
import "../../css/Pages/Likepage.css";
import funImg from "../../images/fun.png";
import profileImg from "../../images/profile.jpg";
import HomeLeftContent from "../Home/HomeLeftContent";
const Likepage = () => {
  return (
    <div className="main-like-section">
      <div>
        <HomeLeftContent />
      </div>
      <div className="likepage-middle-part">
        {/* mobile bar */}
        <div className="like-mobile-bar">
          <div className="mobile-bar-like-pages">
            <span
              className="iconify pages-icon"
              data-icon="mdi:flag-variant"
            ></span>
            <div className="mobile-bar-icon">
              <strong>Your pages</strong>
            </div>
          </div>
          <div className="mobile-bar-like-pages">
            <span
              className="iconify like-icon-mobile"
              data-icon="mdi:account-child-circle"
            ></span>
            <div className="mobile-bar-icon">
              <strong>Discover</strong>
            </div>
          </div>
          <div className="mobile-bar-like-pages">
            <span
              className="iconify like-icon-mobile"
              data-icon="mdi:thumb-up"
            ></span>
            <div className="mobile-bar-icon">
              <strong>Like page</strong>
            </div>
          </div>
        </div>
        {/* mobile bar end        */}
        <h5 className="pages_heading">Your Like pages</h5>
        <div className="like-meme-card">
          {/* Likepage Full card strat  1st*/}
          <div className="like-meme-card">
            <div className="card like-card-memes">
              {/* like page Cover image */}
              <Link className="Like_page_img">
                <img src={funImg} alt="" />
              </Link>
              {/* Like page Cover image end   */}
              {/* Like page  body start */}
              <div className="card-body">
                <div className="like-meme-name">
                  {/* Like page profile img  */}
                  <Link className="like-meme-name">
                    <img src={profileImg} alt="" />
                  </Link>
                  {/* Like page profile image end */}
                  {/* Like page Name and profile like number  */}
                  <div>
                    <h6 className="Like_page_name">
                      Rafsun's meme giuergiufeggfvgegeiurgfiug
                    </h6>
                    <p className="Like_count_total">72 people like this Page</p>
                  </div>
                  {/* Like page  name and profile like number end  */}
                </div>
                {/* Like page like button  */}
                <div className="like-like-btn">
                  <Link className="btn btn-primary button-like">
                    <span
                      className="iconify like-iconify"
                      data-icon="mdi:hand-heart-outline"
                    ></span>{" "}
                    Like
                  </Link>
                </div>
                {/* Like page like button end   */}
              </div>
              {/* Likepage body end  */}
            </div>
          </div>
          {/* Like page full card end   */}

          {/* Likepage Full card strat 2nd */}
          <div className="like-meme-card">
            <div className="card like-card-memes">
              {/* like page Cover image */}
              <Link className="Like_page_img">
                <img src={funImg} alt="" />
              </Link>
              {/* Like page Cover image end   */}
              {/* Like page  body start */}
              <div className="card-body">
                <div className="like-meme-name">
                  {/* Like page profile img  */}
                  <Link className="like-meme-name">
                    <img src={profileImg} alt="" />
                  </Link>
                  {/* Like page profile image end */}
                  {/* Like page Name and profile like number  */}
                  <div>
                    <h6 className="Like_page_name">
                      Rafsun's meme giuergiufeggfvgegeiurgfiug
                    </h6>
                    <p className="Like_count_total">72 people like this Page</p>
                  </div>
                  {/* Like page  name and profile like number end  */}
                </div>
                {/* Like page like button  */}
                <div className="like-like-btn">
                  <Link className="btn btn-primary button-like">
                    <span
                      className="iconify like-iconify"
                      data-icon="mdi:hand-heart-outline"
                    ></span>{" "}
                    Like
                  </Link>
                </div>
                {/* Like page like button end   */}
              </div>
              {/* Likepage body end  */}
            </div>
          </div>
          {/* Like page full card end   */}
        </div>
      </div>
    </div>
  );
};

export default Likepage;

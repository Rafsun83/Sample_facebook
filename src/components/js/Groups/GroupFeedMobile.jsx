import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import InputEmoji from "react-input-emoji";

// Icons
import SettingsIcon from "@material-ui/icons/Settings";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import DraftsOutlinedIcon from "@material-ui/icons/DraftsOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import SearchIcon from "@material-ui/icons/Search";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

// Imported files
import "../../css/Groups/GroupFeedMobile.css";
import profileImg from "../../images/Post 1.jpg";

const GroupFeedMobile = () => {
  const [postText, setPostText] = useState("");
  const [enableWriteComment, setEnableWriteComment] = useState(false);

  function handleOnEmojiClick(e) {
    if (!postText) return;

    console.log(postText);
  }

  const showGroupFeedMobileHeaderSection = () => {
    return (
      <>
        {/* Group feed mobile header section starts */}
        <div className="group__feedMobileHeader my-2 mb-3 px-2">
          <h5 className="fw-bold">Groups</h5>
          {/* Group feed mobile header right section starts */}
          <div className="group__feedMobileHeaderRightSection">
            <Link to="/groups/create/">
              <Button>
                <AddCircleOutlineOutlinedIcon />
              </Button>
            </Link>
            <Button>
              <SettingsIcon />
            </Button>
            {/* Group feed mobile search bar section starts */}
            <div className="group__feedMobileSearchBar">
              <div className="dropdown group__feedMobileSearchButton ms-2">
                <Button
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <SearchIcon />
                </Button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton2"
                >
                  {/* Group feed mobile search bar input section starts */}
                  <li className="group__mobileFeedHeaderSearchForm">
                    <form
                      method="GET"
                      className="group__mobileFeedHeaderSearchBar"
                    >
                      <input
                        type="search"
                        placeholder="Search Fivvour Business"
                      />
                    </form>
                  </li>
                  {/* Group feed mobile search bar input section ends */}
                </ul>
              </div>
            </div>
            {/* Group feed mobile search bar section ends */}
          </div>
          {/* Group feed mobile header right section ends */}
        </div>
      </>
    );
  };

  const showGroupFeedMobileAllPosts = () => {
    return (
      <>
        <div className="card py-3 mb-3">
          {/* Profile Image and name section starts */}
          <div className="homemiddle__otherPostSection">
            <Link className="homemiddle__profileImg">
              <img src={profileImg} alt="" />
            </Link>
            <div className="middle__profileName">
              <p>
                <Link>Wasek Samin</Link>{" "}
                <span className="text-muted">posted an update</span>
              </p>
              <p className="text-muted middle__postTime">2 hours ago</p>
            </div>
          </div>
          {/* Profile Image and name section ends */}
          {/* Post text section starts */}
          <div className="middle__postText">
            <p>Some dummy text...</p>
          </div>
          {/* Post text section ends */}
          {/* Post image section starts */}
          <Link className="middle__postImg">
            <img src={profileImg} alt="" />
          </Link>
          {/* Post image section ends */}
          {/* Post like, comment, share section starts */}
          <div className="middle__alternativeOption mt-3">
            <Button
              className="middle__commentIcon"
              variant="outlined"
              color="primary"
              onClick={() => setEnableWriteComment(true)}
            >
              <ChatBubbleOutlineIcon />
              <span className="ps-1">Comment</span>
            </Button>
            <Button
              className="middle__heartIcon"
              variant="outlined"
              color="secondary"
            >
              <FavoriteBorderOutlinedIcon />
              <span className="ps-1">Like</span>
            </Button>
            <Button
              className="middle__shareIcon"
              variant="outlined"
              color="primary"
            >
              <ShareOutlinedIcon />
              <span className="ps-1">Share</span>
            </Button>
          </div>
          {/* Post like, comment, share section ends */}

          {/* Write comment section starts */}
          {enableWriteComment && (
            <>
              <div className="border container mt-3 mb-2"></div>
              <div className="middle__writeComment">
                <div className="homemiddle__profileImg">
                  <img src={profileImg} alt="" />
                </div>
                <div className="homemiddle__postFormSection">
                  <InputEmoji
                    multiline
                    value={postText}
                    onChange={setPostText}
                    cleanOnEnter
                    onEnter={handleOnEmojiClick}
                    placeholder="Write a public comment..."
                  />
                </div>
              </div>
            </>
          )}
          {/* Write comment section ends */}
        </div>

        <div className="card py-3 mb-3">
          {/* Profile Image and name section starts */}
          <div className="homemiddle__otherPostSection">
            <Link className="homemiddle__profileImg">
              <img src={profileImg} alt="" />
            </Link>
            <div className="middle__profileName">
              <p>
                <Link>Wasek Samin</Link>{" "}
                <span className="text-muted">posted an update</span>
              </p>
              <p className="text-muted middle__postTime">2 hours ago</p>
            </div>
          </div>
          {/* Profile Image and name section ends */}
          {/* Post text section starts */}
          <div className="middle__postText">
            <p>Some dummy text...</p>
          </div>
          {/* Post text section ends */}
          {/* Post image section starts */}
          <Link className="middle__postImg">
            <img src={profileImg} alt="" />
          </Link>
          {/* Post image section ends */}
          {/* Post like, comment, share section starts */}
          <div className="middle__alternativeOption mt-3">
            <Button
              className="middle__commentIcon"
              variant="outlined"
              color="primary"
              onClick={() => setEnableWriteComment(true)}
            >
              <ChatBubbleOutlineIcon />
              <span className="ps-1">Comment</span>
            </Button>
            <Button
              className="middle__heartIcon"
              variant="outlined"
              color="secondary"
            >
              <FavoriteBorderOutlinedIcon />
              <span className="ps-1">Like</span>
            </Button>
            <Button
              className="middle__shareIcon"
              variant="outlined"
              color="primary"
            >
              <ShareOutlinedIcon />
              <span className="ps-1">Share</span>
            </Button>
          </div>
          {/* Post like, comment, share section ends */}

          {/* Write comment section starts */}
          {enableWriteComment && (
            <>
              <div className="border container mt-3 mb-2"></div>
              <div className="middle__writeComment">
                <div className="homemiddle__profileImg">
                  <img src={profileImg} alt="" />
                </div>
                <div className="homemiddle__postFormSection">
                  <InputEmoji
                    multiline
                    value={postText}
                    onChange={setPostText}
                    cleanOnEnter
                    onEnter={handleOnEmojiClick}
                    placeholder="Write a public comment..."
                  />
                </div>
              </div>
            </>
          )}
          {/* Write comment section ends */}
        </div>

        <div className="card py-3 mb-3">
          {/* Profile Image and name section starts */}
          <div className="homemiddle__otherPostSection">
            <Link className="homemiddle__profileImg">
              <img src={profileImg} alt="" />
            </Link>
            <div className="middle__profileName">
              <p>
                <Link>Wasek Samin</Link>{" "}
                <span className="text-muted">posted an update</span>
              </p>
              <p className="text-muted middle__postTime">2 hours ago</p>
            </div>
          </div>
          {/* Profile Image and name section ends */}
          {/* Post text section starts */}
          <div className="middle__postText">
            <p>Some dummy text...</p>
          </div>
          {/* Post text section ends */}
          {/* Post image section starts */}
          <div className="middle__postImg">
            <img src={profileImg} alt="" />
          </div>
          {/* Post image section ends */}
          {/* Post like, comment, share section starts */}
          <div className="middle__alternativeOption mt-3">
            <Button
              className="middle__commentIcon"
              variant="outlined"
              color="primary"
              onClick={() => setEnableWriteComment(true)}
            >
              <ChatBubbleOutlineIcon />
              <span className="ps-1">Comment</span>
            </Button>
            <Button
              className="middle__heartIcon"
              variant="outlined"
              color="secondary"
            >
              <FavoriteBorderOutlinedIcon />
              <span className="ps-1">Like</span>
            </Button>
            <Button
              className="middle__shareIcon"
              variant="outlined"
              color="primary"
            >
              <ShareOutlinedIcon />
              <span className="ps-1">Share</span>
            </Button>
          </div>
          {/* Post like, comment, share section ends */}

          {/* Write comment section starts */}
          {enableWriteComment && (
            <>
              <div className="border container mt-3 mb-2"></div>
              <div className="middle__writeComment">
                <div className="homemiddle__profileImg">
                  <img src={profileImg} alt="" />
                </div>
                <div className="homemiddle__postFormSection">
                  <InputEmoji
                    multiline
                    value={postText}
                    onChange={setPostText}
                    cleanOnEnter
                    onEnter={handleOnEmojiClick}
                    placeholder="Write a public comment..."
                  />
                </div>
              </div>
            </>
          )}
          {/* Write comment section ends */}
        </div>
      </>
    );
  };

  return (
    <div className="group__feedMobile">
      {/* Group feed mobile header section starts */}
      {showGroupFeedMobileHeaderSection()}
      {/* Group feed mobile header section ends */}

      {/* Group feed mobile pages section starts */}
      <div className="group__feedMobilePagesSecion px-2 mb-3">
        <Link to="/groups/your-group/">
          <PeopleAltOutlinedIcon /> Your Groups
        </Link>
        <Link to="/groups/discover/">
          <ExploreOutlinedIcon /> Discover
        </Link>
        <Link to="/groups/invitations/">
          <DraftsOutlinedIcon /> Invitations
        </Link>
      </div>
      {/* Group feed mobile pages section ends */}

      {/* Group feed mobile all posts section starts */}
      <div className="group__feedMobileAllPosts">
        {showGroupFeedMobileAllPosts()}
      </div>
      {/* Group feed mobile all posts section ends */}
    </div>
  );
};

export default GroupFeedMobile;

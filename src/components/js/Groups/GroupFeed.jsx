import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import InputEmoji from "react-input-emoji";
import { Link } from "react-router-dom";

// Icons
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";

// Imported files
import GroupLeftSidebar from "./GroupLeftSidebar";
import "../../css/Groups/GroupFeed.css";
import profileImg from "../../images/Post 1.jpg";
import GroupFeedSuggestion from "./GroupFeedSuggestion";
import GroupFeedMobile from "./GroupFeedMobile";

// Imported context files
import { DropItemsContext } from "../../ContextData/DropItemsContext";

const GroupFeed = () => {
  const { showDropItems, setShowDropItems } = useContext(DropItemsContext);
  const [onFeedPage, setOnFeedPage] = useState(true);

  const onDropItems = () => {
    setShowDropItems(!showDropItems);

    if (showDropItems) {
      document.getElementById("myBody").style.overflowY = "auto";
    } else {
      document.getElementById("myBody").style.overflowY = "hidden";
    }
  };

  const [postText, setPostText] = useState("");
  const [enableWriteComment, setEnableWriteComment] = useState(false);

  function handleOnEmojiClick(e) {
    if (!postText) return;

    console.log(postText);
  }

  const showGroupRightAllPosts = () => {
    return (
      <div className="group__rightPostSection">
        <small className="text-muted fw-bold">Recent Activity</small>

        <div className="group__rightAllPosts mt-3">
          {/* Group right post card content section starts */}
          <div className="card py-3 mb-3">
            {/* Profile Image and name section starts */}
            <div className="homemiddle__otherPostSection">
              <Link className="homemiddle__profileImg">
                <img src={profileImg} alt="" />
              </Link>
              <div className="middle__profileName group__postGroupName">
                <Link className="group__postTitle">
                  <p className="fw-bold">Python</p>
                </Link>
                <small className="text-muted">
                  <Link className="group__postUsername">Rabbith Alam Arko</Link>{" "}
                  <span className="group__postDot">⚈</span> 1h{" "}
                  <span className="group__postDot">⚈</span>{" "}
                  <Tooltip title="Members of Python">
                    <SupervisedUserCircleOutlinedIcon className="group__peopleIcon" />
                  </Tooltip>
                </small>
              </div>
            </div>
            {/* Profile Image and name section ends */}
            {/* Post text section starts */}
            <div className="middle__postText mt-2">
              <p>Anyone have experience with automating pipelines in python?</p>
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
          {/* Group right post card content section ends */}

          {/* Extra */}
          <div className="card py-3 mb-3">
            {/* Profile Image and name section starts */}
            <div className="homemiddle__otherPostSection">
              <Link className="homemiddle__profileImg">
                <img src={profileImg} alt="" />
              </Link>
              <div className="middle__profileName group__postGroupName">
                <Link className="group__postTitle">
                  <p className="fw-bold">Python</p>
                </Link>
                <small className="text-muted">
                  <Link className="group__postUsername">Rabbith Alam Arko</Link>{" "}
                  <span className="group__postDot">⚈</span> 1h{" "}
                  <span className="group__postDot">⚈</span>{" "}
                  <Tooltip title="Members of Python">
                    <SupervisedUserCircleOutlinedIcon className="group__peopleIcon" />
                  </Tooltip>
                </small>
              </div>
            </div>
            {/* Profile Image and name section ends */}
            {/* Post text section starts */}
            <div className="middle__postText mt-2">
              <p>Anyone have experience with automating pipelines in python?</p>
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
          {/* Group right post card content section ends */}

          <div className="card py-3 mb-3">
            {/* Profile Image and name section starts */}
            <div className="homemiddle__otherPostSection">
              <Link className="homemiddle__profileImg">
                <img src={profileImg} alt="" />
              </Link>
              <div className="middle__profileName group__postGroupName">
                <Link className="group__postTitle">
                  <p className="fw-bold">Python</p>
                </Link>
                <small className="text-muted">
                  <Link className="group__postUsername">Rabbith Alam Arko</Link>{" "}
                  <span className="group__postDot">⚈</span> 1h{" "}
                  <span className="group__postDot">⚈</span>{" "}
                  <Tooltip title="Members of Python">
                    <SupervisedUserCircleOutlinedIcon className="group__peopleIcon" />
                  </Tooltip>
                </small>
              </div>
            </div>
            {/* Profile Image and name section ends */}
            {/* Post text section starts */}
            <div className="middle__postText mt-2">
              <p>Anyone have experience with automating pipelines in python?</p>
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
          {/* Group right post card content section ends */}
        </div>
      </div>
    );
  };

  const showGroupFeedSuggestion = () => {
    return (
      <>
        {/* Group feed suggestion top header section starts */}
        <div className="card mt-2 p-3">
          <div className="group__suggestionTopSection">
            <h6 className="fw-bold">Suggested For You</h6>
            <Link to="/groups/discover/">
              <Button>See More</Button>
            </Link>
          </div>
          <small className="text-muted mb-3">
            Groups you might be interested in
          </small>
          {/* Group feed suggestion top header section ends */}

          {/* Group feed suggestion slider card section starts */}
          <div className="group__feedSuggestionSliderCard">
            <GroupFeedSuggestion />
          </div>
          {/* Group feed suggestion slider card section ends */}
        </div>
      </>
    );
  };

  return (
    <>
      {/* Group feed desktop version section starts */}
      <div className="group__feed">
        {/* Group left sidebar section starts */}
        <GroupLeftSidebar
          onFeedPage={onFeedPage}
          setOnFeedPage={setOnFeedPage}
        />
        {/* Group left sidebar section ends */}

        {/* Group right section starts */}
        <div className="group__rightSectionContent">
          <div className="group__rightSection mt-4">
            {showGroupRightAllPosts()}
          </div>

          {/* Group feed suggestion section starts */}
          <div className="group__rightSuggestedSection">
            {showGroupFeedSuggestion()}
          </div>
          {/* Group feed suggestion section ends */}

          {/* Group right section ends */}
        </div>
      </div>
      {/* Group feed desktop verstion section ends */}

      {/* Group feed mobile/tab verstion starts */}
      <div className="group__feedMobileSection">
        <GroupFeedMobile />
      </div>
      {/* Group feed mobile/tab verstion ends */}
    </>
  );
};

export default GroupFeed;

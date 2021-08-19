import React, { useState } from "react";
import InputEmoji from "react-input-emoji";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

// Icons
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

// Imported files
import profileImg from "../../images/Post 1.jpg";
import preventImg from "../../images/prevention.png";

const CovidInfoPosts = () => {
  const [postText, setPostText] = useState("");
  const [enableWriteComment, setEnableWriteComment] = useState(false);
  function handleOnEmojiClick(e) {
    if (!postText) return;

    console.log(postText);
  }

  return (
    <div>
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
          <img src={preventImg} alt="" />
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
    </div>
  );
};

export default CovidInfoPosts;

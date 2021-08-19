import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import InputEmoji from "react-input-emoji";

// Icons
import VideoCallIcon from "@material-ui/icons/VideoCall";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

// Imported files
import "../../css/Home/HomeMiddleContent.css";
import profileImg from "../../images/Post 1.jpg";

const HomeMiddleContent = () => {
  const [postText, setPostText] = useState("");
  const [enableWriteComment, setEnableWriteComment] = useState(false);

  function handleOnEmojiClick(e) {
    if (!postText) return;

    console.log(postText);
  }

  // useEffect(() => {
  //     if (postText.length > 0) {
  //         document.querySelector(".react-input-emoji--placeholder").style.visibility = "hidden";
  //     } else {
  //         document.querySelector(".react-input-emoji--placeholder").style.visibility = "visible";
  //     }
  // }, [postText])

  return (
    <div className="home__middle">
      <div className="homemiddle__postContent">
        <div className="card py-3 mb-3">
          <div className="homemiddle__profilePost">
            {/* Home middle profile image section starts */}
            <div className="homemiddle__profileImg">
              <img src={profileImg} alt="" />
            </div>
            {/* Home middle profile image section ends */}
            {/* Home middle post form section starts */}
            <div className="homemiddle__postFormSection">
              <form method="GET" className="homemiddle__postForm">
                <input type="text" placeholder="Post Your Content..." />
              </form>
            </div>
            {/* Home middle post form section ends */}
          </div>
          <hr />
          {/* Home middle alternative post section starts */}
          <div className="home__middleAlternativePost">
            <div className="home__middleVideoIcon">
              <Button
                variant="contained"
                color="primary"
                className="middle__alertnativePostSection middle__videoBtn"
              >
                <VideoCallIcon />
                <span className="ps-1">Live Video</span>
              </Button>
            </div>
            <div className="home__middleVideoIcon">
              <Button className="middle__alertnativePostSection">
                <InsertPhotoIcon className="middle__blueIcon" />
                <span className="ps-1">Photo/Video</span>
              </Button>
            </div>
            <div className="home__middleVideoIcon">
              <Button className="middle__alertnativePostSection">
                <InsertEmoticonIcon className="middle__blueIcon" />
                <span className="ps-1">Feeling/Activity</span>
              </Button>
            </div>
          </div>
          {/* Home middle alternative post section ends */}
        </div>

        {/* Home middle other post section starts */}
        <div className="home__middleAllPosts">
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
                  <Link>Wasek Samin </Link>
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
        </div>
        {/* Home middle other post section ends */}
      </div>
    </div>
  );
};

export default HomeMiddleContent;

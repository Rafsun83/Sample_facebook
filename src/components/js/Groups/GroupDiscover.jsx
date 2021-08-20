import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";

// Imported files
import GroupLeftSidebar from "./GroupLeftSidebar";
import "../../css/Groups/GroupDiscover.css";

// Imported context files
import { DropItemsContext } from "../../ContextData/DropItemsContext";
import { Link } from "react-router-dom";
import GroupDiscoverSuggestionSlider from "./GroupDiscoverSuggestionSlider";
import GroupDiscoverFriendGroupSlider from "./GroupDiscoverFriendGroupSlider";
import GroupDiscoverCategorySlider from "./GroupDiscoverCategorySlider";

const GroupDiscover = () => {
  const { showDropItems, setShowDropItems } = useContext(DropItemsContext);
  const [onFeedPage, setOnFeedPage] = useState(false);

  const onDropItems = () => {
    setShowDropItems(!showDropItems);

    if (showDropItems) {
      document.getElementById("myBody").style.overflowY = "auto";
    } else {
      document.getElementById("myBody").style.overflowY = "hidden";
    }
  };

  return (
    <div className="group__discover">
      <GroupLeftSidebar onFeedPage={onFeedPage} setOnFeedPage={setOnFeedPage} />

      <div className="group__discoverRightSection">
        <div className="group__discoverRightSectionContent mt-3">
          {/* Group discover right suggested header section starts */}
          <div className="group__discoverRightHeader">
            <div>
              <h5 className="fw-bold">Suggested For You</h5>
              <Link to="/groups/categories/?category=suggestion/">
                <Button className="text-primary">See All</Button>
              </Link>
            </div>
            <p className="text-muted">Group you might be interested in</p>
          </div>
          {/* Group discover right suggested header section ends */}

          {/* Group discover suggested group slider section starts */}
          <div className="group__discoverSuggestionSlider">
            <GroupDiscoverSuggestionSlider />
          </div>
          {/* Group discover suggested group slider section ends */}

          {/* Group discover border line */}
          <div className="group__discoverBorder"></div>

          {/* Groups discover right friends header section starts */}
          <div className="group__discoverRightHeader">
            <div>
              <h5 className="fw-bold">Friends' Groups</h5>
              <Link to="/groups/categories/?category=friends/">
                <Button className="text-primary">See All</Button>
              </Link>
            </div>
            <p className="text-muted">Groups your friends are in</p>
          </div>
          {/* Groups discover right friends header section ends */}

          {/* Group discover friend group slider section starts */}
          <div className="group__discoverFriendGroupSlider">
            <GroupDiscoverFriendGroupSlider />
          </div>
          {/* Group discover friend group slider section ends */}

          {/* Group discover border line */}
          <div className="group__discoverBorder"></div>

          {/* Groups discover right category header section starts */}
          <div className="group__discoverRightHeader">
            <div>
              <h5 className="fw-bold">Categories</h5>
              <Link to="/groups/categories/?category=categories/">
                <Button className="text-primary">See All</Button>
              </Link>
            </div>
            <p className="text-muted">
              Find a group by browsing top categories.
            </p>
          </div>
          {/* Groups discover right category header section ends */}

          {/* Group discover category group slider section starts */}
          <div className="group__discoverFriendGroupSlider">
            <GroupDiscoverCategorySlider />
          </div>
          {/* Group discover category group slider section ends */}
        </div>
      </div>
    </div>
  );
};

export default GroupDiscover;

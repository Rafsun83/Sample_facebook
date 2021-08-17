import React, { useContext, useState } from "react";

// Imported files
import GroupLeftSidebar from "./GroupLeftSidebar";

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

  return (
    <div className="group__feed">
      <GroupLeftSidebar onFeedPage={onFeedPage} setOnFeedPage={setOnFeedPage} />
    </div>
  );
};

export default GroupFeed;

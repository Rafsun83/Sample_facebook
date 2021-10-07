import "./App.css";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";

// Imported files
import Header from "./components/js/Header/Header";
import Home from "./components/js/Home/Home";
import CovidInfo from "./components/js/CovidInfo/CovidInfo";
import FriendsHome from "./components/js/Friends/FriendsHome";
import FriendRequests from "./components/js/Friends/FriendRequests";
import FriendSuggestion from "./components/js/Friends/FriendSuggestion";
import AllFriends from "./components/js/Friends/AllFriends";
import GroupFeed from "./components/js/Groups/GroupFeed";
import GroupDiscover from "./components/js/Groups/GroupDiscover";
import Likepage from "./components/js/Pages/Likepage";
import Invitepage from "./components/js/Pages/Invitepage";
import Createpage from "./components/js/Pages/Createpage";
import Timelinepage from "./components/js/Timeline/Timelinepage";
import About from "./components/js/Timeline/About";
import AllFriendlist from "./components/js/Timeline/AllFriendlist";
import Photos from "./components/js/Timeline/Photos";
import Suggestpage from "./components/js/Pages/Suggestpage";
import Yourpages from "./components/js/Pages/Yourpages";
import Managepage from "./components/js/Pages/Managepage";
import Pagelist from "./components/js/Pages/Pagelist";
import Watchpage from "./components/js/Watch/Watchpage";
import Marketplace from "./components/js/Marketplace/Marketplace";
import Listing from "./components/js/Marketplace/Listing";
import Notification from "./components/js/Notification/Notification";





// Imported context files
import { DropItemsContext} from "./components/ContextData/DropItemsContext";








function App() {
  const [showDropItems, setShowDropItems] = useState(false);

  return (<div className="App" >
 <Switch >
      <DropItemsContext.Provider value={
          { showDropItems, setShowDropItems }} >
        <Header /> 
        { /* Home page section starts */} {" "} 
        <Route path="/" exact >
          <Home />
        </Route>{" "} 
        { /* Home page section ends */} 
        { /* Covid info page section starts */} {" "} 
        <Route path="/covid-19-info" exact >
          <CovidInfo />
        </Route>{" "} 
        { /* Covid info page section ends */} 
        { /* Friends home page section starts */} {" "} 
        <Route path="/friends" exact >
          <FriendsHome />
        </Route>{" "} 
        { /* Friends home page section ends */} 
        { /* Friend request page section starts */} {" "} 
        <Route path="/friends/requests/" exact >
          <FriendRequests />
        </Route>{" "} 
        { /* Friend request page section ends */} 
        { /* Friend suggestions page section starts */} {" "} 
        <Route path="/friends/suggestions/" exact >
          <FriendSuggestion />
        </Route>{" "} 
        { /* Friend suggestions page section ends */} 
        { /* All friends page section starts */} {" "} 
        <Route path="/friends/list/" exact >
          <AllFriends />
        </Route>{" "} 
        { /* All friends page section ends */} 
        { /* Group feed page section starts */} {" "} 
        <Route path="/groups/feed/" exact >
          <GroupFeed />
        </Route>{" "} 
        { /* Group feed page section ends */} 
        { /* Group feed discover section starts */} {" "} 
        <Route path="/groups/discover/"exact >
            <GroupDiscover />
       </Route>{" "} 
       { /* Group feed discover section ends */} 
       { /* like page start  */} 
       <Route path="/page/likepage/"exact >
              <Likepage />
        </Route>{" "} 
        { /* like page end  */} 
        { /* invite page start  */} 
        <Route path="/page/invite/"exact >
                <Invitepage />
        </Route> 
        { /* invite page end  */} 
        { /* create page start  */} 
        <Route path="/page/createpage/"exact >
                  <Createpage />
       </Route>

        { /* Timelinepage start  */} 
        <Route path="/timelinepage"exact >
                    <Timelinepage />
       </Route> 
       { /* Timline about start  */} 
       <Route path="/timeline/about/" exact >
                      <About />
       </Route> 
       { /* Timeline about end  */} 
       { /* allfriend list start  */} 
       <Route path="/timeline/allfriend/" exact >
            <AllFriendlist />
       </Route> 
       { /* all friend list end  */} 
       <Route path="/timeline/photos/"exact >
        <Photos />
       </Route> 
       { /* suggests pages start  */}
        <Route path="/page/suggest/"exact >
                            <Suggestpage />
        </Route> 
        { /* suggests pages end  */}

        { /* yourpages start  */}
        <Route path="/page/yourpages/" exact >
                              <Yourpages />

        </Route> 
        { /* Yourpages end  */} 
        { /* managepages start  */} 
        <Route path="/page/managepage/" exact >
                                <Managepage />
        </Route>

        {/* pagelist page start  */}
        <Route path="/page/pagelist/" exact>
          <Pagelist/>
        </Route>
        {/* pagelis page end  */}
        {/* watchpage start  */}
        <Route path="/page/watch/" exact>
          <Watchpage/>

        </Route>
        {/* watchpage end  */}
        {/* Marketplace start */}
        <Route path="/marketplace/" exact>
          <Marketplace/>
        </Route>
        {/* marketplace end */}
        {/* listing page start  */}
        <Route path="/marketplace/Listing/" exact>
          <Listing/>
        </Route>
        {/* Listing page end  */}
        {/* notification start  */}
        <Route path="/notification/" exact>
          <Notification/>
        </Route>

        </DropItemsContext.Provider>                                   
        </Switch>{" "} 
        </div>
  );
}
export default App;
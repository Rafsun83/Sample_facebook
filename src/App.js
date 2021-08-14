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

// Imported context files
import { DropItemsContext } from "./components/ContextData/DropItemsContext";

function App() {
  const [showDropItems, setShowDropItems] = useState(false);

  return (
    <div className="App">
      <Switch>
        <DropItemsContext.Provider value={{ showDropItems, setShowDropItems }}>
          <Header />
          {/* Home page section starts */}
          <Route path="/" exact>
            <Home />
          </Route>
          {/* Home page section ends */}

          {/* Covid info page section starts */}
          <Route path="/covid-19-info" exact>
            <CovidInfo />
          </Route>
          {/* Covid info page section ends */}

          {/* Friends home page section starts */}
          <Route path="/friends" exact>
            <FriendsHome />
          </Route>
          {/* Friends home page section ends */}

          {/* Friend request page section starts */}
          <Route path="/friends/requests/" exact>
            <FriendRequests />
          </Route>
          {/* Friend request page section ends */}

          {/* Friend suggestions page section starts */}
          <Route path="/friends/suggestions/" exact>
            <FriendSuggestion />
          </Route>
          {/* Friend suggestions page section ends */}

          {/* All friends page section starts */}
          <Route path="/friends/list/" exact>
            <AllFriends />
          </Route>
          {/* All friends page section ends */}
        </DropItemsContext.Provider>
      </Switch>
    </div>
  );
}

export default App;

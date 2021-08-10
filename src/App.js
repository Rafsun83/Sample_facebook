import "./App.css";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";

// Imported files
import Header from "./components/js/Header";
import Home from "./components/js/Home";
import CovidInfo from "./components/js/CovidInfo";

// Imported context files
import { DropItemsContext } from "./components/ContextData/DropItemsContext";

function App() {
  const [showDropItems, setShowDropItems] = useState(false);

  return (
    <div className="App">
      <Switch>
        <DropItemsContext.Provider value={{ showDropItems, setShowDropItems }}>
          <Header />
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/covid-19-info" exact>
            <CovidInfo />
          </Route>
        </DropItemsContext.Provider>
      </Switch>
    </div>
  );
}

export default App;

import './App.css';
import { Switch, Route } from 'react-router-dom';

// Imported files
import Header from './components/js/Header';
import Home from './components/js/Home';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

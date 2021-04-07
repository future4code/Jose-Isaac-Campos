import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Initial from './pages/Initial';
import Matches from './pages/Matches';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Initial />
          </Route>
          <Route path="/matches">
            <Matches />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

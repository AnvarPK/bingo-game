import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Play from './pages/Play';
import './firebase/firebase';
import './playground/promises';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" component={Play} />
      </Switch>
    </Router>
  );
}

export default App;

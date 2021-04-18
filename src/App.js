import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Play from './pages/Play';
import Start from './pages/Start';
// import './firebase/firebase';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" component={Start} />
          <Route path="/play" component={Play} />
      </Switch>
    </Router>
  );
}

export default App;

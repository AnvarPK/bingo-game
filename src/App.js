import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Play from './pages/Play';
import Start from './pages/Start';
import Invite from './pages/Invite';
import Join from './pages/join';
// import './firebase/firebase';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Start} />
          <Route path="/play" component={Play} />
          <Route path="/invite" component={Invite} />
          <Route exact path="/join/:boardID" component={Join} />
      </Switch>
    </Router>
  );
}

export default App;

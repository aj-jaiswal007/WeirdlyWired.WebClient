import './App.scss';
import { LoginPage } from './components/pages/LoginPage/LoginPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { HomePage } from './components/pages/HomePage/HomePage';
import { RegisterPage } from './components/pages/RegisterPage/RegisterPage';
import { Protected } from './components/auth/Protected';
import { CHAT_URL, CurrentPath, HOME_URL, LOGIN_URL, REGISTER_URL } from './constants/UrlPaths';
import { ChatPage } from './components/pages/ChatPage/ChatPage';

function App() {
  let CURRENT_URL = CurrentPath();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={LOGIN_URL}>
            <LoginPage />
          </Route>
          <Route path={REGISTER_URL}>
            <RegisterPage />
          </Route>
          <Route path={HOME_URL}>
            <Protected component={HomePage} next={CURRENT_URL} />
          </Route>
          <Route path={CHAT_URL}>
            <Protected component={ChatPage} next={CURRENT_URL} />
          </Route>
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import './App.scss';
import { LoginPage } from './components/pages/LoginPage/LoginPage';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { HomePage } from './components/pages/HomePage/HomePage';
import { RegisterPage } from './components/pages/RegisterPage/RegisterPage';
import { Protected } from './components/auth/Protected';
import { CHAT_URL, CurrentPath, HOME_URL, LOGIN_URL, REGISTER_URL } from './constants/UrlPaths';
import { ChatPage } from './components/pages/ChatPage/ChatPage';

function App() {
  let CURRENT_URL = CurrentPath();
  return (
    <div className="App" style={{ background: "#ffffff" }}>
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN_URL} element={<LoginPage />} />
          <Route path={REGISTER_URL} element={<RegisterPage />} />
          <Route path={HOME_URL} element={<Protected component={HomePage} next={CURRENT_URL} />} />
          <Route path={CHAT_URL} element={<Protected component={ChatPage} next={CURRENT_URL} />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;

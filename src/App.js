import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Otp from "./Components/Otp";
import Account from "./Components/Account";
import Dashboard from "./Components/DashBoard";
import CreatePost from "./Components/CreatePost";
import PostView from "./Components/PostView";
// import Post from "./Components/Post";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route exact={true} path="/create-account" element={<Login />} />
          <Route exact={true} path="/otp" element={<Otp />} />
          <Route exact={true} path="/success/account" element={<Account />} />
          <Route exact={true} path="/dashboard" element={<Dashboard />} />
          <Route exact={true} path="/createpost" element={<CreatePost />} />
          <Route exact={true} path="/post/:postId" element={<PostView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

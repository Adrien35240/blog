import React from "react";
import Signup from "./views/Signup/Signup";
//NOTE:remove container
import { AuthProvider } from "./services/security/contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard";
import CreatePost from "./views/CreatePost/CreatePost";
import Login from "./views/Login/Login";
import PrivateRoute from "./services/security/contexts/PrivateRoute";
import ForgotPassword from "./views/ForgotPassword/ForgotPassword";
import UpdateProfil from "./views/UpdateProfil/UpdateProfil";
import PostContainer from "./views/PostContainer/PostContainer";
import Navbar from "./components/NavigationBar/Navbar";
import FocusPost from "./views/FocusPost/FocusPost";
import UpdatePost from "./views/UpdatePost/UpdatePost";
import HomePage from "./views/Homepage/HomePage";
import "./app.css";
function App() {
  return (
    <div className="container-app">
      <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            <PrivateRoute path="/create-post" component={CreatePost} />
            <PrivateRoute path="/update-post" component={UpdatePost} />
            <PrivateRoute path="/update-profil" component={UpdateProfil} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route path="/home-page" component={HomePage} />
            <Route path="/focus-post/:slug" component={FocusPost} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/blog" component={PostContainer} />
            <Route path="/" component={HomePage} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

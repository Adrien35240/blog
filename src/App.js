import React from "react";
import Signup from "./views/Signup";
//NOTE:remove container
import { AuthProvider } from "./services/security/contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import CreatePost from "./views/CreatePost";
import Login from "./views/Login";
import PrivateRoute from "./services/security/contexts/PrivateRoute";
import ForgotPassword from "./views/ForgotPassword";
import UpdateProfile from "./views/UpdateProfile";
import BlogPage from "./views/BlogPage";
import Navbar from "./components/NavigationBar/Navbar";
import Focus from "./views/Focus";
import Comments from "./views/Comments";
import UpdatePost from "./views/UpdatePost";
import ConnectionDisable from "./views/ConnectionDisable";
import "./css/app.css"
function App() {
  return (<div className="container-app"><Router>
      <AuthProvider>
        <Navbar />
        <Switch>
          <PrivateRoute path="/create-post" component={CreatePost} />
          <PrivateRoute path="/update-post" component={UpdatePost} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route path="/connection-disable" component={ConnectionDisable} />
          <Route path="/focus/:slug" component={Focus} />
          <Route path="/focus/:slug" component={Focus} />
          <Route path="/comments/:slug" component={Comments} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/" component={BlogPage} />
        </Switch>
      </AuthProvider>
    </Router></div>
    
  
    
  );
}

export default App;

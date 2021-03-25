import React from "react";
import Signup from "../views/Signup";
import { Container } from "@material-ui/core";
import { AuthProvider } from "./security/contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import PrivateRoute from "../services/security/contexts/PrivateRoute";
import ForgotPassword from "../views/ForgotPassword";
import UpdateProfile from "../views/UpdateProfile";
import BlogPage from "../views/BlogPage";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Focus from "../views/Focus";
import Comments from "../views/Comments";
function App() {
  return (
    <Container>
      <Router>
        <NavigationBar />
        <AuthProvider>
          <Switch>
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route path="/focus/:slug" component={Focus} />
            <Route path="/comments/:slug" component={Comments} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/" component={BlogPage} />
          </Switch>
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;

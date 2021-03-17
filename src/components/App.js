import React from "react";
import Signup from "./Signup";
import { Container } from "@material-ui/core";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Home from "../pages/Home";
import NavigationBar from "./NavigationBar";
import Focus from '../pages/Focus'
function App() {
  return (
    <Container>
      <Router>
        <NavigationBar />
        <AuthProvider>
          <Switch>
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/focus/:slug" component={Focus}/>             
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/" component={Home} />
          </Switch>
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;

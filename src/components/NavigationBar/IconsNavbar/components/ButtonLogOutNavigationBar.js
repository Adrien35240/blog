import React, { useState } from "react";
import { useAuth } from "../../../../services/security/contexts/AuthContext";
import { useHistory, Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import "./button-icon.css";
function ButtonLogOutNavigationBar(props) {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      console.log("tentative de deconnexion");
      await logout();
      history.push("/");
      console.log("Deconnexion ok");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      {" "}
      {error && <Alert severity="error">{error}</Alert>}
      <button className="icon-navbar" onClick={handleLogout}>{props.name}</button>
    </div>
  );
}

export default ButtonLogOutNavigationBar;

import React, { useState } from "react";
import { useAuth } from "../../../../services/security/contexts/AuthContext";
import { useHistory, Link } from "react-router-dom";
import {AiOutlineLogout} from "react-icons/ai"
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
    <div className="container-icon-navbar">
      {" "}
      {error && <div severity="error">{error}</div>}
      <div id="id-icon-home" onClick={handleLogout}>
        <AiOutlineLogout />
      </div>
    </div>
  );
}

export default ButtonLogOutNavigationBar;

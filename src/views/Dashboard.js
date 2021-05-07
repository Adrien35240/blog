import React, { useState } from "react";
import { useAuth } from "../services/security/contexts/AuthContext";
import { useHistory, Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import DashboardLittleCard from "../components/DashboardLittleCard/DashboardLittleCard";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <form>
        {error && <Alert severity="error">{error}</Alert>}
        <div>Dashboard de : {currentUser.email}</div>
        <DashboardLittleCard userId={currentUser.uid} />
        <button >
          <Link to="/create-post"> Créer un nouveau post</Link>
        </button>
      </form>
    </div>
  );
}

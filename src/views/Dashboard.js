import React, { useState } from "react";
import { useAuth } from "../services/security/contexts/AuthContext";
import { Link } from "react-router-dom";
import DashboardLittleCard from "../components/DashboardLittleCard/DashboardLittleCard";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();

  return (
    <div>
      {error && <div severity="error">{error}</div>}
      <div className="container-dashboard-email">
        Dashboard de : {currentUser.email}
      </div>
      <Link to="/create-post"> Créer un nouveau post</Link>
      <DashboardLittleCard userId={currentUser.uid} />
    </div>
  );
}

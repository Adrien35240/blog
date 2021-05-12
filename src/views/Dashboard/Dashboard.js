import React from "react";
import { useAuth } from "../../services/security/contexts/AuthContext";
import { Link } from "react-router-dom";
import DashboardLittleCard from "../../components/DashboardLittleCard/DashboardLittleCard";
import "./dash-board.css"
export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <div className="container-dash-board">
      <div className="container-dashboard-email">
        Dashboard de : {currentUser.email}
      </div>
      <Link id="link-create-post" to="/create-post"> Créer un nouveau post</Link>
      <DashboardLittleCard userId={currentUser.uid} />
    </div>
  );
}

import React, { useState } from "react";
import { useAuth } from "../services/security/contexts/AuthContext";
import { Link } from "react-router-dom";
import DashboardLittleCard from "../components/DashboardLittleCard/DashboardLittleCard";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();

  return (
    <div>
      <form>
        {error && <div severity="error">{error}</div>}
        <div>Dashboard de : {currentUser.email}</div>
        <DashboardLittleCard userId={currentUser.uid} />
        <button >
          <Link to="/create-post"> Créer un nouveau post</Link>
        </button>
      </form>
    </div>
  );
}

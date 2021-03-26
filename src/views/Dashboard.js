import React, { useState } from "react";
import { useAuth } from "../services/security/contexts/AuthContext";
import { useHistory, Link } from "react-router-dom";
import { Grid, Typography, Button, Input } from "@material-ui/core";
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
    <Grid container justify="center" spacing={2}>
      <form>
        {error && <Alert severity="error">{error}</Alert>}
        <Typography variant="h4" gutterBottom style={{ margintTop: "30px" }}>
          Dashboard de : {currentUser.email}
        </Typography>
  
          <DashboardLittleCard userId={currentUser.uid} />
      
        <Button color="primary" fullWidth={true} variant="contained">
          <Link to="/create-post"> Créer un nouveau post</Link>
        </Button>
      </form>
    </Grid> 
  );
}

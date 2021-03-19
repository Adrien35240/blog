import React, {  useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../services/security/contexts/AuthContext";
import {  useHistory } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    input: {
      width: "100%",
      margin: "10px 0px 10px 0px",
    },
  }));

  const classes = useStyles();

  async function handleSubmit() {
     

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/dashboard");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <Grid container justify="center">
      <Grid item xs={12} md={6}>
        {error && <Alert severity="error">{error}</Alert>}

        <Typography variant="h4" gutterBottom style={{ margintTop: "30px" }}>
          Login
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            required
            id="email"
            label="Email"
            variant="outlined"
            className={classes.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            type="password"
            id="password"
            label="Password"
            variant="outlined"
            className={classes.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            disabled={loading}
            color="primary"
            fullWidth={true}
            variant="contained"
            onClick={() => handleSubmit()}
          >
            Se connecter
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}

import React, { useState } from "react";
import { useAuth } from "../services/security/contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { signup } = useAuth();
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
    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <Grid container justify="center">
      <Grid item xs={12} md={6}>
        {error && <Alert severity="error">{error}</Alert>}

        <Typography variant="h4" gutterBottom style={{ margintTop: "30px" }}>
         Register
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
          />{" "}
          <TextField
            required
            type="password"
            id="passwordConfirm"
            label="Password confirmation"
            variant="outlined"
            className={classes.input}
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
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

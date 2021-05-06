import React, { useState } from "react";
import { useAuth } from "../services/security/contexts/AuthContext";
import { useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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
    <div container justify="center">
      <div>
        {error && <Alert severity="error">{error}</Alert>}

        <div>Login</div>
        <form noValidate autoComplete="off">
          <input
            type="text"
            required
            id="email"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            type="password"
            id="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            disabled={loading}
            color="primary"
            fullWidth={true}
            variant="contained"
            onClick={() => handleSubmit()}
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useAuth } from "../services/security/contexts/AuthContext";
import { useHistory } from "react-router-dom";

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
    <div >
      <div>
        {error && <div severity="error">{error}</div>}

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
            id="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            disabled={loading}
            color="primary"
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

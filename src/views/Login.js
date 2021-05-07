import React, { useState } from "react";
import { useAuth } from "../services/security/contexts/AuthContext";
import { useHistory } from "react-router-dom";
import "../css/login.css";
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
    <div className="container-login">
      {error && <div severity="error">{error}</div>}

      <div className="title-login">Identifiants:</div>

      <input
        placeholder="Login"
        type="text"
        required
        id="email"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Mot de passe"
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
    </div>
  );
}

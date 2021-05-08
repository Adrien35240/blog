import React, { useState } from "react";
import { useAuth } from "../services/security/contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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
    <div >
      <div >
        {error && <div severity="error">{error}</div>}

        <div>Register</div>
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
            required
            type="password"
            id="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <input
            required
            type="password"
            id="passwordConfirm"
            label="Password confirmation"
            variant="outlined"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
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

import React, { useRef, useState } from "react";
import { useAuth } from "../services/security/contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <div>
        <div>
          <h2>Update Profile</h2>
          {error && <div variant="danger">{error}</div>}
          <div onSubmit={handleSubmit}>
            <div id="email">
              <div>Email</div>
              <div
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </div>
            <div id="password">
              <div>Password</div>
              <div
                type="password"
                ref={passwordRef}
                placeholder="laisser vide pour conserver le même"
              />
            </div>
            <div id="password-confirm">
              <div>Password Confirmation</div>
              <div
                type="password"
                ref={passwordConfirmRef}
                placeholder="laisser vide pour conserver le même"
              />
            </div>
            <button disabled={loading} type="submit">
              Update
            </button>
          </div>
        </div>
      </div>
      <div>
        <Link to="/">Cancel</Link>
      </div>
    </>
  );
}

import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, handleRegister } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister({ username, email, password });

    setUsername("");
    setEmail("");
    setPassword("");

    navigate("/login");
  };

  if (loading) {
    return (
      <main>
        <h1>Loading.......</h1>
      </main>
    );
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>

        <form onSubmit={handleSubmit} autoComplete="off">
          {" "}
          <div className="input-group">
            {" "}
            <label htmlFor="username">Username</label>{" "}
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              placeholder="Enter username"
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
            />{" "}
          </div>{" "}
          <div className="input-group">
            {" "}
            <label htmlFor="email">Email</label>{" "}
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter email address"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
          </div>{" "}
          <div className="input-group">
            {" "}
            <label htmlFor="password">Password</label>{" "}
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
          </div>{" "}
          <button type="submit" className="button primary-button">
            {" "}
            Register{" "}
          </button>{" "}
        </form>

        <p>
          Already have an account? <Link to={"/login"}>Login</Link>{" "}
        </p>
      </div>
    </main>
  );
};

export default Register;

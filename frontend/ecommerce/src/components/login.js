import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // For sign up
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (isSignUp) {
      // Sign up
      try {
        const res = await fetch("http://localhost:5000/api/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });
        const data = await res.json();
        if (data.success) {
          localStorage.setItem("user", JSON.stringify(data));
          navigate("/");
        } else {
          setError(data.error || "Sign up failed");
        }
      } catch {
        setError("Server error");
      }
    } else {
      // Sign in
      try {
        const res = await fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (data.success) {
          localStorage.setItem("user", JSON.stringify(data));
          navigate("/");
        } else {
          setError(data.error || "Login failed");
        }
      } catch {
        setError("Server error");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <form onSubmit={handleSubmit}>
        {isSignUp && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
      </form>
      <div style={{ marginTop: 10 }}>
        {isSignUp ? (
          <span>
            Already have an account?{" "}
            <button type="button" onClick={() => setIsSignUp(false)}>
              Sign In
            </button>
          </span>
        ) : (
          <span>
            Don't have an account?{" "}
            <button type="button" onClick={() => setIsSignUp(true)}>
              Sign Up
            </button>
          </span>
        )}
      </div>
    </div>
  );
}

export default Login;
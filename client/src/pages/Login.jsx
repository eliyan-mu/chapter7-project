import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    // send fetch request
    const data = { username: username, password: password };
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.userId) {
        let userInfo = JSON.stringify({
          user_id: result.userId,
          username: username,
        });
        localStorage.setItem("currentUser", userInfo);
        navigate(`/home/${result.userId}`);
      } else {
        alert("Username or password is incorrect, please try again");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred, please try again later.");
    }

    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>

        <h2>Don't hove an account yet? sign up here:</h2>
        <button onClick={() => navigate(`/signup`)}>Sign Up</button>
      </form>
    </div>
  );
};

export default Login;

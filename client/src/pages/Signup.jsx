import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [users_name, setUsers_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignupSubmit = async (e) => {
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
    setUsers_name("");
    setPassword("");
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignupSubmit}>
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
          <label htmlFor="users_name">Name:</label>
          <input
            type="text"
            id="users_name"
            value={users_name}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
        <button type="submit">Signup</button>

        <button onClick={navigate(`/home`)}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

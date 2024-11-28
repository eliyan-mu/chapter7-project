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
    const data = {
      username: username,
      users_name: users_name,
      email: email,
      password: password,
    };

    try {
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      console.log("result: ", result);

      if (res.status !== 200) {
        if (res.status === 509) alert(result.message);
      } else if (result.user.userId) {
        navigate(`/home/${result.user.userId}`);
        let userInfo = JSON.stringify({
          user_id: result.user.userId,
          username: username,
        });
        localStorage.setItem("currentUser", userInfo);
      } else {
        alert("signup was not successful.");
      }
    } catch (error) {
      console.log("Error:", error);
      alert("An error occurred, please try again later.");
    }

    setUsername("");
    setUsers_name("");
    setEmail("");
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
            onChange={(e) => setUsers_name(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
      </form>
    </div>
  );
};

export default Signup;

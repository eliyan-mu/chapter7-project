import React from "react";
import { useNavigate, NavLink, Outlet } from "react-router-dom";
// import {fetchItems} from "../RequestUtils";
function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <>
      <p>Home Page</p>
      <div style={{ marginTop: "-200    px" }}>
        <button onClick={handleLogout}>log-out</button>
        <NavLink to="/home">
          <button>Home</button>
        </NavLink>
        <NavLink to="/todo">
          <button>To-Do</button>
        </NavLink>
        <NavLink to="/post">
          <button>Posts</button>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default Home;

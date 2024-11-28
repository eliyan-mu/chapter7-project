// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import NoPage from "./components/NoPage";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Todo from "./pages/Todo";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NoPage />} />
        </Routes>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home/:user_id" index element={<Home />} />
            <Route path="post" element={<Post />} />
            <Route path="todo" element={<Todo />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

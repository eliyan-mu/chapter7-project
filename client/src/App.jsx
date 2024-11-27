// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import NoPage from "./components/NoPage";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Todo from "./pages/Todo";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/todo" element={<Todo />} />

            <Route path="/login" element={<Login />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

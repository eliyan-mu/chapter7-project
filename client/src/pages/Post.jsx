import React, { useEffect, useState } from "react";
import { fetchItems, fetchAddItem } from "../RequestUlits"; // Importing fetchAddItem and fetchDelete
import { FaSearch } from "react-icons/fa";
import searchItem from "../function";

function Post() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const userId = JSON.parse(localStorage.getItem("currentUser")).user_id;

  // Fetch posts on component mount
  useEffect(() => {
    async function fetchPosts() {
      const data = await fetchItems(`post/${userId}`);
      if (data) {
        setPosts(data);
      }
    }
    fetchPosts();
  }, [userId]);

  // Add new Post
  const addPost = async () => {
    if (!newPost.title || !newPost.body) return;

    const addedPost = await fetchAddItem("post", {
      user_id: userId,
      title: newPost.title,
      body: newPost.body,
    });

    if (addedPost) {
      const updatedPosts = [...posts, { ...addedPost }];
      setPosts(updatedPosts);
    }

    setNewPost({ title: "", body: "" });
  };

  // Delete Post
  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    fetchDelete(`post/${id}`);
  };

  // Handle text change during editing
  const handleEditChange = (e) => {
    setEditingText(e.target.value);
  };

  // Save edited Post
  const saveEdit = (id) => {
    setPosts((prevList) =>
      prevList.map((post) =>
        post.id === id ? { ...post, title: editingText } : post
      )
    );
    setEditingId(null); // Exit editing mode
    setEditingText(""); // Clear the input field
  };

  const styles = {
    searchContainer: {
      display: "flex",
      alignItems: "center",
      marginBottom: "20px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      padding: "5px 10px",
      width: "300px",
    },
    searchIcon: {
      marginRight: "10px",
      color: "#666",
    },
    searchInput: {
      border: "none",
      outline: "none",
      width: "100%",
      padding: "5px",
      fontSize: "16px",
    },
  };

  return (
    <>
      <p>Hello, here is your Posts Page:</p>

      <div style={styles.searchContainer}>
        <FaSearch style={styles.searchIcon} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Posts..."
          style={styles.searchInput}
        />
      </div>

      <input
        type="text"
        placeholder="Post title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <textarea
        placeholder="Post body"
        value={newPost.body}
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
      />
      <button onClick={addPost}>Add Post</button>

      <ul>
        {searchItem(posts, searchQuery).map((post) => (
          <li key={"PostItem" + post.id}>
            {/* edit */}
            {editingId === post.id ? (
              <input
                type="text"
                value={editingText}
                onChange={handleEditChange}
              />
            ) : (
              <span>{post.id + "-" + post.title}</span>
            )}

            {editingId === post.id ? (
              <button onClick={() => saveEdit(post.id)}>Save</button>
            ) : (
              <button
                onClick={() => {
                  setEditingId(post.id);
                  setEditingText(post.title);
                }}
              >
                Edit
              </button>
            )}

            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Post;

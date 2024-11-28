import React, { useEffect, useState } from "react";
import { fetchItems } from "../RequestUlits";
import { FaSearch } from "react-icons/fa";
import searchItem from "../function";
import { FaZ } from "react-icons/fa6";

function ToDo() {
  const [toDoList, setToDoList] = useState([]);
  const [newToDo, setNewToDo] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [ascending, setAscending] = useState(true);
  const userId = JSON.parse(localStorage.getItem("currentUser")).user_id;
  //   const userId = 3;

  useEffect(() => {
    async function fetchToDoList() {
      const data = await fetchItems(`todo/${userId}`);
      console.log(data);
      if (!data) {
        console.log("Error fetching albums;");
        return;
      }
      const updatedData = data.map((item) => ({
        ...item,
        completed: item.completed || false,
      }));
      setToDoList(updatedData);
    }
    fetchToDoList();
  }, []);

  // Handle checkbox change
  const handleCheckboxChange = (id) => {
    setToDoList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const addToDo = () => {
    if (newToDo === "") return;
    const newItem = {
      user_id: user_id,
      id: toDoList.length + 1,
      title: newToDo,
      completed: false,
    };
    setToDoList([...toDoList, newItem]);
    setNewToDo("");
  };

  const deleteItem = (id) => {
    const updatedToDoList = toDoList.filter((item) => item.id !== id);
    setToDoList(updatedToDoList);
    fetchDelete(`todos/${id}`);
  };

  const handleEditChange = (e) => {
    setEditingText(e.target.value);
  };

  const saveEdit = (id) => {
    setToDoList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, title: editingText } : item
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

  const handleSortByStatus = () => {
    const sorted = [...toDoList].sort((a, b) => {
      if (ascending) {
        return a.completed - b.completed;
      } else {
        return b.completed - a.compeleted;
      }
    });

    setToDoList(sorted);
    // handleSort(!ascending);  // Toggle sort order
  };

  return (
    <>
      <p>Hello, here is your To-Do List:</p>

      <div style={styles.searchContainer}>
        <FaSearch style={styles.searchIcon} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search ToDo..."
          style={styles.searchInput}
        />
      </div>

      <input
        type="text"
        placeholder="Add a new task"
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
      />
      <button onClick={addToDo}>Add ToDo</button>
      <button onClick={handleSortByStatus}>sort by UnCompeleted</button>

      <ul>
        {searchItem(toDoList, searchQuery).map((item) => (
          <li key={"ToDoItem" + item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleCheckboxChange(item.id)}
            />

            {/* edit */}
            {editingId === item.id ? (
              <input
                type="text"
                value={editingText}
                onChange={handleEditChange}
              />
            ) : (
              <span>{item.id + "-" + item.title}</span>
            )}

            {editingId === item.id ? (
              <button onClick={() => saveEdit(item.id)}>Save</button>
            ) : (
              <button
                onClick={() => {
                  setEditingId(item.id);
                  setEditingText(item.title);
                }}
              >
                Edit
              </button>
            )}

            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDo;

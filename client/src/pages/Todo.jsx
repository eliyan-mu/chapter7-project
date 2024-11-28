import React, { useEffect, useState } from "react";
import { fetchItems, fetchAddItem, fetchDelete } from "../RequestUlits"; // Importing fetchAddItem
import { FaSearch } from "react-icons/fa";
import searchItem from "../function";

function ToDo() {
  const [toDoList, setToDoList] = useState([]);
  const [newToDo, setNewToDo] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [ascending, setAscending] = useState(true);
  const userId = JSON.parse(localStorage.getItem("currentUser")).user_id;

  // Fetch to-do list on component mount
  useEffect(() => {
    async function fetchToDoList() {
      const data = await fetchItems(`todo/${userId}`);
      if (data) {
        const updatedData = data.map((item) => ({
          ...item,
          completed: item.completed || false,
        }));
        setToDoList(updatedData);
      }
    }
    fetchToDoList();
  }, [userId]);

  // Handle checkbox change (mark as completed)
  const handleCheckboxChange = (id) => {
    setToDoList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Add new To-Do item
  const addToDo = async () => {
    if (newToDo === "") return;
    console.log(userId);
    const newItem = {
      userId: userId,
      title: newToDo,
      completed: 0,
    };

    const addedItem = await fetchAddItem("todo", newItem); // POST request to add item

    if (addedItem) {
      const updatedList = [...toDoList, { ...newItem, id: addedItem.id }];
      setToDoList(updatedList);
    }

    setNewToDo("");
  };

  // Delete To-Do item
  const deleteItem = (id) => {
    const updatedToDoList = toDoList.filter((item) => item.id !== id);
    setToDoList(updatedToDoList);
    fetchDelete(`todo/${id}`);
  };

  // Handle text change during editing
  const handleEditChange = (e) => {
    setEditingText(e.target.value);
  };

  // Save edited To-Do item
  const saveEdit = (id) => {
    setToDoList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, title: editingText } : item
      )
    );
    setEditingId(null); // Exit editing mode
    setEditingText(""); // Clear the input field
  };

  // Handle sorting by completion status
  const handleSortByStatus = () => {
    const sorted = [...toDoList].sort((a, b) => {
      if (ascending) {
        return a.completed - b.completed;
      } else {
        return b.completed - a.completed;
      }
    });

    setToDoList(sorted);
    setAscending(!ascending); // Toggle sort order
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
      <p>Hello, here is your To-Do List:</p>

      <div style={styles.searchContainer}>
        {/* <FaSearch style={styles.searchIcon} /> */}
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
      <button onClick={handleSortByStatus}>Sort by UnCompleted</button>

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

//get all of the item
export async function fetchItems(URL) {
  try {
    const response = await fetch(`http://localhost:3000/${URL}`);
    if (!response.ok) throw "ERROR - cannot fetch data!";
    const data = await response.json();
    console.log("data: ", data);
    return data;
  } catch (error) {
    alert(error);
    return error;
  }
}

//add to item
export async function fetchAddItem(URL, item) {
  return await fetch(`http://localhost:3000/${URL}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(item),
  }).then((response) => {
    console.log(response);
    return response.json();
  });
  //.then((json) => console.log(json));
}

//delete item
export async function fetchDelete(URL) {
  return await fetch(`http://localhost:3000/${URL}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    //.then((json) => console.log(json));
    .catch((e) => alert(e));
}

// Edit To-Do item
export async function fetchEditItem(URL, item) {
  try {
    const response = await fetch(`http://localhost:3000/${URL}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) throw new Error("Error updating the item!");

    const updatedItem = await response.json();
    return updatedItem;
  } catch (error) {
    alert(error);
    return null;
  }
}

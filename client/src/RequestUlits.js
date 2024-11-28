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

//add todolist
export async function fetchAddItem(URL, item) {
  console.log("URL: ", URL);
  console.log("item: ", item);
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

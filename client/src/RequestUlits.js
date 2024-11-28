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

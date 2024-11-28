const searchItem = (items, text) => {
  return items.filter((task) =>
    task.title.toLowerCase().includes(text.toLowerCase())
  );
};
export default searchItem;

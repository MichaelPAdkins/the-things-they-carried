export const getAllItems = () => {
    return fetch(`http://localhost:8088/items`).then((res) => res.json())
}
  export const deleteItem = (itemId) => {
    return fetch(`http://localhost:8088/items/${itemId}`, {
      method: 'DELETE',
    }).then((res) => res.ok);
  };
  
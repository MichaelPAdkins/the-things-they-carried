export const getAllItems = () => {
    return fetch(`http://localhost:8088/items`).then((res) => res.json())
}

export const createItem = (items) => {
    return fetch(`http://localhost:8088/items`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(items)
    })
}
export const getItemById = (item) => {
    return fetch(
        `http://localhost:8088/items/${item}?_expand=user`
      ).then((res) => res.json());
  }

  export const updateItem = (myItem) => {
    return fetch(`http://localhost:8088/items/${myItem.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myItem)
    })
  }

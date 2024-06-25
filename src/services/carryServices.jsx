export const getAllCarry = () => {
    return fetch(`http://localhost:8088/carry`).then((res) => res.json())
}

export const createCarry = (carry) => {
    return fetch(`http://localhost:8088/carry`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(carry)
    })
}
export const getCarryById = (carry) => {
    return fetch(
        `http://localhost:8088/carrys/${carry}?_expand=user`
      ).then((res) => res.json());
  }

  export const updateCarry = (myCarry) => {
    return fetch(`http://localhost:8088/carry/${myCarry.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myCarry)
    })
  }

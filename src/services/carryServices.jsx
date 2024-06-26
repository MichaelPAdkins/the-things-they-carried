export const getAllCarry = () => {
    return fetch(`http://localhost:8088/carries`).then((res) => res.json())
}

export const createCarry = (carry) => {
    return fetch(`http://localhost:8088/carries`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(carry)
    })
}
export const getCarryById = (carry) => {
    return fetch(
        `http://localhost:8088/carries/${carry}?_expand=user`
      ).then((res) => res.json());
  }

  export const updateCarry = (myCarry) => {
    return fetch(`http://localhost:8088/carries/${myCarry.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myCarry)
    })
  }

  export const getCarryItems = () => {
    return fetch(`http://localhost:8088/Carry_Items?_expand=item&_expand=carry`)
      .then((res) => res.json());
  };
// ItemForm.jsx

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createItem, getItemById, updateItem } from "../../services/itemServices.jsx";
import { Button, Form, Input } from "reactstrap";
import "./Item.css";

export const ItemCreateForm = ({ currentUser }) => {
  const { id } = useParams(); // Get the item ID from the URL
  const [myItem, setMyItem] = useState({
    name: "",
    serial: "", 
    material: "",
    type: "",
    value: "",
    photo: "",
    storable: false,
    canStore: false
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // If there's an ID, we're in edit mode and should fetch the item
      getItemById(id).then((item) => setMyItem(item));
    }
  }, [id]);

  const handleSave = (event) => {
    event.preventDefault();
    const newItem = {
      userId: currentUser.id,
      ...myItem
    };
    if (id) {
      updateItem(newItem).then(() => navigate("/inventory"));
    } else {
      createItem(newItem).then(() => navigate("/inventory"));
    }
  };

  return (
    <Form>
      <h2 className="header-new-item">{id ? "Edit Item" : "Create New Item"}</h2>
      <div>
        <Input
          type="text"
          placeholder="Name"
          value={myItem.name}
          onChange={(e) => setMyItem({...myItem, name: e.target.value})}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Serial"
          value={myItem.serial}
          onChange={(e) => setMyItem({...myItem, serial: e.target.value})}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Material"
          value={myItem.material}
          onChange={(e) => setMyItem({...myItem, material: e.target.value})}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Type"
          value={myItem.type}
          onChange={(e) => setMyItem({...myItem, type: e.target.value})}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Value"
          value={myItem.value}
          onChange={(e) => setMyItem({...myItem, value: e.target.value})}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Photo URL"
          value={myItem.photo}
          onChange={(e) => setMyItem({...myItem, photo: e.target.value})}
        />
      </div>
      <div>
        <div>Can you pack it?</div>
        <Input
          type="checkbox"
          checked={myItem.storable}
          onChange={(e) => setMyItem({...myItem, storable: e.target.checked})}
        />
      </div>
      <div>
        <div>Container?</div>
        <Input
          type="checkbox"
          checked={myItem.canStore}
          onChange={(e) => setMyItem({...myItem, canStore: e.target.checked})}
        />
      </div>

      <fieldset>
        <Button color="dark" onClick={handleSave}>{id ? "Update Item" : "Submit New Item"}</Button>
      </fieldset>
    </Form>
  );
};

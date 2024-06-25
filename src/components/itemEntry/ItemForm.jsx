import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createItem } from "../../services/itemServices.jsx";
import { Button, Form, Input } from "reactstrap";
import "./Item.css";


export const ItemCreateForm = ({currentUser}) => {
  const [myItem, setMyItem] = useState({
    name: "",
    serial: "", 
    material: "",
    type: "",
    value: "",
    photo:"",
    storable: false,
    canStore: false
  });

  const navigate = useNavigate();

  const handleSave = (item) => {
    item.preventDefault();
    const newItem = {
      userId: currentUser.id,
      name: myItem.name,
      serial: myItem.serial,
      material: myItem.material,
      type: myItem.type,
      value: myItem.value,
      photo: myItem.photo,
      storable: myItem.storable,
      canStore: myItem.canStore
    }
    createItem(newItem).then(() => {
      navigate("/");
    });
  };

  return (
    <Form>
      <h2 className="header-new-item">Create New Item</h2>
      <div>
        <Input
          type="text"
          placeholder="Name"
          onChange={(item) => {
            const itemCopy = { ...myItem };
            itemCopy.name = item.target.value;
            setMyItem(itemCopy);
          }}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Serial"
          onChange={(item) => {
            const itemCopy = { ...myItem };
            itemCopy.serial = item.target.value;
            setMyItem(itemCopy);
          }}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Material"
          onChange={(item) => {
            const itemCopy = { ...myItem };
            itemCopy.material = item.target.value;
            setMyItem(itemCopy);
          }}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Type"
          onChange={(item) => {
            const itemCopy = { ...myItem };
            itemCopy.type = item.target.value;
            setMyItem(itemCopy);
          }}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Value"
          onChange={(item) => {
            const itemCopy = { ...myItem };
            itemCopy.value = item.target.value;
            setMyItem(itemCopy);
          }}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Photo URL"
          onChange={(item) => {
            const itemCopy = { ...myItem };
            itemCopy.photo = item.target.value;
            setMyItem(itemCopy);
          }}
        />
      </div>
      <div>
      <div>Can you pack it?</div>
        <Input
          type="checkbox"
          onChange={(item) => {
            const itemCopy = { ...myItem };
            itemCopy.storable = item.target.checked;
            setMyItem(itemCopy);
          }}
        />
      </div>
      <div>
        <div>Container?</div>
        <Input
          type="checkbox"
          onChange={(item) => {
            const itemCopy = { ...myItem };
            itemCopy.canStore = item.target.checked;
            setMyItem(itemCopy);
          }}
        />
      </div>

      <fieldset>
        <Button color="dark" onClick={handleSave}>Submit New Item</Button>
      </fieldset>
    </Form>
  );
};

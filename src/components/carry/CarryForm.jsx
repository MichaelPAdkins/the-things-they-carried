import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCarry } from "../../services/carryServices";
import { Button, Form, Input } from "reactstrap";
import "./Carry.css";



export const CarryCreateForm = ({currentUser}) => {
  const [myCarry, setMyCarry] = useState({
    name: "",
    purpose: "" 
  });

  const navigate = useNavigate();

  const handleSave = (carry) => {
    carry.preventDefault();
    const newCarry = {
      userId: currentUser.id,
      name: myCarry.name,
      purpose: myCarry.purpose
    }
    createCarry(newCarry).then(() => {
      navigate("/");
    });
  };

  return (
    <Form>
      <h2 className="header-new-carry">Create New Carry</h2>
      <div>
        <Input
          type="text"
          placeholder="Name"
          onChange={(carry) => {
            const carryCopy = { ...myCarry };
            carryCopy.name = carry.target.value;
            setMyCarry(carryCopy);
          }}
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Purpose"
          onChange={(carry) => {
            const carryCopy = { ...myCarry };
            carryCopy.purpose = carry.target.value;
            setMyCarry(carryCopy);
          }}
        />
      </div>
      
      <fieldset>
        <Button color="dark" onClick={handleSave}>Submit New Carry</Button>
      </fieldset>
    </Form>
  );
};

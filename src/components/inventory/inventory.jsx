import React, { useEffect, useState } from 'react';
import { getAllItems, deleteItem, getItemsByUserId } from '../../services/inventoryServices.jsx';
import { useNavigate } from 'react-router-dom';
import { addItemToCarry } from '../../services/carryServices.jsx';
import './inventory.css';

export const Inventory = ({ currentUser }) => {
  const [items, setItems] = useState([]);
  const [currentCarryId, setCurrentCarryId] = useState(null); // State to store the current carry ID
  const navigate = useNavigate();

  useEffect(() => {
    getItemsByUserId(currentUser.id).then((items) => setItems(items));

    // Fetch the current carry for the user (example logic, adjust as needed)
    // Assuming you have an endpoint to fetch the current carry for the user
    fetch(`http://localhost:8088/carries?userId=${currentUser.id}`)
      .then((res) => res.json())
      .then((carries) => {
        if (carries.length > 0) {
          setCurrentCarryId(carries[carries.length-1].id);
        }
      });
  }, [currentUser]);

  const handleDelete = async (itemId) => {
    const success = await deleteItem(itemId);
    if (success) {
      setItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    }
  };

  const handleAddToCarry = async (itemId) => {
    if (currentCarryId) {
      await addItemToCarry(itemId, currentCarryId);
      alert('Item added to carry');
    } else {
      alert('No current carry found for the user');
    }
  };

  return (
    <div className="inventory-container">
      <button onClick={()=>console.log(currentUser.id)}>shit</button>
      {items.length === 0 ?
      <div>You don't have any items!</div>
      :
      items.map((item) => (
        <div key={item.id} className="card">
          <div className="item-info">
            <h2>{item.name}</h2>
            <p><strong>Type:</strong> {item.type}</p>
            <p><strong>Value:</strong> {item.value}</p>
            <button className="edit-button" onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
            <button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
            <button className="add-to-carry-button" onClick={() => handleAddToCarry(item.id)}>Add to Carry</button>
          </div>
        </div>
      ))}
    </div>
  );
};
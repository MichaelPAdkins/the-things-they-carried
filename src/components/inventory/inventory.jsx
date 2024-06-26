import React, { useEffect, useState } from 'react';
import { getAllItems, deleteItem } from '../../services/inventoryServices.jsx';
import './Inventory.css';

export const Inventory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAllItems().then((items) => setItems(items));
  }, []);

  const handleDelete = async (itemId) => {
    const success = await deleteItem(itemId);
    if (success) {
      setItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    }
  };

  return (
    <div className="inventory-container">
      {items.map((item) => (
        <div key={item.id} className="card">
            <div className="item-info">
            <h2>{item.name}</h2>
            <p><strong>Serial:</strong> {item.serial}</p>
            <p><strong>Material:</strong> {item.material}</p>
            <p><strong>Type:</strong> {item.type}</p>
            <button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Inventory;

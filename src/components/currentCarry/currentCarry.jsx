import React, { useState, useEffect } from 'react';
import { getCarryItems } from '../../services/carryServices';
import './currentCarry.css';

export const CurrentCarry = () => {
    const [carryItems, setCarryItems] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      getCarryItems().then((data) => {
        setCarryItems(data);
        setLoading(false);
      });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    const carryGroups = carryItems.reduce((groups, carryItem) => {
      const carryName = carryItem.carry?.name;
      if (!groups[carryName]) {
        groups[carryName] = [];
      }
      groups[carryName].push(carryItem.item);
      return groups;
    }, {});
  
    return (
      <div className="carry-container">
        {Object.keys(carryGroups).map((carryName) => (
          <div key={carryName} className="carry-group">
            <h2>{carryName}</h2>
            {carryGroups[carryName].map((item) => (
              <div key={item.id} className="carry-item-card">
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p><strong>*</strong> {item.type}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
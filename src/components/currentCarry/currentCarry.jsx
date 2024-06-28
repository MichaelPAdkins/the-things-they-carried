import React, { useState, useEffect } from 'react';
import { getCarryByUserId, getCarryItems, getCarryItemsByCarryId } from '../../services/carryServices';
import './currentCarry.css';

export const CurrentCarry = ({currentUser}) => {
    const [carryItems, setCarryItems] = useState([]);
    const [userCarries, setUserCarries] = useState([]);
    const [thisCarry, setThisCarry] = useState({});
    const [thisCarryId, setThisCarryId] = useState(0);
  
    useEffect(() => {
      getCarryByUserId(currentUser.id).then((data) => {
        setUserCarries(data);
        setThisCarryId(data[data.length-1].id)
      });
    }, []);

    useEffect(() => {
      setThisCarry(userCarries[userCarries.length-1])
    }, [userCarries]);

    useEffect(() => {
      getCarryItemsByCarryId(thisCarryId).then((data) => setCarryItems(data))
    }, [thisCarryId]);

    return (
      <div className="carry-container">
        <button onClick={()=>console.log(carryItems)}>shit</button>
        <div className="carry-group">
          <h2>{thisCarry?.name}</h2>
          {thisCarryId === 0 ? 
          <div>You need to create your carry!</div>
          :
          carryItems.length === 0 ?
          <div>
            You're not carrying anything!
          </div>
          :
          carryItems.map((currentlyCarried) => {
            return <div>
          {currentlyCarried?.item?.name}
            </div>
          })}
        </div>
      </div>
    );
  };
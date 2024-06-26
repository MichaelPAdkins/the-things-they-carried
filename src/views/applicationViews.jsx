import { useEffect, useState } from "react";
import { Home } from "../components/home/home.jsx";
import { Outlet, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
import { ItemCreateForm } from "../components/itemEntry/ItemForm.jsx";
import { CarryCreateForm } from "../components/carry/CarryForm.jsx";
import { Inventory } from "../components/inventory/Inventory.jsx";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localCarry_user = localStorage.getItem("carry_user");
    const carry_userObject = JSON.parse(localCarry_user);
    setCurrentUser(carry_userObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Home currentUser={currentUser} />} />
        <Route path="itemForm" element={<ItemCreateForm currentUser={currentUser} />} />
        <Route path="carryForm" element={<CarryCreateForm currentUser={currentUser} />} />
        <Route path="inventory" element={<Inventory currentUser={currentUser} />} />
        {/* <Route path=":itemId/editItem" element={<EditItem currentUser={currentUser} />} /> */}
      </Route>
    </Routes>
  );
};

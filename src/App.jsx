import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Login } from "./components/auth/Login.jsx";
import { Authorized } from "./views/Authorized.jsx";
import { Register } from "./components/auth/Register.jsx";
import { ApplicationViews } from "./views/applicationViews";
import { Route, Routes } from "react-router-dom";


export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  );
};
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Authorized } from "./views/authorized.jsx"
import { Login } from "../src/components/auth/login.jsx"
import { Register } from "../src/components/auth/register.jsx"
import { ApplicationViews } from "./views/applicationViews.jsx"

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
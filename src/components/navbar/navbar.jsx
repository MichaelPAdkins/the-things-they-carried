import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="whole-page">
      <ul className="navbar">
        <li className="navbar-item">
          <Link className="navbar-link" to="/">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="inventory">
            Inventory
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="./itemForm">
            Item Entry
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="currentCarry">
            Current Carry
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="./carryForm">
            Create New Carry
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="archivedCarry">
            Carry Archives
          </Link>
        </li>
        {localStorage.getItem("carry_user") ? (
          <li className="navbar-item">
            <Link
              className="navbar-link"
              to=""
              onClick={() => {
                localStorage.removeItem("carry_user");
                navigate("/login", { replace: true });
              }}
            >
              Logout
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

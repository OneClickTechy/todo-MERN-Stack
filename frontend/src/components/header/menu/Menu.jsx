import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useGetmeQuery } from "../../../app/services/userSlicer";

const Menu = () => {
  const { data: user } = useGetmeQuery();
  console.log(user);
  return (
    <nav>
      <menu className="flex justify-around items-center">
        {!user ? (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            <li>
              <Link to="/task/create">Create</Link>
            </li>
          </>
        )}
      </menu>
    </nav>
  );
};

export default Menu;

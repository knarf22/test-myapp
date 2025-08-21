// Navbar.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../routing/routes";


const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#eee" }}>
      {ROUTES.map(({ path }) => (
        <NavLink
          key={path}
          to={path}
          end={path === "/"} // makes NavLink active only on exact "/" for home
          style={({ isActive }) => ({
            marginRight: 20,
            textDecoration: "none",
            color: isActive ? "blue" : "black",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          {path === "/" ? "Home" : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;

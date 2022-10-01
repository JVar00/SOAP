import { useState } from "react";
import { NavLink } from "react-router-dom";

export const NavButton = ({ redirectTo = "/", inputName = "null" }) => {
  let sleep = "navItem";
  let active = "navItemActive ";

  return (
    <div>
      <NavLink
        className={({ isActive }) => (isActive ? active : sleep)}
        to={redirectTo}
      >
        {inputName}
      </NavLink>
    </div>
  );
};

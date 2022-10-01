import { useState } from "react";
import { Link } from "react-router-dom";

export const NavButton = ({
  active = false,
  redirectTo = "/",
  inputName = "null",
}) => {
  const [isActive, setIsActive] = useState(active);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <div>
      <Link
        className={isActive ? "navItemActive mt-3" : "navItem mt-3"}
        onClick={handleClick}
        to={redirectTo}
      >
        {inputName}
      </Link>
    </div>
  );
};

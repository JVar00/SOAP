import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { SessionContext } from "../contexts/sessionProvider";

const AsideMenu = () => {
  const { user, login, logout } = useContext(SessionContext);

  return (
    <>
      <aside className="aside-menu">
        <div>
          {user ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <button onClick={login}>Login</button>
          )}
        </div>
      </aside>
      {/* agregar estilo para el container de la derecha, este container va a contener los menus, este container es una etiqueta reservada de React al igual que Outlet */}
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default AsideMenu;

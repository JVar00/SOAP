import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SessionContext } from "../contexts/sessionProvider";
import LogoIcon from "../src/assets/logo.jpg";

const AsideMenu = () => {
  const { user, logout } = useContext(SessionContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="flex fixed font-sans text-black">
        <aside className="h-screen w-72">
          <div className="h-18 w-full flex items-center justify-center ">
            <img
              className="w-40 stroke-current"
              src={LogoIcon}
              alt="Jimenes & Tanzi"
            ></img>
          </div>
          <nav className="text-white h-screen border-t border-r border-black rounded-tr-xl bg-[#EB2234]">
            {user && user.role === "Administrador" ? (
              //Menu para el administrador
              <a href=""></a>
            ) : user && user.role === "JefeBodega" ? (
              //Menu para el jefe de bodega
              <a href=""></a>
            ) : (
              <a href=""></a>
              //role==="empleadoAlisto", es el mismo menu
              //Menu para el empleado de alistamiento o Acomodo
            )}
            <button onClick={logout}>Logout</button>
          </nav>
        </aside>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default AsideMenu;

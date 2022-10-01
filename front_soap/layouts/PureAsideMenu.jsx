import { useContext } from "react";
import { Navigate, NavLink, Outlet } from "react-router-dom";
import { AdminSideMenu } from "../components/userAdmin/AdminSideMenu";
import { SessionContext } from "../contexts/sessionProvider";
import LogoIcon from "../src/assets/logo.jpg";

const AsideMenu = () => {
  const { user, logout } = useContext(SessionContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="flex">
        <aside className="fixed font-sans text-black h-screen md:w-72">
          <div className="h-18 flex items-center justify-center ">
            <img
              className="w-40 stroke-current"
              src={LogoIcon}
              alt="Jimenes & Tanzi"
            ></img>
          </div>
          <nav className=" text-white h-screen border-t-2 border-r-2 border-black rounded-tr-xl bg-red-600">
            {user && user.role === "Administrador" ? (
              <AdminSideMenu />
            ) : user && user.role === "JefeBodega" ? (
              //Menu para el jefe de bodega
              <a href=""></a>
            ) : (
              <a href=""></a>
              //Menu para el empleado de alistamiento o Acomodo
              //role==="empleadoAlisto", es el mismo menu
            )}

            <NavLink className="logoutButton" onClick={logout}>
              Cerrar sesion
            </NavLink>
          </nav>
        </aside>
      </div>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};

export default AsideMenu;

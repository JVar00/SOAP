import { useContext, useState } from "react";
import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import { AdminSideMenu } from "../components/userAdmin/AdminSideMenu";
import { SessionContext } from "../contexts/sessionProvider";
import LogoIcon from "../src/assets/logo.jpg";

const AsideMenu = () => {
  const [sidebar, setSidebar] = useState(false);
  const { user, logout } = useContext(SessionContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  const showSidebar = () => setSidebar(!sidebar);

  const closeSidebar = () => setSidebar(false);

  //descubrir como hacer en react que aparexca el menu

  return (
    <>
      <div className="relative md:flex">
        {/* Mobile menu */}

        <div className="bg-red-600 md:invisible flex justify-between">
          <Link to="#" className="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 m-2 text-white"
              onClick={showSidebar}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Link>
        </div>

        <aside
          className={sidebar ? "sidebar active md:hidden" : "sidebar md:hidden"}
        >
          <nav className=" text-white h-screen pt-10 pb-5 border-black bg-red-600">
            <div className="ml-5 md:hidden">
              <p>Iniciaste Sesion Como</p>
              <p className="font-bold">
                {user.name + " " + user.last1 + " " + user.last2}
              </p>
            </div>

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

        {/* Desktop and Tablet Menu */}
        <aside className={"sidebar"}>
          <nav className=" text-white h-screen pt-10 pb-5 border-black bg-red-600">
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

        <div onClick={closeSidebar}>
          <div className="h-18 md:ml-52 xl:ml-64 flex items-center justify-center transition duration-200 ease-in-out">
            <img
              className="w-32 xl:w-40 stroke-current"
              src={LogoIcon}
              alt="Jimenes & Tanzi"
            ></img>

            <div className="text-sm xl:text-base flex-1 md:m-14 hidden md:block">
              <p>Iniciaste Sesion Como</p>
              <p className="font-bold text-red-600">
                {user.name + " " + user.last1 + " " + user.last2}
              </p>
            </div>
          </div>
          <section className="flex-1 pl-4 pr-4 md:p-0 md:pl-2 text-lg">
            <Outlet></Outlet>
          </section>
        </div>
      </div>
    </>
  );
};

export default AsideMenu;

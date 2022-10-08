import { useContext, useState } from "react";
import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import { AdminSideMenu } from "../components/userAdmin/AdminSideMenu";
import { AdminProvider } from "../contexts/EmployeesProvider";
import { SessionContext } from "../contexts/SessionProvider";
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
    <div>
      <div className="bg-red-600 lg:hidden flex sticky top-0 justify-between">
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
        <button className="md:flex-row hidden md:flex ">
          <p className="pt-3 font-bold text-white">Cerrar Sesion</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 m-2 text-white"
            onClick={logout}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
        </button>
      </div>

      <div className="lg:flex">
        {/* Mobile menu */}

        <aside
          className={
            sidebar
              ? "sidebar active lg:hidden fixed"
              : "sidebar fixed lg:hidden"
          }
        >
          <nav className=" text-white h-screen pt-10 pb-5 border-black bg-red-600">
            <div className="ml-5 lg:hidden">
              <p>Iniciaste Sesion Como</p>
              <p className="font-bold">
                {user.name + " " + user.last1 + " " + user.last2}
              </p>
            </div>

            {user && user.role === "Administrador" ? (
              <AdminSideMenu closeSideBar={closeSidebar} />
            ) : user && user.role === "JefeBodega" ? (
              //Menu para el jefe de bodega
              <a href=""></a>
            ) : (
              <a href=""></a>
              //Menu para el empleado de alistamiento o Acomodo
              //role==="empleadoAlisto", es el mismo menu
            )}

            <NavLink className="logoutButton md:hidden" onClick={logout}>
              Cerrar sesion
            </NavLink>
          </nav>
        </aside>

        {/* Desktop and Tablet Menu */}
        <aside className={"sidebar fixed sm:invisible lg:visible"}>
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
          <div className="h-18 lg:ml-60 xl:ml-72 flex items-center justify-center transition duration-200 ease-in-out">
            <img
              className="w-52 md:w-1/4 lg:w-40 stroke-current"
              src={LogoIcon}
              alt="Jimenes & Tanzi"
            ></img>

            <div className="text-sm xl:text-base flex-1 lg:m-14 hidden lg:block">
              <p>Iniciaste Sesion Como</p>
              <p className="font-bold text-red-600">
                {user.name + " " + user.last1 + " " + user.last2}
              </p>
            </div>
          </div>
        </div>
      </div>
      <AdminProvider>
        <section
          className="pl-4 lg:p-0 md:pl-2 overflow-x-hidden overflow-auto"
          onClick={closeSidebar}
        >
          <Outlet></Outlet>
        </section>
      </AdminProvider>
    </div>
  );
};

export default AsideMenu;

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import LogoIcon from "../assets/logo.jpg";
import UserSideMenu from "../components/user/MainFiles/UserSideMenu";
import { AdminSideMenu } from "../components/userAdmin/AdminSideMenu";
import { ChiefSideMenu } from "../components/warehouseAdmin/MainFiles/ChiefSideMenu";
import { AuthContext } from "../contexts/authContext";
import { AdminProvider } from "../contexts/EmployeesProvider";
import { WarehouseProvider } from "../contexts/WarehouseProvider";
import { OrderProvider } from "../contexts/OrderProvider";

const AsideMenu = () => {
  const [sidebar, setSidebar] = useState(false);
  const { isAuthenticated, logOut } = useContext(AuthContext);

  const showSidebar = () => setSidebar(!sidebar);

  const closeSidebar = () => setSidebar(false);

  //descubrir como hacer en react que aparexca el menu
  return (
    <div className="">
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
        <button className="md:flex-row hidden md:flex " onClick={logOut}>
          <p className="pt-3 font-bold text-white">Cerrar Sesión</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 m-2 text-white"
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

        <Drawer
          anchor="left"
          open={sidebar}
          onClose={closeSidebar}
          className="lg:hidden"
        >
          <Box
            className="text-white pt-10 pb-5 bg-red-600 border-black "
            sx={{ width: 250, height: "100%" }}
          >
            <div className="ml-5">
              <p>Iniciaste sesión como</p>
              <p className="font-bold">
                {isAuthenticated.name +
                  " " +
                  isAuthenticated.lastName1 +
                  " " +
                  isAuthenticated.lastName2}
              </p>
            </div>

            {isAuthenticated && isAuthenticated.role === "Administrador" ? (
              <AdminSideMenu />
            ) : isAuthenticated && isAuthenticated.role === "JefeBodega" ? (
              <ChiefSideMenu />
            ) : (
              <UserSideMenu />
            )}

            <NavLink className="logoutButton md:hidden" onClick={logOut}>
              Cerrar sesión
            </NavLink>
          </Box>
        </Drawer>

        {/* Desktop and Tablet Menu */}
        <aside className={"sidebar fixed sm:hidden lg:block"}>
          <nav className=" text-white h-screen pt-10 pb-5 border-black bg-red-600">
            {isAuthenticated && isAuthenticated.role === "Administrador" ? (
              <AdminSideMenu />
            ) : isAuthenticated && isAuthenticated.role === "JefeBodega" ? (
              <ChiefSideMenu />
            ) : (
              <UserSideMenu />
            )}

            <NavLink className="logoutButton" onClick={logOut}>
              Cerrar sesión
            </NavLink>
          </nav>
        </aside>

        <div onClick={closeSidebar} className="w-full max-w-screen lg:ml-60 xl:ml-72">
          <div className="h-18  flex items-center justify-center transition duration-200 ease-in-out flex-col lg:grid grid-cols-2">
            <img
              className="w-52 md:w-1/4 lg:w-40 stroke-current"
              src={LogoIcon}
              alt="Jimenes & Tanzi"
            ></img>

            <div className="text-sm xl:text-base hidden lg:block md:justify-end lg:ml-60 xl:ml-72">
              <p>Iniciaste sesión como</p>
              <p className="font-bold text-red-600">
                {isAuthenticated.name +
                  " " +
                  isAuthenticated.lastName1 +
                  " " +
                  isAuthenticated.lastName2}
              </p>
            </div>
          </div>
        </div>
      </div>
      <AdminProvider>
        <OrderProvider>
         <WarehouseProvider>
          <section
            className="pl-4 lg:p-0 md:pl-2 overflow-x-hidden overflow-auto"
            onClick={closeSidebar}
          >
            <Outlet></Outlet>
          </section>
         </WarehouseProvider>
        </OrderProvider>
      </AdminProvider>
    </div>
  );
};

export default AsideMenu;

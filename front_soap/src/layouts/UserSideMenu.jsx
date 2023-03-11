import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import LogoIcon from "../assets/logo.jpg";
import { AuthContext } from "../contexts/authContext";
import { AdminProvider } from "../contexts/EmployeesProvider";
import { OrderProvider } from '../contexts/OrderProvider'
import IconButton from "@mui/material/IconButton";
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import CreateReport from "../components/bugsRepoprt/CreateReport";

const UserAsideMenu = () => {
  const { isAuthenticated, logOut } = useContext(AuthContext);
  const [createReport, setCreateReport] = useState(false)


  //descubrir como hacer en react que aparexca el menu
  return (
    <div className="">
      <div className={createReport ? "" : "hidden"}>
                <CreateReport funct={setCreateReport}/>
      </div>
      <div className="bg-red-600 flex sticky top-0 text-white justify-between z-10">
        <div>
          <IconButton style={{ color: 'white' }}
            onClick={
              e => {
               setCreateReport(true) 
              }}
          >
            <LiveHelpIcon fontSize="large" color="disable"/>
          </IconButton>
        </div>
        <button className="flex-row flex " onClick={logOut}>
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
        {/* Desktop and Tablet Menu */}

        <div>
          <div className="h-18 flex lg:ml-10 items-center justify-center transition duration-200 ease-in-out">
            <img
              className="w-52 md:w-1/4 lg:w-52 stroke-current"
              src={LogoIcon}
              alt="Jimenes & Tanzi"
            ></img>
          </div>
        </div>
      </div>
      <AdminProvider>
       <OrderProvider>
        <section className="pl-4 lg:p-0 md:pl-2 overflow-x-hidden overflow-auto">
          <Outlet></Outlet>
          </section>
        </OrderProvider>
      </AdminProvider>
    </div>
  );
};

export default UserAsideMenu;

import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { SessionContext } from "../../contexts/SessionProvider";
import { Employees } from "../TableUsers";

const Users = () => {
  // const { personas, deletePersona, getAllPersonas } =
  //   useContext(PersonaContext);

  // useEffect(() => {
  //   getAllPersonas();
  // }, []);

  return (
    <div className="w-full max-w-screen max-h-screen xl:max-w-5xl h-full lg:ml-60 xl:ml-72">
      <div className="flex flex-col lg:flex-row xl:justify-between">
        <h2 className="mb-5 font-bold md:text-lg lg:mb-0">
          Empleados Registrados
        </h2>
        <div className="flex items-center mb-5 lg:ml-18 xl:ml-20">
          <div>
            <h2 className="text-sm font-bold text-gray-900">
              Filtrar Por Nombre
            </h2>
            <input
              type="search"
              className="input placeholder-red-600 outline-none"
            />
          </div>
          <div className="ml-10">
            <div className="flex items-center mb-3">
              <input
                id="Alisto"
                type="checkbox"
                value="Alisto"
                className="w-4 h-4 text-red-600  bg-red-600 rounded border-red-300 focus:ring-red-500  "
              />
              <label
                htmlFor="Alisto"
                className="ml-2 text-sm font-medium text-black"
              >
                Alisto
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="Acomodo"
                type="checkbox"
                value="Acomodo"
                className="w-4 h-4 text-red-600  bg-red-600 rounded border-red-300 focus:ring-red-500  "
              />
              <label
                htmlFor="Acomodo"
                className="ml-2 text-sm font-medium text-black"
              >
                Acomodo
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-3/4 xl:w-full">
        <Employees />
      </div>
    </div>
  );
};

export default Users;

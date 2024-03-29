import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { AdminContext } from "../../contexts/EmployeesProvider";
import { Modal } from "../../layouts/confirmationModal";

export const Employees = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { employees, getAllEmployees, deleteEmployee } =
    useContext(AdminContext);

  const [confirm, setConfirm] = useState(false);
  const [username, setUsername] = useState("");

  const [error, setError] = useState(false);
  const [nice, setNice] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    search();
  }, []);

  const search = async () => {
    try {
      await getAllEmployees();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteConfirm = async (confirm) => {
    if (confirm) {
      try {
        await deleteEmployee(username);
        setNice(true);
        setError(false);
        getAllEmployees();
      } catch {
        setNice(false);
        setError(true);
      }
    } else {
      setNice(false);
      setError(false);
    }
    setConfirm(false);
    setUsername("");
  };

  const deleteHandler = (username) => {
    setConfirm(true);
    setUsername(username);
  };

  return !loading ? (
    <>
      <p className={error ? "text-red-600 text-base italic" : "hidden"}>
        Error al intentar eliminar el usuario.
      </p>

      <p className={nice ? "text-green-700 text-base italic" : "hidden"}>
        El usuario se elimino con exito!
      </p>
      <div
        className={
          confirm
            ? "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            : "hidden"
        }
      >
        <Modal funct={deleteConfirm} />
      </div>

      {/* Tablas desktop y tablet */}
      <div className="overflow-auto rounded-lg shadow hidden lg:block mb-5">
        <table className="w-full">
          <thead className="bg-red-600 border-b-2 border-black text-white">
            <tr>
              <th className="lg:w-10 p-3 text-sm font-semibold tracking-wide text-left">
                Nombre completo
              </th>
              <th className="lg:w-10 p-3 text-sm font-semibold tracking-wide text-left">
                Ocupación
              </th>
              <th className="lg:w-10 p-3 text-sm font-semibold tracking-wide text-left">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black font-bold">
            {employees[0] ? (
              employees.map((employee) => (
                <tr className="bg-white" key={employee.user}>
                  {/* formato para cargar con el map */}
                  <td className="p-3 text-sm text-gray-800 whitespace-nowrap ">
                    {employee.name +
                      " " +
                      employee.lastName1 +
                      " " +
                      employee.lastName2}
                  </td>
                  <td className="p-3 text-sm text-black whitespace-nowrap">
                    {employee.role}
                  </td>
                  {isAuthenticated.role === "Administrador" ? (
                    <td className="p-3 text-sm text-black whitespace-nowrap flex flex-row">
                      <Link to={`/administracion/editar/${employee.user}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </Link>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                          onClick={() => deleteHandler(employee.user)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </td>
                  ) : (
                    <td className="p-3 text-sm text-black whitespace-nowrap flex">
                      {/* Botones para ver perfil del jefe de bodega */}
                      <div className="text-sm font-medium text-white bg-red-600  p-2 rounded-md">
                        {/* Button svg link + ver perfil */}
                        <Link to={`colaborador/${employee.user}`}>
                          <button className="flex font-bold">
                            Ver perfil
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-5 ml-2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                              />
                            </svg>
                          </button>
                        </Link>
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-3 text-sm text-red-500 font-bold whitespace-nowrap">
                  No se encontraron usuarios
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Tabla mobile */}

      <div className="grid mr-4 sm:mr-2 mb-5 grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
        {/* Este div es un perfil de usuario, como tal se deberian de cargar de esta forma para cada unao de los usuarios con un map */}

        {employees[0] ? (
          employees.map((employee) => (
            <div
              className="bg-white space-y-3 p-4 rounded-lg shadow"
              key={employee.user}
            >
              <div className="flex items-center space-x-2 text-sm">
                <div>
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-600 bg-red-200 rounded-lg bg-opacity-50">
                    {employee.role}
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                {employee.name +
                  " " +
                  employee.lastName1 +
                  " " +
                  employee.lastName2}
              </div>
              {/* Los botones deben depender del usuario que este logeado */}
              {isAuthenticated.role == "Administrador" ? (
                //Botones para editar y eliminar del administrador
                <div className="text-sm font-medium text-black flex flex-row">
                  <Link to={`/administracion/editar/${employee.user}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </Link>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                      onClick={() => deleteHandler(employee.user)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                // Botones para ver perfil del jefe de bodega
                <div className="text-sm font-medium text-white w-28 bg-red-600  p-2 rounded-md">
                  {/* Button svg link + ver perfil */}
                  <Link to={`colaborador/${employee.user}`}>
                    <button className="flex">
                      Ver perfil
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="p-3 text-sm text-red-500 font-bold whitespace-nowrap">
            No se encontraron usuarios
          </p>
        )}
      </div>
    </>
  ) : (
    <p className="text-black text-base italic">Cargando...</p>
  );
};

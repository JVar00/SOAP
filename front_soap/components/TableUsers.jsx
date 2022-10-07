import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AdminContext } from "../contexts/EmployeesProvider";
import { SessionContext } from "../contexts/SessionProvider";

export const Employees = () => {
  const { user } = useContext(SessionContext);

  const { employees, getAllEmployees, deleteEmployee } =
    useContext(AdminContext);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const deleteHandler = (username) => {};

  return (
    <>
      {/* Tablas desktop y tablet */}
      <div className="overflow-auto rounded-lg shadow hidden lg:block mb-5">
        <table className="w-full">
          <thead className="bg-red-600 border-b-2 border-black text-white">
            <tr>
              <th className="lg:w-10 p-3 text-sm font-semibold tracking-wide text-left">
                Nombre Completo
              </th>
              <th className="lg:w-10 p-3 text-sm font-semibold tracking-wide text-left">
                Ocupacion
              </th>
              <th className="lg:w-10 p-3 text-sm font-semibold tracking-wide text-left">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black">
            {employees.map((employee) => (
              <tr className="bg-white" key={employee.username}>
                {/* formato para cargar con el map */}
                <td className="p-3 text-sm text-black whitespace-nowrap">
                  {employee.name + " " + employee.last1 + " " + employee.last2}
                </td>
                <td className="p-3 text-sm text-black whitespace-nowrap">
                  {employee.role}
                </td>
                <td className="p-3 text-sm text-black whitespace-nowrap">
                  <Link to={`/administracion/editar/${employee.username}`}>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                    onClick={() => deleteHandler(employee.username)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabla mobile */}

      <div className="grid mr-4 sm:mr-2 sm:mb-2 grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
        {/* Este div es un perfil de usuario, como tal se deberian de cargar de esta forma para cada unao de los usuarios con un map */}
        {employees.map((employee) => (
          <div
            className="bg-white space-y-3 p-4 rounded-lg shadow"
            key={employee.username}
          >
            <div className="flex items-center space-x-2 text-sm">
              <div>
                <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-600 bg-red-200 rounded-lg bg-opacity-50">
                  {employee.role}
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-700">
              {employee.name + " " + employee.last1 + " " + employee.last2}
            </div>
            {/* Los botones deben depender del usuario que este logeado */}
            {user.role == "Administrador" ? (
              //Botones para editar y eliminar del administrador
              <div className="text-sm font-medium text-black">
                <Link to={`/administracion/editar/${employee.username}`}>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={() => deleteHandler(employee.username)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            ) : (
              // Botones para ver perfil del jefe de bodega
              <div className="text-sm font-medium text-black">
                {/* Button svg link + ver perfil */}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

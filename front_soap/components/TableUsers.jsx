import { useContext } from "react";
import { SessionContext } from "../contexts/SessionProvider";

export const Employees = () => {
  const { user } = useContext(SessionContext);
  return (
    <>
      {/* Tablas desktop y tablet */}
      <div class="overflow-auto rounded-lg shadow hidden lg:block">
        <table class="w-full">
          <thead class="bg-red-600 border-b-2 border-black text-white">
            <tr>
              <th class="lg:w-10 p-3 text-sm font-semibold tracking-wide text-left">
                Nombre Completo
              </th>
              <th class="lg:w-10 p-3 text-sm font-semibold tracking-wide text-left">
                Ocupacion
              </th>
              <th class="lg:w-10 p-3 text-sm font-semibold tracking-wide text-left">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-black">
            <tr class="bg-white">
              {/* formato para cargar con el map */}
              <td class="p-3 text-sm text-black whitespace-nowrap">
                Jeff Vargas Barrantes
              </td>
              <td class="p-3 text-sm text-black whitespace-nowrap">Alisto</td>
              <td class="p-3 text-sm text-black whitespace-nowrap">
                {/* Button svg link + edit */}
                {/* Buttons svg onClick + Eliminar */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tabla mobile */}

      <div className="grid mr-4 sm:mr-2 grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
        {/* Este div es un perfil de usuario, como tal se deberian de cargar de esta forma para cada unao de los usuarios con un map */}
        <div className="bg-white space-y-3 p-4 rounded-lg shadow">
          <div className="flex items-center space-x-2 text-sm">
            <div>
              <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-600 bg-red-200 rounded-lg bg-opacity-50">
                {/* Ocupacion */}
                Alisto
              </span>
            </div>
          </div>
          <div className="text-sm text-gray-700">
            {/* Nombre Completo */} Jeff Vargas Barrantes{" "}
          </div>
          {/* Los botones deben depender del usuario que este logeado */}
          {user.role === "administrador" ? (
            //Botones para editar y eliminar del administrador
            <div className="text-sm font-medium text-black">
              {/* Button svg link + edit */}
              {/* Buttons svg onClick + Eliminar */}
            </div>
          ) : (
            // Botones para ver perfil del jefe de bodega
            <div className="text-sm font-medium text-black">
              {/* Button svg link + ver perfil */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

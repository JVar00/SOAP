import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { SessionContext } from "../../contexts/SessionProvider";

const Users = () => {
  // const { personas, deletePersona, getAllPersonas } =
  //   useContext(PersonaContext);

  // useEffect(() => {
  //   getAllPersonas();
  // }, []);

  return (
    <div className="w-screen md:max-w-4xl xl:max-w-6xl md:h-screen md:ml-60 xl:ml-72">
      <div className="flex flex-col md:flex-row xl:justify-between">
        <h2 className="mb-5 font-bold md:text-lg md:mb-0">
          Empleados Registrados
        </h2>
        <div className="flex items-center mb-5 md:ml-10 lg:ml-18 xl:ml-24">
          <div className="">
            <h2 className="text-sm font-bold text-gray-900">
              Filtrar Por Nombre
            </h2>
            <input
              type="search"
              className="input placeholder-red-600 outline-none"
              placeholder="Ingrese un nombre.."
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

      <table className="">
        <thead className="">
          <tr>
            <th>Nombre Completo</th>
            <th>Ocupacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* {personas.map((persona) => (
            <tr key={persona.id}>
              <td> {persona.identificacion} </td>
              <td> {persona.nombre} </td>
              <td> {persona.fecha} </td>
              <td>
                <Link
                  to={`/update/${persona.id}`}
                  className="btn btn-warning mx-1"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deletePersona(persona.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

import { Employees } from "../TableUsers";

const Users = () => {
  return (
    <div className="w-full max-w-screen xl:max-w-5xl lg:ml-60 xl:ml-72">
      <div className="flex flex-col lg:flex-row xl:justify-start">
        <h2 className="mb-5 font-bold ml-5 lg:ml-0 text-lg lg:mb-0">
          Empleados Registrados
        </h2>
        <div className="sm:flex-col md:flex md:flex-row items-center mb-5 ml-5 mr-8 lg:ml-10 md:mr-0">
          <div>
            <h2 className="text-sm font-bold text-gray-900">
              Filtrar Por Nombre
            </h2>
            <input
              type="search"
              className="input placeholder-red-600 outline-none"
            />
          </div>
          <div className="flex flex-row mt-5 md:mt-0 md:flex-col md:ml-7">
            <div className="flex items-center md:mb-3">
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

            <div className="flex items-center ml-5 md:ml-0">
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
      <div className="lg:w-3/4 xl:w-full mt-3">
        <Employees />
      </div>
    </div>
  );
};

export default Users;

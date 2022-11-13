import Filter from "../user/Filter";
import { Employees } from "../user/TableUsers";

const Users = () => {
  return (
    <div className="w-full max-w-screen xl:max-w-5xl lg:ml-60 xl:ml-72">
      <div className="flex flex-col lg:flex-row xl:justify-start">
        <h2 className="mb-5 font-bold ml-5 lg:ml-0 text-lg lg:mb-0">
          Empleados Registrados
        </h2>
        <Filter />
      </div>

      <div className="lg:w-3/4 xl:w-full mt-3">
        <Employees />
      </div>
    </div>
  );
};

export default Users;

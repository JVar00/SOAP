import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../contexts/EmployeesProvider";

export const UpdateForm = () => {
  const { employee, setEmployee, updateEmployee } = useContext(AdminContext);
  //store or update

  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastName2, setLastName2] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  //hay que ocultar el username No se debe de editar Solo crear

  useEffect(() => {
    setUsername(employee.username);
    setFirstName(employee.name);
    setLastName(employee.last1);
    setLastName2(employee.last2);
    setPassword(employee.password);
    setRole(employee.role);
  }, []);

  const update = async (data) => {
    return await updateEmployee(data);
  };

  const handleFuncType = (e) => {
    e.preventDefault();
    //modal para aceptar si esta seguro de guardar los cambios

    update({
      username: username,
      password: password,
      name: firstName,
      last1: lastName,
      last2: lastName2,
      role: role,
    });
    //response = funcType();
    //depende de la respuesta tira un mensaje de exito o error
  };

  return (
    <div className="flex flex-col justify-center py-5 px-6 lg:px-8">
      <div className=" sm:mx-auto sm:w-full sm:max-w-screen">
        <div className="sm:px-10">
          <form className="mb-0 space-y-6" onSubmit={() => handleFuncType()}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <div className="flex flex-row">
                  <p className="text-red-600 mr-2">*</p>
                  <label
                    htmlFor="grid-first-name"
                    className="block text-sm font-medium"
                  >
                    Nombre
                  </label>
                </div>
                <input
                  className="appearance-none block w-5/6 input leading-tight focus:outline-none focus:bg-white focus:border-red-600"
                  id="grid-first-name"
                  type="text"
                  autoComplete="off"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <p className="text-red-500 text-xs italic hidden">
                  Este campo es requerido.
                </p>
              </div>
              <div className="w-full md:w-1/3  px-3 mb-6 md:mb-0">
                <div className="flex flex-row">
                  <p className="text-red-600 mr-2">*</p>
                  <label
                    htmlFor="grid-last-name"
                    className="block text-sm font-medium"
                  >
                    Primer Apellido
                  </label>
                </div>
                <input
                  className="appearance-none block w-full input py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
                  id="grid-last-name"
                  type="text"
                  autoComplete="off"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <p className="text-red-500 text-xs italic hidden">
                  Este campo es requerido.
                </p>
              </div>
              <div className="w-full md:w-1/3  px-3">
                <div className="flex flex-row">
                  <p className="text-red-600 mr-2">*</p>
                  <label
                    htmlFor="grid-last-name2"
                    className="block text-sm font-medium"
                  >
                    Segundo Apellido
                  </label>
                </div>
                <input
                  className="appearance-none block w-full input py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
                  id="grid-last-name2"
                  type="text"
                  autoComplete="off"
                  value={lastName2}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <p className="text-red-500 text-xs italic hidden">
                  Este campo es requerido.
                </p>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex flex-row">
                <p className="text-red-600 mr-2">*</p>
                <label htmlFor="password" className="block text-sm font-medium">
                  Contraseña
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="appearance-none block w-full input py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
                />
              </div>
            </div>

            <div>
              <div className="flex flex-row">
                <p className="text-red-600 mr-2">*</p>
                <label
                  htmlFor="user_type"
                  className="block text-sm font-medium"
                >
                  Rol del empleado
                </label>
              </div>
              <div className="mt-3 ">
                <select
                  name="user_type"
                  id="user_type"
                  className="w-full md:w-1/2 font-medium text-sm border-black border rounded-md py-1 pl-2 pr-6"
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value={role}>Rol actual : {role}</option>
                  <option value="Alisto">Alisto</option>
                  <option value="Acomodo">Acomodo</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-1/2 flex justify-center mt-10 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Confirmar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

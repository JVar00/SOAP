import { useContext, useState } from "react";
import { AdminContext } from "../contexts/EmployeesProvider";
import { Modal } from "../layouts/confirmationModal";

export const Form = () => {
  const { addEmployee } = useContext(AdminContext);
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState(false);
  const [nice, setNice] = useState(false);

  const [user, setUsername] = useState("");
  const [name, setFirstName] = useState("");
  const [lastName1, setLastName] = useState("");
  const [lastName2, setLastName2] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const create = (data) => {
    return addEmployee(data);
  };

  const validate = () => {
    if (
      user === "" ||
      name === "" ||
      lastName1 === "" ||
      lastName2 === "" ||
      password === "" ||
      role === ""
    ) {
      setError(true);
      return false;
    }
    return true;
  };

  const clearData = () => {
    setUsername("");
    setLastName("");
    setLastName2("");
    setFirstName("");
    setPassword("");
  };

  const createConfirm = async (confirm) => {
    if (validate()) {
      if (confirm) {
        try {
          await create({
            user,
            name,
            lastName1,
            lastName2,
            password,
            role,
          });
          setError(false);
          setNice(true);
          clearData();
        } catch {
          setError(true);
          setNice(false);
        }
      }
    } else {
      setError(true);
      setNice(false);
    }
    setConfirm(false);
  };

  const handleFuncType = (e) => {
    e.preventDefault();
    setConfirm(true);
  };

  return (
    <div className="flex flex-col justify-center py-5 px-6 lg:px-8">
      <div
        className={
          confirm
            ? "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            : "hidden"
        }
      >
        <Modal funct={createConfirm} />
      </div>
      <div className=" sm:mx-auto sm:w-full sm:max-w-screen">
        <div className="sm:px-10">
          <form className="mb-0 space-y-6" onSubmit={handleFuncType}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <div className="flex flex-row">
                  <p className="text-red-600 mr-2">*</p>
                  <label
                    htmlFor="username"
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
                  value={name}
                  onChange={(e) => setFirstName(e.target.value)}
                />
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
                  value={lastName1}
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
                  onChange={(e) => setLastName2(e.target.value)}
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex flex-row">
                <p className="text-red-600 mr-2">*</p>
                <label htmlFor="user" className="block text-sm font-medium">
                  Nombre de Usuario
                </label>
              </div>

              <div className="mt-1">
                <input
                  id="user"
                  autoComplete="off"
                  value={user}
                  onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none block w-full input py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
                />
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
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  id="user_type"
                  className="w-full md:w-1/2 font-medium text-sm border-black border rounded-md py-1 pl-2 pr-6"
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Seleccione el rol</option>
                  <option value="Alisto">Alisto</option>
                  <option value="Acomodo">Acomodo</option>
                </select>
              </div>
            </div>

            <p className={error ? "text-red-600 text-base italic" : "hidden"}>
              Por favor, rellene todos los campos antes de continuar o intente
              con otro nombre de usuario.
            </p>

            <p className={nice ? "text-green-600 text-base italic" : "hidden"}>
              El usuario se agrego con exito!
            </p>

            <div>
              <button
                type="submit"
                className="w-1/2 flex justify-center mt-10 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Agregar Empleado
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

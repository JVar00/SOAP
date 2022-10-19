import { useContext, useState } from "react";
import { AdminContext } from "../../../contexts/EmployeesProvider";
import { Modal } from "../../../layouts/confirmationModal";
import { DBError } from "../../errorMessages/dbError";
import { InputError } from "../../errorMessages/inputError";
import { PasswordError } from "../../errorMessages/paswordError";

export const Form = () => {
  const { addEmployee } = useContext(AdminContext);
  //modal
  const [confirm, setConfirm] = useState(false);

  //validaciones
  const [error, setError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [dbError, setDBError] = useState(false);
  const [nice, setNice] = useState(false);

  //estados
  const [user, setUsername] = useState("");
  const [name, setFirstName] = useState("");
  const [lastName1, setLastName] = useState("");
  const [lastName2, setLastName2] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const create = (data) => {
    return addEmployee(data);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    validatePassword();
  };

  const validatePassword = (password) => {
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (re.test(password)) {
      setPassError(false);
      return true;
    }
    setPassError(true);
    return false;
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
    return validatePassword(password);
  };

  //regex for a string with 8 characters, minimun one letter uppercase,

  const clearData = () => {
    setUsername("");
    setLastName("");
    setLastName2("");
    setFirstName("");
    setPassword("");
  };

  const createConfirm = async (confirm) => {
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
        //nice
        setNice(true);
        clearData();
      } catch {
        setDBError(true);
      }
    }
    setConfirm(false);
  };

  const handleFuncType = (e) => {
    e.preventDefault();

    setError(false);
    setPassError(false);
    setDBError(false);
    setNice(false);

    if (validate()) {
      setConfirm(true);
    } else {
      setNice(false);
    }
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
                  onChange={(e) => handlePassword(e)}
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

            <div className={error ? "" : "hidden"}>
              <InputError />
            </div>

            <div className={passError ? "" : "hidden"}>
              <PasswordError />
            </div>

            <div className={dbError ? "" : "hidden"}>
              <DBError />
            </div>

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

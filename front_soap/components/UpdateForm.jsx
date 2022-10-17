import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../contexts/EmployeesProvider";
import { Modal } from "../layouts/confirmationModal";
import { DBError } from "./errorMessages/dbError";
import { InputError } from "./errorMessages/inputError";
import { PasswordError } from "./errorMessages/paswordError";

export const UpdateForm = () => {
  const { employee, updateEmployee } = useContext(AdminContext);

  //modal
  const [confirm, setConfirm] = useState(false);

  //navigate
  const navigate = useNavigate();

  //validaciones
  const [error, setError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [dbError, setDBError] = useState(false);
  const [nice, setNice] = useState(false);

  //se inicializan los estados
  const [name, setFirstName] = useState("");
  const [lastName1, setLastName] = useState("");
  const [lastName2, setLastName2] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [active, setActive] = useState(false);

  const validatePassword = (password) => {
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (re.test(password)) {
      return true;
    }
    setPassError(true);
    return false;
  };

  const validate = () => {
    if (name === "" || lastName1 === "" || lastName2 === "" || role === "") {
      setError(true);
      return false;
    }
    if (password != "") {
      return validatePassword(password);
    }
    return true;
  };

  const cargarDatos = () => {
    setFirstName(employee.name);
    setLastName(employee.lastName1);
    setLastName2(employee.lastName2);
    setRole(employee.role);
    setActive(true);
  };

  const update = (data) => {
    return updateEmployee(data);
  };

  const updateConfirm = async (confirm) => {
    if (confirm && password == "") {
      try {
        await update({
          name,
          lastName1,
          lastName2,
          role,
        });
        //nice
        setNice(true);
      } catch {
        setDBError(true);
      }
    } else if (confirm && password != "") {
      try {
        await update({
          name,
          lastName1,
          lastName2,
          password,
          role,
        });
        setNice(true);
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
        <Modal funct={updateConfirm} />
      </div>
      <div className={active ? "hidden" : "btn btn-primary py-0 "}>
        <button
          className="w-1/2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={cargarDatos}
        >
          Cargar Datos
        </button>
      </div>
      <div
        className={active ? "sm:mx-auto sm:w-full sm:max-w-screen" : "hidden"}
      >
        <div className="sm:px-10">
          <form className="mb-0 space-y-6" onSubmit={handleFuncType}>
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
                  value={name}
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
                <p className="text-red-500 text-xs italic hidden">
                  Este campo es requerido.
                </p>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="flex flex-row">
                <p className="text-red-600 mr-2"></p>
                <label htmlFor="password" className="block text-sm font-medium">
                  Nueva Contraseña, si no desea cambiarla deje el campo vacio
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
                  <option value={role}>Rol actual : {role}</option>
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
              El usuario se edito con exito!
            </p>

            <div>
              <button
                type="submit"
                className="w-1/2 flex justify-center mt-7 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Confirmar Cambios
              </button>
            </div>
          </form>
          <div>
            <button
              className="w-36 flex justify-center mt-5 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={() => navigate("/administracion/empleados")}
            >
              Volver...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

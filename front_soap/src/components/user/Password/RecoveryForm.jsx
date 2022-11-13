import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/authContext";
import { AdminContext } from "../../../contexts/EmployeesProvider";
import { Modal } from "../../../layouts/confirmationModal";
import { InputError } from "../../errorMessages/inputError";
import { PasswordError } from "../../errorMessages/paswordError";

function RecoveryForm() {
  const { updateEmployee } = useContext(AdminContext);
  const { isAuthenticated } = useContext(AuthContext);

  //modal
  const [confirm, setConfirm] = useState(false);

  //navigate
  const navigate = useNavigate();

  //validaciones
  const [error, setError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [passCheck, setPassCheck] = useState(false);
  const [nice, setNice] = useState(false);
  const [nope, setNope] = useState(false);

  //se inicializan los estados
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handlePassword = (e) => {
    clean();
    setNewPassword(e.target.value);
    validatePassword(e.target.value);
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

  const checkPassword = (password) => {
    clean();
    console.log(isAuthenticated);
    if (isAuthenticated.password === password) {
      return true;
    }
    setPassCheck(true);
    return false;
  };

  const validate = () => {
    if (oldPassword == "" || newPassword == "") {
      setError(true);
      return false;
    }
    if (validatePassword(newPassword) && checkPassword(oldPassword)) {
      return true;
    }
    return false;
  };

  const updateConfirm = async (confirm) => {
    if (confirm) {
      try {
        await update({
          password: newPassword,
        });
        setNice(true);
      } catch {
        setNope(true);
      }
    }
    setConfirm(false);
  };

  const clean = () => {
    setNope(false);
    setError(false);
    setPassError(false);
    setPassCheck(false);
    setNice(false);
  };

  const handleFuncType = (e) => {
    e.preventDefault();

    clean();

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

      <div className="sm:mx-auto sm:w-full sm:max-w-screen">
        <div className="sm:px-10"></div>
        <form className="mb-0 space-y-6" onSubmit={handleFuncType}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="md:w-1/2">
              <div className="flex flex-row">
                <p className="text-red-600 mr-2"></p>
                <label
                  htmlFor="password2"
                  className="block text-sm font-medium"
                >
                  Contraseña anterior
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="password2"
                  type="password2"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="appearance-none block w-full input py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
                />
              </div>
              <div className="flex flex-row mt-10">
                <p className="text-red-600 mr-2"></p>
                <label
                  htmlFor="password1"
                  className="block text-sm font-medium"
                >
                  Nueva Contraseña
                </label>
              </div>
              <div className="mt-1 mb-10">
                <input
                  id="password1"
                  type="password1"
                  value={newPassword}
                  onChange={(e) => handlePassword(e)}
                  className="appearance-none block w-full input py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-600"
                />
              </div>
            </div>

            <div className="md:w-1/2"></div>

            <div className={error ? "" : "hidden"}>
              <InputError />
            </div>

            <div className={passError ? "" : "hidden"}>
              <PasswordError />
            </div>

            <p
              className={passCheck ? "text-red-600 text-base italic" : "hidden"}
            >
              Las vieja contraseña no coincide con la ingresada.
            </p>

            <p className={nope ? "text-red-600 text-base italic" : "hidden"}>
              No se cambio la contraseña, llame al asistente de TI para
              verificar esta falla.
            </p>

            <p className={nice ? "text-green-600 text-base italic" : "hidden"}>
              Se cambio su contraseña!
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="flex justify-center mt-7 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Confirmar
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
  );
}

export default RecoveryForm;

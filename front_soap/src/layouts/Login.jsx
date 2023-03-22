import { useContext, useState } from "react";
import Logo from "../assets/JT_Logo.svg";
import CreateReport from "../components/bugsRepoprt/CreateReport";
import InvalidAccess from "../components/errorMessages/AlertInvalidAccess";
import { AuthContext } from "../contexts/authContext";
import LogingService from "../services/LoginService";
const Login = () => {
  const { login } = useContext(AuthContext);
  const [alert, setAlert] = useState();
  const [createReport, setCreateReport] = useState(false)
  async function requestLogin(userName, password) {
    try {
      const response = await LogingService.getAuthentication(
        userName,
        password
      );
      login(response.data[0]);
    } catch (error) {
      setAlert(<InvalidAccess />);
    }
  }

  return (
    <>
    <div className={createReport ? "" : "hidden"}>
        <CreateReport funct={setCreateReport} />
      </div>

    <div className="min-h-screen flex flex-col items-center justify-center">
        <img
        src={Logo}
        alt="Logo"
        className="h-48"
      />
      <div className=" p-6 rounded w-full sm:w-1/2 lg:w-2/5  2xl:w-1/4 -mt-25">
        <form
          className=" space-y-6 pt-8 bg-J&T rounded-3xl px-9 text-center font-bold text-slate-50 text-xl"
          onSubmit={(e) => {
            e.preventDefault();
            const txtuserName = e.target.userName.value;
            const txtPassword = e.target.password.value;
            requestLogin(txtuserName, txtPassword);
          }}
        >
          <div className="flex flex-col space-y-6  rounded-md shadow-sm">
            <div>
              <label htmlFor="userName">Nombre de usuario</label>
              <input
                id="userName"
                name="userName"
                type="text"
                autoComplete="on"
                required
                className="relative block w-full appearance-none  border-0 bg-transparent border-b-2 border-black px-3 py-2 text-white placeholder-slate-50/75   focus:border-b-white  focus:ring-transparent sm:text-sm mt-6"
                placeholder="Nombre de usuario"
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none  border-0 bg-transparent border-b-2 border-black px-3 py-2 text-white placeholder-slate-50/75   focus:border-b-white  focus:ring-transparent sm:text-sm mt-6 "
                placeholder="Contraseña"
              />
            </div>
          </div>
          <div>{alert}</div>
          <div className="py-6 ">
            <button
              type="submit"
              className="group relative flex  justify-center rounded-full border-2 border-black bg-J&T-high py-1 px-2  font-bold text-slate-50 text-xl hover:bg-J&T-low hover:duration-500  focus:border-white  mx-auto extraSmall:w-1/2 w-28"
            >
              Ingresar
            </button>
          </div>
          <div className="text-left pb-2">
            <button
                className="text-slate-50 font-medium text-lg underline hover:text-slate-300 "
                onClick={e => {
                  e.preventDefault()
                  setCreateReport(true)
                }}
            >
              Reportar error
            </button>
          </div>
        </form>
      </div>
      </div>
      </>
  );
};

export default Login;

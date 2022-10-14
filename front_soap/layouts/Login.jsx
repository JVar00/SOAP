import { useContext, useState } from 'react'
import { AuthContext } from '../contexts/authContext'
import Logo from '../src/assets/JT_Logo.svg'
import LogingService from '../services/LoginService'
import InvalidAccess from '../components/AlertInvalidAccess'
const Login = () => {
    const { login } = useContext(AuthContext);
    const [alert, setAlert] = useState();
    
    async function requestLogin(userName, password) {
        try {
            const response = await LogingService.getAuthentication(userName, password);
            login(response.data[0]);
        } catch (error) {
                setAlert(<InvalidAccess />);
        }
    }

    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8  ">
            <div className="w-full max-w-md  ">
                <div>
                    <img
                        className="mx-auto  w-auto "
                        src={Logo}
                        alt="Logo J&T"
                    />
                </div>
                <form
                    className=" space-y-6 pt-8 bg-J&T rounded-3xl px-9 text-center font-bold text-slate-50 text-xl"
                    onSubmit={e => {
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
                                placeholder="Nombre Usuario"
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
                    <div>
                        {alert}
                    </div>
                    <div className="py-6 ">
                        <button
                            type="submit"
                            className="group relative flex  justify-center rounded-full border-2 border-black bg-J&T-high py-1 px-2  font-bold text-slate-50 text-xl hover:bg-J&T-low hover:duration-500  focus:border-white  mx-auto w-1/2">
                            Ingresar
                        </button>
                    </div>
                    <div className="text-left pb-2">
                        <a
                            href="#"
                            className="text-slate-50 font-medium text-base underline hover:text-slate-300 ">
                            Reportar error
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
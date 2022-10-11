import { createContext, useCallback, useMemo, useState } from "react";

const USER = "user";
/*creacion del contexto utilizado para mantener la sesion del usuario, en el cual se crea una variable isAuthenticated
utilizada para verificar si ya hay una sesion iniciada y almacenar los datos del usuario obteniendo los datos del localstorage
,tambien se crean las variables login y logOut en las cuales se envian o eliminan los datos del localstorage y actualiza el valor
de la variable isAuthenticated.
Tambien se crea la constante value la cual se utiliza para almacenar los valores del contexto.
OscarZamora Ramirez.
*/
export const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const user = JSON.parse(window.localStorage.getItem(USER));
        return user;
    });
   
    const login = useCallback(function (userObj) {
        window.localStorage.setItem(USER, JSON.stringify(userObj));
        setIsAuthenticated(userObj);
    }, []);

   
    const logOut = useCallback(function () {
        window.localStorage.removeItem(USER);
        setIsAuthenticated(null);
    }, []);

   
    const value = useMemo(
        () => ({
            login,
            logOut,
            isAuthenticated,
        }),
        [login, logOut, isAuthenticated]
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

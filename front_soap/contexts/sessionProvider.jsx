import { createContext, useEffect, useState } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    //es necesario meterlos al localstorage si no no se guardan
    setUser({
      id: 1, //identificador unico de la base de datos
      name: "Jeff",
      last1: "Vargas",
      last2: "Barrantes",
      role: "Administrador",
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <SessionContext.Provider value={{ user, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

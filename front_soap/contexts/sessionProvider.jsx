import { createContext, useState } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      Name: "Jeff",
      Last1: "Vargas",
      Last2: "Barrantes",
      Role: "Admin",
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

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../contexts/SessionProvider";

export const Login = () => {
  const { user, login } = useContext(SessionContext);

  if (user && user.role === "Administrador") {
    return <Navigate to="/administracion/" />;
  }

  return (
    <>
      <button onClick={login}>Login</button>
    </>
  );
};

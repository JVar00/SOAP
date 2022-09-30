import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../contexts/sessionProvider";

export const Login = () => {
  const { user, login } = useContext(SessionContext);

  if (user) {
    return <Navigate to="/administracion/" />;
  }

  return (
    <>
      <button onClick={login}>Login</button>
    </>
  );
};

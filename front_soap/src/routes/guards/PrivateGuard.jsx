import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { PrivateRoutes, PublicRoutes } from "../models/routes";

const AdminValidation = <Navigate to={PrivateRoutes.ADMIN} />;
const AcomodoValidation = <Navigate to={PrivateRoutes.ACOMODO} />;
const AlistoValidation = <Navigate to={PrivateRoutes.ALISTO} />;
const ChiefValidation = <Navigate to={PrivateRoutes.JEFE} />;

const LoginValidation = <Navigate replace to={PublicRoutes.LOGIN} />;

const PrivateGuard = ({ children, rol }) => {
  const { isAuthenticated } = useContext(AuthContext);
  if (!isAuthenticated) {
    return LoginValidation;
  }
  const rolUser = isAuthenticated.role;

  if (rol !== rolUser && rolUser === "Acomodo") {
    return AcomodoValidation;
  }
  if (rol !== rolUser && rolUser === "Alisto") {
    return AlistoValidation;
  }
  if (rol !== rolUser && rolUser === "Administrador") {
    return AdminValidation;
  }

  if (rol !== rolUser && rolUser === "JefeBodega") {
    return ChiefValidation;
  }

  return children ? children : <Outlet />;
};
export default PrivateGuard;

/*
Elemento encargado de verificar si ya habia una sesion iniciada para permitir acceso a las rutas privadas y redirigir
a la pagina correcta de acuerdo al rol del usuario y si no hay sesion iniciada redirigir al login
Oscar Zamora Ramirez
*/

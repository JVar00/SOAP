import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { PrivateRoutes } from "../models/routes";

const PrivateValidation = <Navigate replace to={PrivateRoutes.ALISTO} />;
const PublicValidation = <Outlet />;

const PublicGuard = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return PrivateValidation;
  }
  return PublicValidation;
};

export default PublicGuard;
/*
Elemento encargado de verificar si ya habia una sesion iniciada para redirigir a las rutas privadas y no
permitir el acceso al login y si no hay sesion iniciada permitir el acceso al login
Oscar Zamora Ramirez
*/

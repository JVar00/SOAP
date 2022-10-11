import { useContext } from "react";
import { AuthContext } from '../contexts/authContext';
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from '../models/routes'

const AdminValidation = <Navigate to={PrivateRoutes.ADMIN} />;
const AcomodoValidation = <Navigate to={PrivateRoutes.ACOMODO} />;
const AlistoValidation = <Navigate to={PrivateRoutes.ALISTO} />;
const LoginValidation = (
    <Navigate
        replace
        to={PublicRoutes.LOGIN}
    />
);

const PrivateGuard = ({ children, rol }) => {
    const { isAuthenticated } = useContext(AuthContext);
    if (!isAuthenticated) {
        return LoginValidation;
    }
    const rolUser = isAuthenticated.rol;

    if (rol !== rolUser && rolUser === "Acomodo") {
        return AcomodoValidation;
    } else if (rol !== rolUser && rolUser === "Alisto") {
        return AlistoValidation;
    } else if (rol !== rolUser && rolUser === "Admin") {
        return AdminValidation;
    }

    return children ? children : <Outlet />;
};
export default PrivateGuard;

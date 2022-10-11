import { Outlet, Route, Routes } from "react-router-dom";

/*
Utilidad que se encarga de redirigir al usuario a una pagina not found cuando 
digite una ruta no valida.
Oscar Zamora Ramirez
*/
const RoutesNotFound = ({ children }) => {
    return (
        <Routes>
            {children ? children : <Outlet />}
            <Route
                path="*"
                element={<div>NOT FOUND</div>}
            />
        </Routes>
    );
};

export default RoutesNotFound;

import { Outlet, Route, Routes, useNavigate } from "react-router-dom";

/*
Utilidad que se encarga de redirigir al usuario a una pagina not found cuando 
digite una ruta no valida.
Oscar Zamora Ramirez
*/

//modificar estilo
const RoutesNotFound = ({ children }) => {
  const navigate = useNavigate();
  return (
    <Routes>
      {children ? children : <Outlet />}
      <Route
        title="404 Not Found"
        path="*"
        element={
          <div className="">
            <h3 className="">
              La pagina que esta intentando acceder no existe o no tiene
              permisos para acceder a ella.
            </h3>

            <button
              className="w-36 flex justify-center mt-5 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={() => navigate("/")}
            >
              Volver al inicio
            </button>
          </div>
        }
      />
    </Routes>
  );
};

export default RoutesNotFound;

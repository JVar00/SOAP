import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../../contexts/sessionProvider";
import { NavButton } from "../../layouts/navButton";

export const AdminSideMenu = () => {
  const { user } = useContext(SessionContext);

  if (!user || (user && user.role != "Administrador")) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="flex flex-col items-start justify-center pt-10 pb-10">
        <h2 className="pl-5 font-bold pb-3">Menu Administrador</h2>
        <div className="bg-white w-52 h-1"></div>
      </div>

      <NavButton
        redirectTo="/administracion/empleados"
        inputName="Empleados Registrados"
      />

      <NavButton
        redirectTo="/administracion/incluir"
        inputName="Incluir Empleados"
      />

      {/* <Link className="" to={`/administracion/editar/${user.id}`}>
          Incluir Empleados
        </Link> */}
    </>
  );
};

import { NavButton } from "../../layouts/navButton";

export const AdminSideMenu = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-center pt-10 pb-10">
        <h2 className="pl-5 font-bold pb-3">Menu Administrador</h2>
        <div className="bg-white w-52 h-1"></div>
      </div>

      <NavButton
        active={true}
        redirectTo="/administracion/"
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

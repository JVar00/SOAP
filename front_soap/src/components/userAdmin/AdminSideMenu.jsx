import { NavButton } from "../../layouts/NavButton";

export const AdminSideMenu = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-center pt-10 pb-10">
        <h2 className="pl-3 font-bold pb-1 xl:text-lg">Menú Administrador</h2>
        <div className="bg-white w-52 h-1"></div>
      </div>

      <NavButton
        redirectTo="/administracion/colaboradores"
        inputName="Colaboradores Registrados"
      />

      <NavButton
        redirectTo="/administracion/incluir"
        inputName="Incluir Colaboradores"
      />

      {/* <Link className="" to={`/administracion/editar/${user.id}`}>
          Incluir Empleados
        </Link> */}
    </>
  );
};

import { NavButton } from "../../layouts/NavButton";

export const ChiefSideMenu = () => {
  return (
    <>
      <div className="flex flex-col items-start justify-center pt-10 pb-10">
        <h2 className="pl-3 font-bold pb-1 xl:text-lg">Menu Jefe de Bodega</h2>
        <div className="bg-white w-52 h-1"></div>
      </div>

      <NavButton redirectTo="/jefeBodega/empleados" inputName="Empleados" />

      <NavButton
        redirectTo="/jefeBodega/bodega"
        inputName="Administrar Bodega"
      />

      <NavButton
        redirectTo="/jefeBodega/cabecera"
        inputName="Administrar Cabeceras"
      />
    </>
  );
};

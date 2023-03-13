import { NavButton } from "../../../layouts/navButton";

export const ChiefSideMenu = () => {
  return (
    <div>
      <div className="flex flex-col items-start justify-center pt-10 pb-10">
        <h2 className="pl-3 font-bold pb-1 xl:text-lg">Menú Jefe de Bodega</h2>
        <div className="bg-white w-52 h-1"></div>
      </div>

      <NavButton
        redirectTo="/jefeBodega/colaboradores"
        inputName="Colaboradores"
      />

      <NavButton
        redirectTo="/jefeBodega/bodega"
        inputName="Administrar Bodega"
      />

      <NavButton
        redirectTo="/jefeBodega/cabecera"
        inputName="Administrar cabeceras"
      />
    </div>
  );
};

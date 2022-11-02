import { NavButton } from "../../../layouts/NavButton";

function UserSideMenu() {
  return (
    <>
      <div className="flex flex-col items-start justify-center pt-10 pb-10">
        <h2 className="pl-3 font-bold pb-1 xl:text-lg">Menú de Usuario</h2>
        <div className="bg-white w-52 h-1"></div>
      </div>

      <NavButton
        redirectTo="/usuario/recuperarContraseña"
        inputName="Recuperar contraseña"
      />
    </>
  );
}

export default UserSideMenu;

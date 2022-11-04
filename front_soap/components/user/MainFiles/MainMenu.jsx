import { AuthContext } from "../../../contexts/authContext";

/*
 Para las rutas, primero deben ir en el local storage,
 para identificarlas por si se salen de la pagina, cuando terminen la ruta se eliminan y se agregan al perfil, si no quedan ahi, y sis e completan se eliminan del local storage y se agregan al perfil
 Si se intenta agregar una orden ya existente en el sistema y que ya este completada que no permita hacerlo
 Puede ser si vuelve a intentar agregar nuevas ordenes esas ordenes van a estar ahi, cargadas del localhost
 no se agregan ordenes hasta que se finalicen, mensaje de aviso de que el progreso se va a eliminar si se salen de la pagina
 Tambien puede ser que detecte si existe algo lo devuelva donde estaba con la ruta ya hecha pero sin su progreso
 Tener en cuenta guardar en localstorage una vez se confirma la orden, para que no se pierda el progreso a la hora de crear la ruta
 */

function MainMenu() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="w-full max-w-screen xl:max-w-5xl lg:ml-60 xl:ml-72">
      <div className="flex flex-col md:ml-5 ">
        <h2 className="mb-5 font-bold text-5xl md:text-7xl lg:mb-0">Menú</h2>
        <h2 className="pb-5 mb-5 font-bold text-5xl md:text-7xl lg:mb-0 text-red-600">
          de {isAuthenticated.role}
        </h2>
      </div>

      {/* <SearchScan orders={orders}/> */}

      {/* { orders[0] ? () : () } */}

      {/* <ScannedOrders orders={orders} setCurrentOrder = {setCurrentOrder}/> */}

      {/* <Order currentOrder = { currentOrder }/> */}
    </div>
  );
}

export default MainMenu;

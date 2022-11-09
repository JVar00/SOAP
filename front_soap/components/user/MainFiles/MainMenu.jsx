import { useContext } from "react";
import { AuthContext } from "../../../contexts/authContext";
import Order from "../Orders/Order";
import SearchScan from "../Orders/SearchScan";

/*
 Para las rutas, primero deben ir en el local storage,
 para identificarlas por si se salen de la pagina, cuando terminen la ruta se eliminan y se agregan al perfil, si no quedan ahi, y si se completan se eliminan del local storage y se agregan al perfil
 Si se intenta agregar una orden ya existente en el sistema y que ya este completada que no permita hacerlo
 Puede ser si vuelve a intentar agregar nuevas ordenes esas ordenes van a estar ahi, cargadas del localhost
 no se agregan ordenes hasta que se finalicen, mensaje de aviso de que el progreso se va a eliminar si se salen de la pagina
 Tambien puede ser que detecte si existe algo lo devuelva donde estaba con la ruta ya hecha pero sin su progreso
 Tener en cuenta guardar en localstorage una vez se confirma la orden, para que no se pierda el progreso a la hora de crear la ruta
 */

function MainMenu() {
  const { isAuthenticated } = useContext(AuthContext);

  const sinOrdenes = (
    <p className="text-medium text-green-600">Sin ordenes para mostrar...</p>
  );

  return (
    <div className="w-full max-w-screen xl:max-w-5xl lg:ml-64 xl:ml-72 mb-10">
      <div className="flex flex-row justify-center lg:justify-start">
        <h2 className="mb-5 font-bold text-3xl lg:mb-0">Menú de </h2>
        <h2 className="pb-5 mb-5 font-bold text-3xl lg:mb-0 ml-2 text-red-600">
          {isAuthenticated.role}
        </h2>
      </div>

      {/* TABLA DE ORDENES SMALL, AL LADO IZQUIERDO VA EL SEARCH SCAN Y EN MOBILE VA ARRIBA */}
      <div className="ml-2 md:ml-5 lg:ml-0">
        <h2 className="font-medium text-red-600 mb-2 mt-5">Escanear ordenes</h2>
        <SearchScan />
      </div>

      {/* {orders[0] ? (
        { sinOrdenes }
      ) : (
        <ScannedOrders orders={orders} setCurrentOrder={setCurrentOrder} />
      )} */}

      {/* <h2>Descripcion de la orden: {currentOrder.number} </h2> */}
      {/* <Order order={currentOrder} /> */}
    </div>
  );
}

export default MainMenu;

import { useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/authContext";
import Order from "../Orders/Order";
import SearchScan from "../Orders/SearchScan";
import { OrderContext } from '../../../contexts/OrderProvider'

function MainMenu() {
  const { isAuthenticated } = useContext(AuthContext);
  const { orders} =useContext(OrderContext)

  return (
    <div className="w-full max-w-screen lg:ml-10 lg:mr-10 xl:ml-15 mb-10">
      <div className="flex flex-row justify-center lg:justify-start">
        <h2 className="mb-5 font-bold text-3xl lg:mb-0">Menú de </h2>
        <h2 className="pb-5 mb-5 font-bold text-3xl lg:mb-0 ml-2 text-red-600">
          {isAuthenticated.role}
        </h2>
      </div>

      <div className=" md:ml-5 lg:ml-0">
        <h2 className="font-bold text-red-600 text-xl mb-2">Escanear ordenes</h2>
        <SearchScan />
      </div>

      <div className="flex flex-col md:grid grid-cols-2 mt-10 md:ml-5 lg:ml-0 lg:mr-10 ">
          {
            orders[0] ? (
              
            <div className="mt-10 md:mt-0 col-auto  md:w-600 lg:w-full">
              <h2 className="font-bold  mb-2 text-xl">Ordenes agregadas:</h2>
              {orders && orders.map(order => (
                <Order order={order} key={order.id } />
                ))}
            </div>
          ) : (
            <h2 className="text-medium ">Sin ordenes para mostrar...</h2>
            )
    
          }
      </div>

      </div>
  );
}

export default MainMenu;

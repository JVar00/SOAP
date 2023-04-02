
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { OrderContext } from "../../../contexts/OrderProvider";

export const History = ({history}) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="mr-7 lg:mr-72 xl:mr-7 ">
      <div className="bg-white space-y-3  rounded-lg shadow ">
        <div className="space-y-3 p-4 rounded-lg shadow text-sm bg-red-600 rounded-t-md">
          <div className="flex items-center space-x-2  justify-between" >

            <label className="text-white font-bold text-md hover:underline">
              {`Numero de orden: ${history && history.id_order}`}
            </label>
            
            <span className="p-1.5 text-xs font-bold uppercase tracking-wider text-white bg-red-200 rounded-lg bg-opacity-50">
                Fecha de finalización: {history.created_at}
            </span>
                
            
          </div>

          <div className="flex justify-between">

              {isAuthenticated.role != "Alisto" &&
            isAuthenticated.role != "Acomodo" ? (
              <div className="text-sm font-bold text-white">
                {/* Tiempo tomado */}
                {/* { order.time } */}
              </div>
            ) : (
              <></>
            )}

          </div>

          
          
        </div>

      </div>
      
    </div>
  );
};

export default History;
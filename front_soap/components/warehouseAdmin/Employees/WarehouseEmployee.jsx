import { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { AdminContext } from "../../../contexts/EmployeesProvider";
import CompletedOrderPerUser from "../../user/Orders/CompletedOrderPerUser";
import Filter from "../../user/Orders/Filter";

function WarehouseEmployee() {
  return (
    <div className="w-full max-w-screen xl:max-w-5xl lg:ml-60 xl:ml-72">
      <div className=" md:ml-5 ">
        <section className="flex flex-col md:grid grid-cols-2">
          <div className="order-2 md:order-1 flex flex-col col-auto">
            <h2 className="mb-2 font-bold text-xl md:text-2xl lg:mb-0 text-black">
              Empleado de Alisto/Acomodo
            </h2>
            <h2 className="mb-5 lg:mt-3 font-bold text-2xl md:text-3xl lg:mb-0 text-red-600">
              Nombre de Empleado
            </h2>
          </div>
          <div className="flex order-1 md:order-2 md:justify-end md:mr-10 lg:mr-72 xl:mr-7 mb-10 md:mb-0 col-auto">
            <div>
              <button className="bg-red-600 py-2 px-5 rounded-md text-white font-bold">
                Volver
              </button>
            </div>
          </div>
        </section>

        <section className="mt-10 lg:mt-20 mb-10">
          <div className="flex flex-col lg:flex-row xl:justify-start">
            <h2 className="mb-5 font-bold lg:ml-0 text-lg lg:mb-0">
              Historial de Ordenes
            </h2>
            <Filter />
          </div>
          <CompletedOrderPerUser />
        </section>
      </div>
    </div>
  );
}

export default WarehouseEmployee;

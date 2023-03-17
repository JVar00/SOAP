import React from "react";
import CreateWarehouse from "./Management/Warehouses/CreateWarehouse";
import TableWarehouses from "./Management/Warehouses/TableWarehouses";
function Warehouse() {
  return (
    <div className="w-full max-w-screen xl:max-w-5xl lg:ml-60 xl:ml-72">
      <h1 className="text-2xl font-bold text-red-600 ">Administración de bodegas</h1> 

    <CreateWarehouse />
    <TableWarehouses/>  
  </div>
  )
}

export default Warehouse;

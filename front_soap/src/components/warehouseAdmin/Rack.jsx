import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { WarehouseContext } from "../../contexts/WarehouseProvider";
import CreateRack from './Management/Racks/CreateRack'
import TableRacks from "./Management/Racks/TableRacks";
function Rack() {
  const { numero } = useParams();
  const {getSpecificHeadbord, headbord} = useContext(WarehouseContext)
  useEffect(() => {
    if (numero) {
      getSpecificHeadbord(numero)
    }
  },[])

  return (
    <div className="w-full max-w-screen xl:max-w-5xl lg:ml-60 xl:ml-72" >
      <h1 className="text-2xl font-bold text-red-600">Administración de racks de la "{headbord ? headbord.description : '' }"</h1> 
      <CreateRack />
      <TableRacks/>
    </div>
  )
}

export default Rack;

import { useEffect,useState, useContext  } from "react";
import { WarehouseContext } from "../../contexts/WarehouseProvider";
import CreateHeardbord from "./Management/Headboards.jsx/CreateHeadbord";
import TableHeadbords from "./Management/Headboards.jsx/TableHeadbords";

const Headboard = () => {
  const { warehouses, getAllWarehouses, getSpecificWarehouse} = useContext(WarehouseContext);
  const [idWarehouse, setIdWarehouse] = useState(0);

  useEffect(() => {
    getAllWarehouses();
  }, [])
  
  
 return (
   <div className="w-full max-w-screen xl:max-w-5xl lg:ml-60 xl:ml-72">
      <h1 className="text-2xl font-bold text-red-600 mb-2">Administracion de cabeceras</h1> 
     
      <div className="flex flex-row">
        <p className="text-red-600 mr-2 mt-4">*</p>
        <div className="flex flex-col extraSmall:flex-row">
          <label
            htmlFor="warehouse"
            className="text-lg font-medium mr-6 mt-4">
            Bodega
          </label>
          <select
            id="warehouse"
            className="  border text-base  rounded-lg h-10 mt-3"
            onChange={(e) => {
              if (e.target.value == 0) {
                
                setIdWarehouse(e.target.value);
              } else {
                getSpecificWarehouse(e.target.value);
                setIdWarehouse(e.target.value);
              }
            }}
            onBlur={(e) => {
                if (e.target.value == 0) {
                setIdWarehouse(e.target.value);
              } else {
                getSpecificWarehouse(e.target.value);
                setIdWarehouse(e.target.value);
              }
            }}
        >
          <option value={0}>Seleccione una Bodega</option>
          {
            warehouses && warehouses.map(warehouse => (
              <option key={warehouse.id} value={warehouse.id} >{warehouse.location }</option>
            ))
            }
          </select>
        </div>
     </div>
     
     <div className={idWarehouse == 0 ? 'hidden' : ""}>
      <CreateHeardbord/>
      <TableHeadbords />
     </div>
  </div>
 
  )
}

export default Headboard;

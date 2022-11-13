import { createContext, useState } from "react";
import WarehouseServiceData from "../services/WarehouseService"
import HeadbordServiceData from '../services/HeadbordService'
import RackServiceData from '../services/RackService'
import ShelfServiceData from "../services/ShelfService";
export const WarehouseContext = createContext();

export const WarehouseProvider = ({ children }) => {
  const [warehouses, setWarehouses] = useState([])
  const [warehouse, setWarehouse] = useState(null)
  const [headbords, setHeadbords] = useState([])
  const [headbord, setHeadbord] = useState(null)
  const [racks, setRacks] = useState([]);
  const [rack, setRack] = useState(null);
  const [shelves, setShelves] = useState([]);

  //metodos de administrar bodega Oscar Zamora
  const getAllWarehouses = async () => {
    const response = await WarehouseServiceData.getAll();
    setWarehouses(response.data);
  }

  const getSpecificWarehouse = async (id) => {
    const response = await WarehouseServiceData.get(id);
    setWarehouse(response.data);
    setHeadbords(response.data.hallways);
    return response;
  }

  const updateWarehouse = async (data, id) => {
    return WarehouseServiceData.update(data, id);
  }

  const deleteWarehouse = async (id) => {
    return WarehouseServiceData.remove(id);
  }

  const addWarehouse = async (data) => {
    return WarehouseServiceData.create(data);
  }

  //metodos administrar cabeceras Oscar Zamora
  const getSpecificHeadbord = async (id) => {
    const response = await HeadbordServiceData.get(id);
    setHeadbord(response.data);
    return response;
  }
  
  const updateHeadbord = async (data, id) => {
    return HeadbordServiceData.update(data, id);
  }
  
  const deleteHeadbord = async (id) => {
    return HeadbordServiceData.remove(id);
  }
  
  const addHeadbord = async (data) => {
    return HeadbordServiceData.create(data);
  }
  
  //metodos para administrar los racks Oscar Zamora

  const getSpecificsRacks = async (idHeadbord) => {
    const response = await RackServiceData.getAll();
    const filterByHeadbord = rack => rack.hallway_id == idHeadbord;
    setRacks(response.data.filter(filterByHeadbord));
  }

  const getSpecificRack = async (id) => {
    const response = await RackServiceData.get(id);
    setRack(response.data);
    setShelves(response.data.shelfs.sort((a, b) => {
      if (a.code < b.code) {
        return -1
      }
      return 0
    }))
    return response;
  }

  const updateRack = async (data, id) => {
    return RackServiceData.update(data, id);
  }

  const deleteRack = async (id) => {
      return RackServiceData.remove(id);
  }

  const addRack = async (data) => {
      return RackServiceData.create(data);
  }

  //metodos para administrar los estantes Oscar Zamora

  const deleteShelf = async (id) => {
      return ShelfServiceData.remove(id);
  }

  const addShelf = async (data) => {
      return ShelfServiceData.create(data);
  }


  return (
    <WarehouseContext.Provider
      value={{
        warehouse,
        warehouses,
        headbords,
        headbord,
        getAllWarehouses,
        getSpecificWarehouse,
        updateWarehouse,
        deleteWarehouse,
        addWarehouse,
        headbords,
        headbord,
        getSpecificHeadbord,
        deleteHeadbord,
        updateHeadbord,
        addHeadbord,
        rack,
        racks,
        getSpecificRack,
        updateRack,
        deleteRack,
        addRack,
        deleteShelf,
        addShelf,
        shelves,
        getSpecificsRacks
      }}
    >{children}</WarehouseContext.Provider>
  );
};

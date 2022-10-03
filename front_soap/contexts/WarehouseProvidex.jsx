import { createContext, useEffect, useState } from "react";
import WarehouseServiceData from "../services/WarehouseService";

export const WarehouseContext = createContext();

export const WarehouseProvider = ({ children }) => {
  return (
    <WarehouseContext.Provider value={{}}>{children}</WarehouseContext.Provider>
  );
};

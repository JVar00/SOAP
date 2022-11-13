import { createContext, useEffect, useState } from "react";
import RouteServiceData from "../services/RouteService";

export const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  return <RouteContext.Provider value={{}}>{children}</RouteContext.Provider>;
};

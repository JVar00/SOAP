import { createContext, useEffect, useState } from "react";
import OrderServiceData from "../services/OrderService";

export const RouteContext = createContext();

export const OrderProvider = ({ children }) => {
  return <OrderContext.Provider value={{}}>{children}</OrderContext.Provider>;
};

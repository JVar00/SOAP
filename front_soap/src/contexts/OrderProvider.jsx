import { createContext, useEffect, useState } from "react";
import OrderServiceData from "../services/OrderService";

const ORDERS = 'ORDERS'

export const OrderContext = createContext('');

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const ordersLocalStorage = JSON.parse(window.localStorage.getItem(ORDERS));
    if (ordersLocalStorage) {
      return ordersLocalStorage
    }
    return []
  })

  //agrega un nuevo elemento al array de ordenes
  const addOrder = newOrder => {
    setOrders([...orders, newOrder])
    const newOrders = [...orders, newOrder]
    window.localStorage.setItem(ORDERS, JSON.stringify(newOrders))
  }

  const filter = (order1, order2) => {
    return JSON.stringify(order1) === JSON.stringify(order2);
  }

  const updateOrders = (orderDelete) => {
    const newOrders = orders.filter(order => !filter(order, orderDelete))
    if (newOrders.length === 0) {
      setOrders(newOrders)
      return window.localStorage.removeItem(ORDERS);
    }
    window.localStorage.setItem(ORDERS, JSON.stringify(newOrders))
    setOrders(newOrders)
  }

  const getOrder = async (id) => {
    const response = OrderServiceData.get(id)
    return response
  }

  const saveHistory = (data) => {
    return OrderServiceData.saveHistory(data)
  }

  return <OrderContext.Provider value={{getOrder, orders, addOrder, updateOrders, saveHistory}}>{children}</OrderContext.Provider>;
};

import { createContext, useState } from "react";
import OrderServiceData from "../services/OrderService";

const ORDERS = 'ORDERS'

export const OrderContext = createContext('');

export const OrderProvider = ({ children }) => {

  const [history, setUserHistory] = useState([]);
  
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

  const getHistory = (user_id) => {
    const response = OrderServiceData.getHistory(user_id)
    setUserHistory(response.data);
  }

  const getHistoryByDateRange = (userid, startDate, endDate) => {
    getHistory(user_id)
    const filteredHistory = history.filter(item => {
      const createdAt = new Date(item.created_at);
      return createdAt >= startDate && createdAt <= endDate;
    });
    setUserHistory(filteredHistory);
  };

  return <OrderContext.Provider value={{getOrder, orders, addOrder, updateOrders, saveHistory, getHistoryByDateRange, history}}>{children}</OrderContext.Provider>;
};

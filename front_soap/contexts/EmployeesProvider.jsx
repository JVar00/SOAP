import { createContext, useState } from "react";
import AdminServiceData from "../services/AdminService";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState(null);

  //esto solo deberia cargar los empleados de acomodo y alisto, hacer cambio para el siguiente sprint, esto es algo del backend
  const getAllEmployees = async () => {
    const response = await AdminServiceData.getAll();
    setEmployees(response.data);
    //return response.status;
  };

  const getOneEmployee = async (username) => {
    const response = await AdminServiceData.get(username);
    setEmployee(response.data);
    //return response.status;
  };

  const deleteEmployee = async (username) => {
    await AdminServiceData.remove(username);
    getAllEmployees();
    //return response.status;
  };

  const updateEmployee = async (data) => {
    await AdminServiceData.update(data);
    cleanData();
    //return response.status;
  };

  const cleanData = () => {
    setEmployee({
      username: "",
      name: "",
      last1: "",
      last2: "",
      role: "",
      password: "",
    });
  };

  const addEmployee = async (data) => {
    await AdminServiceData.create(data);
    //return response.status;
  };

  return (
    <AdminContext.Provider
      value={{
        getAllEmployees,
        getOneEmployee,
        deleteEmployee,
        updateEmployee,
        addEmployee,
        employee,
        employees,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

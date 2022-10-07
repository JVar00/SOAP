import { createContext, useState } from "react";
import AdminServiceData from "../services/AdminService";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState(null);

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

  const updateData = async () => {
    await AdminServiceData.update({ jsonparams });
    //return response.status;
  };

  const storeData = async () => {
    await AdminServiceData.create({ jsonparams });
    //return response.status;
  };

  return (
    <AdminContext.Provider
      value={{
        getAllEmployees,
        getOneEmployee,
        deleteEmployee,
        updateData,
        storeData,
        employee,
        employees,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

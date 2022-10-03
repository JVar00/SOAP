import { createContext, useState } from "react";
import AdminServiceData from "../services/AdminService";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState(null);

  const getAllEmployees = async () => {
    const response = await AdminServiceData.getAll();
    setEmployees(response.data);
    return response;
  };

  const getOneEmployee = async (id) => {
    const response = await AdminServiceData.get(id);
    setEmployee(response.data);
    return response;
  };

  const deleteEmployee = async (id) => {
    await AdminServiceData.remove(id);
    getAllEmployees();
    return response;
  };

  const updateData = async () => {
    await AdminServiceData.update({ jsonparams });
    return response;
  };

  const storeData = async () => {
    await AdminServiceData.create({ jsonparams });
    return response;
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

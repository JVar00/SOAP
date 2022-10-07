import { createContext, useState } from "react";
import AdminServiceData from "../services/AdminService";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({
    username: "",
    name: "",
    last1: "",
    last2: "",
    role: "",
    password: "",
  });

  //esto solo deberia cargar los empleados de acomodo y alisto, hacer cambio para el siguiente sprint, esto es algo del backend
  const getAllEmployees = async () => {
    setEmployees([
      {
        username: "Var", //identificador unico de la base de datos
        name: "Jeff",
        last1: "Vargas",
        last2: "Barrantes",
        role: "Administrador",
      },
      {
        username: "Var1", //identificador unico de la base de datos
        name: "Jeff1",
        last1: "Vargas1",
        last2: "Barrantes1",
        role: "Alisto",
      },
      {
        username: "Var2", //identificador unico de la base de datos
        name: "Jeff2",
        last1: "Vargas2",
        last2: "Barrantes2",
        role: "Acomodo",
      },
      {
        username: "Var3", //identificador unico de la base de datos
        name: "Jeff3",
        last1: "Vargas3",
        last2: "Barrantes3",
        role: "Acomodo",
      },
      {
        username: "Var4", //identificador unico de la base de datos
        name: "Jeff4",
        last1: "Vargas4",
        last2: "Barrantes4",
        role: "Acomodo",
      },
      {
        username: "Var5", //identificador unico de la base de datos
        name: "Jeff5",
        last1: "Vargas5",
        last2: "Barrantes5",
        role: "Acomodo",
      },
    ]);
    //const response = await AdminServiceData.getAll();
    //setEmployees(response.data);
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

  const updateEmployee = async () => {
    await AdminServiceData.update({ jsonparams });
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

  const addEmployee = async () => {
    await AdminServiceData.create({ jsonparams });
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

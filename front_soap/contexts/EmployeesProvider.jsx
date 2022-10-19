import { createContext, useState } from "react";
import AdminServiceData from "../services/AdminService";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState(null);
  const [user, setUser] = useState("");

  /*la variable cacheEmployees guarda la lista de usuarios, ya que si se modifica la variable employees para mostrar los usuarios con rol de acomodo por ejemplo
  al querer mostrar los de alisto, employees contendra unicamente usuarios con rol de acomodo impidiendo que se pueda buscar usuarios de alisto,
   así que cacheEmployees siempre va a conservar todos los usuarios en general, sin importar las modificaciones 
   que se le hagan a employees. Oscar Zamora
  */
  const [cacheEmployees, setCacheEmployees] = useState([]);

  //esto solo deberia cargar los empleados de acomodo y alisto, hacer cambio para el siguiente sprint, esto es algo del backend
  const getAllEmployees = async () => {
    const response = await AdminServiceData.getAll();
    setEmployees(response.data);
    setCacheEmployees(response.data);
    //return response.status;
  };

  const getOneEmployee = async (username) => {
    const response = await AdminServiceData.get(username);
    setUser(response.data.user);
    return response;
  };

  const deleteEmployee = (username) => {
    return AdminServiceData.remove(username);
  };

  const updateEmployee = (data) => {
    return AdminServiceData.update(data, user);
  };

  const addEmployee = (data) => {
    return AdminServiceData.create(data);
  };

  //buscar solo los empleados con rol de acomodo, ya sea en general o digitando tambien nombre Oscar Zamora
  const getAcomodoEmployees = (userName) => {
    const aux = { ...cacheEmployees };
    const getAcomodo = (user) => user.role.includes("Acomodo");
    if (!userName) {
      setEmployees(Object.values(aux).filter(getAcomodo));
    } else {
      const getNombre = (user) =>
        user.name.toLowerCase().includes(userName.toLowerCase());
      setEmployees(Object.values(aux).filter(getAcomodo).filter(getNombre));
    }
  };

  //buscar solo los empleados con rol de alisto, ya sea en general o digitando tambien el nombre Oscar Zamora
  const getAlistoEmployees = (userName) => {
    const aux = { ...cacheEmployees };
    const getAlisto = (user) => user.role.includes("Alisto");
    if (!userName) {
      setEmployees(Object.values(aux).filter(getAlisto));
    } else {
      const getNombre = (user) =>
        user.name.toLowerCase().includes(userName.toLowerCase());
      setEmployees(Object.values(aux).filter(getAlisto).filter(getNombre));
    }
  };
  //buscar usuario por nombre sin especificar el rol Oscar Zamora
  const getSpecificEmployee = (userName, checkAlisto, checkAcomodo) => {
    const aux = { ...cacheEmployees };
    if (checkAlisto) {
      getAlistoEmployees(userName);
    } else if (checkAcomodo) {
      getAcomodoEmployees(userName);
    } else if (!userName) {
      getAllEmployees();
    } else {
      const getName = (user) =>
        user.name.toLowerCase().includes(userName.toLowerCase());
      setEmployees(Object.values(aux).filter(getName));
    }
  };

  return (
    <AdminContext.Provider
      value={{
        getAllEmployees,
        getOneEmployee,
        deleteEmployee,
        updateEmployee,
        addEmployee,
        setEmployee,
        employee,
        employees,
        getAcomodoEmployees,
        getAlistoEmployees,
        getSpecificEmployee,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

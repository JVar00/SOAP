import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdminContext } from "../../contexts/EmployeesProvider";
import { UpdateForm } from "../UpdateForm";

const Edit = () => {
  const { username } = useParams();
  const { setEmployee, getOneEmployee } = useContext(AdminContext);

  const getEmployee = async () => {
    return await getOneEmployee(`${username}`);
  };

  useEffect(() => {
    const response = getEmployee();
    if (response.status === 200) {
      setEmployee(response.data);
    } else {
      //falta el que hacer si no lo encuentra
    }
  }, []);

  return (
    <div className="w-full max-w-screen xl:max-w-5xl lg:ml-60 xl:ml-72">
      <div className="flex flex-col xl:justify-start">
        <h2 className="font-bold ml-5 lg:ml-16 text-lg lg:mb-0">
          Menu de edicion
        </h2>
        <h2 className="mb-5 flex flex-row ml-5 mt-2 lg:ml-16 text-sm lg:mb-0">
          <p className="text-red-600 mr-2">*</p> Campos Obligatorios
        </h2>
      </div>
      <div className="lg:w-3/4 xl:w-full">
        <UpdateForm />
      </div>
    </div>
  );
};
export default Edit;

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdminContext } from "../../contexts/EmployeesProvider";
import { UpdateForm } from "../UpdateForm";

const Edit = () => {
  //  ../administracion/editar/username
  const { username } = useParams();
  // Necesito el setEmployee y el getOneEmployee
  const { setEmployee, getOneEmployee } = useContext(AdminContext);

  //Ui general para crear un usuario, llama al formulacion de creacion

  //Obtengo el empleado que se va a editar

  //Obtengo el empleado que se va a editar y lo guardo en el estado para utilizarlo ene l formualrio

  useEffect(() => {
    const getByID = async () => {
      const response = await getOneEmployee(`${username}`);
      setEmployee(response.data);
    };
    getByID();
  }, []);

  return (
    <div className="w-full max-w-screen xl:max-w-5xl lg:ml-60 xl:ml-72">
      <div className="flex flex-col xl:justify-start">
        <h2 className="font-bold ml-5 lg:ml-16 text-lg lg:mb-0">
          Editando Usuario {username}
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

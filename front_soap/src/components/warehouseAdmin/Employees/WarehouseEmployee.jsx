import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminContext } from "../../../contexts/EmployeesProvider";
import Filter from "../../user/Orders/Filter";
import Order from "../../user/Orders/Order";

function WarehouseEmployee() {
  const navigate = useNavigate();

  const { username } = useParams();

  const { setEmployee, employee, getOneEmployee } = useContext(AdminContext);

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //
  // infinity scroll implementation
  // Esto se implementa una vez la logica en el backend este lista
  //

  //orders

  const search = async () => {
    try {
      const response = await getOneEmployee(username);
      if (response.data.res == false) {
        setError(true);
      } else {
        setEmployee(response.data);
      }
      setIsLoading(false);
    } catch {
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    search();
  }, []);

  if (error)
    return (
      <h2 className="lg:ml-60 xl:ml-72 text-red-600 text-xl italic">
        Error, no se encontro el usuario.
      </h2>
    );

  return isLoading ? (
    <h2 className="lg:ml-60 xl:ml-72 text-black text-2xl italic">
      Cargando...
    </h2>
  ) : (
    <div className="w-full max-w-screen xl:max-w-5xl lg:ml-60 xl:ml-72">
      <div className=" md:ml-5 ">
        <section className="flex flex-col md:grid grid-cols-2">
          <div className="order-2 md:order-1 flex flex-col col-auto">
            <h2 className="mb-2 font-bold text-xl md:text-2xl lg:mb-0 text-black">
              Empleado de {employee.role}
            </h2>
            <h2 className="mb-5 lg:mt-3 font-bold text-2xl md:text-3xl lg:mb-0 text-red-600">
              {employee.name +
                " " +
                employee.lastName1 +
                " " +
                employee.lastName2}
            </h2>
          </div>
          <div className="flex order-1 md:order-2 md:justify-end md:mr-10 lg:mr-72 xl:mr-7 mb-10 md:mb-0 col-auto">
            <div>
              <button
                className="bg-red-600 py-2 px-5 rounded-md text-white font-bold"
                onClick={() => navigate("/jefeBodega/colaboradores")}
              >
                Volver
              </button>
            </div>
          </div>
        </section>

        {/* falta el orderProvider fuera */}

        <section className="mt-10 lg:mt-20 mb-10">
          <div className="flex flex-col lg:flex-row xl:justify-start">
            <h2 className="mb-5 font-bold lg:ml-0 text-lg lg:mb-0">
              Historial de Ordenes
            </h2>
            <Filter />
          </div>
          <Order />
          {/* {orders[0] ? (
            orders.map((order) => <Order order={order} key={1} />) // falta el key
          ) : (
            <p className="text-medium text-red-600">
              Este usuario no ha hecho ninguna orden
            </p>
          )} */}
        </section>
      </div>
    </div>
  );
}

export default WarehouseEmployee;

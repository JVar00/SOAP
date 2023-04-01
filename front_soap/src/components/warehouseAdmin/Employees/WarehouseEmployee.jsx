import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdminContext } from "../../../contexts/EmployeesProvider";
import { OrderContext } from "../../../contexts/OrderProvider";
import Filter from "../../user/Orders/Filter";
import History from "../../user/Orders/History";
import { subDays } from "date-fns";

function WarehouseEmployee() {
  const navigate = useNavigate();

  const { username } = useParams();
  const { setEmployee, employee, getOneEmployee } = useContext(AdminContext);
  const { history, getHistoryByDateRange, getHistory } = useContext(OrderContext);

  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [history_error, setHistoryError] = useState(false);
  const [historyLoading, setHistoryLoading] = useState(true);

  const filterByDate = (startDate, endDate) => {
    getHistoryByDateRange(startDate, endDate);
  };

  const searchOrders = async (user) => {
    try {
      const response = await getHistory(user);
      if (response.data.res == false) {
        setHistoryError(true);
      } 
      setHistoryLoading(false);
    } catch {
      setHistoryLoading(false);
      setHistoryError(true);
    }
  };

  const search = async () => {
    
    try {
      const response = await getOneEmployee(username);
      if (response.data.res == false) {
        setError(true);
      } else {
        setEmployee(response.data);
        searchOrders(username)
      }
      setIsLoading(false);
    } catch  {

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

        { !historyLoading ? (

          <section className="mt-10 lg:mt-20 mb-10">
            <div className="flex flex-col lg:flex-row xl:justify-start">
              <h2 className="mb-5 font-bold lg:ml-0 text-lg lg:mb-0">
                Historial de ordenes
              </h2>
              <Filter searchOrders={filterByDate}/>
            </div>

            { !history_error ? ( 

                history[0] ? (
                  history.map((history) => <History history={history} key={history.id} />) // falta el key
                ) : (
                  <p className="text-medium text-red-600">
                    No se encontraron ordenes para este usuario
                  </p>
                )

              ) : (

              <p className="text-red-600 text-l italic">Error al cargar el historial</p>

            )}
            
          </section>

          ) : (
            <p className="text-black text-base italic">Cargando Historial</p>
          )}

      </div>
    </div>
  );
}

export default WarehouseEmployee;

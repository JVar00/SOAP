import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStepContext } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { OrderContext } from "../../../contexts/OrderProvider";
import { Modal } from "../../../layouts/confirmationModal";

export const Order = ({order}) => {
  const [expanded, setExpanded] = useState(false);
  const { isAuthenticated} = useContext(AuthContext);
  const {updateOrders, saveHistory} = useContext(OrderContext)
  const [confirm, setConfirm] = useState(false)
  const [databaseErrorMessage, setDatabaseErrorMessage] = useState(false)
  const [functionConfirm, setFunctionConfirm] = useState('')


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const completeOrder = async (confirm) => {
    if (confirm) {
      try {
        const data = {
          id_order: order.id.join(', '),
          user_order : isAuthenticated.user
        }
        const response = await saveHistory(data)
        const result = response.data
        if (result.res === false) {
          setDatabaseErrorMessage(true)
        } else {
          updateOrders(order)
        }
      } catch (error) {
        setDatabaseErrorMessage(true)
      }
    }
    setFunctionConfirm('')
    setConfirm(false)
  } 

  const deleteOrder = (confirm) => {
    if (confirm) {
      updateOrders(order)
    }
    setFunctionConfirm('')

    setConfirm(false)
  }
 
  return (
    // if responsive is not working, change lg to 72px
    <div className="mr-7 lg:mr-7 xl:mr-7 pb-4 ">
       <div
        className={
          confirm
            ? "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            : "hidden"
        }
      >
        {functionConfirm === 'complete' ? 
          <Modal funct={completeOrder} />
          : <Modal funct={deleteOrder} />
        }

      </div>
      <div className="bg-white space-y-3  rounded-lg shadow ">
        <div className="space-y-3 p-4 rounded-lg shadow text-sm bg-red-600 rounded-t-md">
          <div className="flex items-center space-x-2  justify-between" >
            <label className="text-white font-bold text-md hover:underline">
              Numero de orden(s): {order && order.id.map((id, index) => `${id}=${index + 1}`).join(", ")
              }
            </label>

            {isAuthenticated.role == "Alisto" ||
              isAuthenticated.role == "Acomodo" ? (
                <div>
                  <button className="ml-auto float-right text-3xl leading-none font-semibold outline-none focus:outline-none -mt-17"
                    onClick={e => {
                      setFunctionConfirm('delete')
                      setConfirm(true)
                  }}
                  >
                      <span className=" text-white  h-6 w-6 text-xl  outline-none focus:outline-none ">
                          x
                      </span>
                  </button>
                </div>
              ) : (
                <></>
              )}
            
            
          </div>

          <div className="flex justify-between">

          {isAuthenticated.role != "Alisto" &&
              isAuthenticated.role != "Acomodo" ? (
                <div>
                  <span className="p-1.5 text-xs font-bold uppercase tracking-wider text-white bg-red-200 rounded-lg bg-opacity-50">
                    Fecha
                    {/* { order.date } */}
                  </span>
                </div>
              ) : (
                <></>
              )}

              {isAuthenticated.role != "Alisto" &&
            isAuthenticated.role != "Acomodo" ? (
              <div className="text-sm font-bold text-white">
                {/* Tiempo tomado */}
                {/* { order.time } */}
              </div>
            ) : (
              <></>
            )}

              

          </div>

          
          
        </div>

        

        <div className="m-4 pb-4">
          <Accordion
            expanded={expanded === "Descripcion"}
            onChange={handleChange("Descripcion")}
            className="text-sm font-medium text-black"
            
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="Descripcion-content"
              id="Descripcion-header"
            >
              <p className="text-base font-semibold
              ">Detalles de la orden</p>
            </AccordionSummary>
            <AccordionDetails >
              <div className="flex flex-col overflow-hidden">
                <div className="-my-2 overflow-x-auto overflow-y-auto sm:-mx-6 lg:-mx-8 h-96 ">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-3 py-3 text-left text-base font-medium text-gray-500  tracking-wider">

                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-base font-medium text-gray-500  tracking-wider">
                              Id
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-base font-medium text-gray-500  tracking-wider truncate">
                              Descripción
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-base font-medium text-gray-500  tracking-wider">
                              Unidades
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-base font-medium text-gray-500  tracking-wider">
                              Ubicación
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-base font-medium text-gray-500  tracking-wider">
                              Orden
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {order && order.products.map((product, index)=>(
                            <tr key= {product.sCodigo_Producto} className={index%2===0 ? 'bg-gray-100' : 'bg-white' }>
                              <td className="px-3 py-3 whitespace-nowrap">
                                <div className="text-sm text-gray-900">
                                  <input type="checkbox" className="form-checkbox"/>
                                </div>
                              </td>
                              <td className="px-3 py-3 whitespace-nowrap">
                                <div className="text-base text-gray-900">{ product.sCodigo_Producto}</div>
                              </td>
                              <td className="px-3 py-3 ">
                                <div className="text-base text-gray-900 max-w-xs">{ product.sDescripcion}</div>
                              </td>
                              <td className="px-3 py-3 whitespace-nowrap">
                                <div className="text-base text-gray-900">{product.cCantidad }</div>
                              </td>
                              <td className="px-3 py-3 whitespace-nowrap">
                                <div className="text-base text-gray-900">{ product.sEstante}</div>
                              </td>
                              <td className="px-3 py-3 whitespace-nowrap">
                                <div className="text-base text-gray-900">{order.id.indexOf(product.sPedido) + 1}</div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>            
                </div>


              {isAuthenticated.role == "Alisto" ||
                isAuthenticated.role == "Acomodo" ? (
                  <>
                    <button className="w-30 flex justify-center  mx-3 py-2 px-4 border border-transparent rounded-full shadow-sm text-lg font-semibold text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-8"
                    onClick={e => {
                      setFunctionConfirm('complete')
                      setConfirm(true)
                    }}
                    >
                    Finalizar orden
                    </button>
                    <small className={databaseErrorMessage ? "text-base text-red-500" : "hidden"}>Algo salio mal, intente de nuevo.</small>
                  </>
                ) : (
                  <></>
              )}

                

              </div>  
            </AccordionDetails>
          </Accordion>
         </div>
      </div>
      
    </div>
  );
};

export default Order;

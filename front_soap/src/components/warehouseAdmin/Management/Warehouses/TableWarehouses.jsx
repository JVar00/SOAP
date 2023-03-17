import { useContext, useEffect, useState } from 'react';
import UpdateWarehouse from './UpdateWarehouse';
import { WarehouseContext } from '../../../../contexts/WarehouseProvider';
import { Modal } from '../../../../layouts/confirmationModal';
const TableWarehouses = () => {
    const [updateConfirm, setUpdateConfirm] = useState(false)
    const {warehouses, getAllWarehouses, deleteWarehouse } = useContext(WarehouseContext)
    const [idWarehouse, setIdWarehouse] = useState(0)
    const [location, setLocation] = useState('')
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false)

    const deleteWarehouseConfirm = async (confirm) => {
        if (confirm) {
            try {
                await deleteWarehouse(idWarehouse);
                clearMesagges()
                setSuccessMessage(true);
                getAllWarehouses()
                setTimeout(clearMesagges, 5000)
            } catch {
                clearMesagges()
                setErrorMessage(true)
                setTimeout(clearMesagges, 5000)
            }
        }
        setConfirmDelete(false)
    }

    const clearMesagges = () => {
        setSuccessMessage(false);
        setErrorMessage(false)
    }

    useEffect(() => {
        getAllWarehouses();
    }, [])
    
    return (
        <div>
            <div className="flex flex-col justify-center h-full mb-3 pr-5 lg:mr-5 ">
                <div className={ updateConfirm ? "": "hidden"}
                >
                    <UpdateWarehouse funct={setUpdateConfirm} id={idWarehouse} oldLocation={location} />
                </div>
                
                <div className={confirmDelete ? "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" : "hidden"}>
                        <Modal funct={deleteWarehouseConfirm} />
                </div>
                
                 <div className="mb-3">
                    <small className={errorMessage ? "text-lg text-red-600" : "hidden"}>Error al intentar eliminar el usuario.</small>                        
                    <small className={successMessage ? "text-lg text-green-700" : "hidden"}>El usuario se elimino con exito.</small>
                </div>

                {/*<!--table -->*/}
                <div className="overflow-x-auto rounded-lg shadow lg:mr-9 xl:w-full lg:w-3/4">
                    <table className="table-auto w-full ">
                        <thead className="bg-red-600 border-black text-white ">
                            <tr>
                                <th className="p-2">
                                    <div className="font-semibold ">Descripción</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold ">Acciones</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-black">
                            {/*<!-- content 3 -->*/}
                            {warehouses[0] ? (
                                warehouses.map(warehouse =>(
                                    <tr className="bg-white" key={warehouse.id}>
                                        <td className='p-3 text-sm text-black whitespace-nowrap text-center'>{warehouse.location}</td>
                                        <td className="flex flex-row p-3 text-sm text-black whitespace-nowrap justify-center">
                                            <button
                                                className='ml-2 mr-3'
                                                onClick={() => {
                                                setIdWarehouse(warehouse.id);
                                                setLocation(warehouse.location)
                                                setUpdateConfirm(true)
                                            }}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                    >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                                    />
                                                </svg>
                                            </button>
                                            
                                            <button onClick={() => {
                                                setIdWarehouse(warehouse.id);
                                                setConfirmDelete(true)
                                            }}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                                
                                                >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                />
                                            </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td className="p-3 text-lg text-red-500 font-bold whitespace-nowrap"> No se encontraron bodegas.</td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
       </div>
    )
}

export default TableWarehouses
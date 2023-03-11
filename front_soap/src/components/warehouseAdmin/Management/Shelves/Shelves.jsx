import { useContext,useState  } from "react";
import { WarehouseContext } from "../../../../contexts/WarehouseProvider";
import { Modal } from "../../../../layouts/confirmationModal";

const Shelves = ({ funct, idHeadbord }) => {
    const [idShelf, setIdShelf] = useState(0)
    const { deleteShelf, shelves, getSpecificsRacks, getSpecificRack, rack } = useContext(WarehouseContext)
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false)
    const [confirmDelete, setConfirmDelete] = useState(false);

    const clearMesagges = () => {
        setSuccessMessage(false);
        setErrorMessage(false)
    }

    const deleteShelfConfirm = async (confirm) => {
        if (confirm) {
            try {
                await deleteShelf(idShelf);
                clearMesagges() 
                getSpecificRack(rack.id)
                getSpecificsRacks(rack.hallway_id)
                setSuccessMessage(true);
                setTimeout(clearMesagges, 5000)
            } catch {
                clearMesagges()
                setErrorMessage(true)
                setTimeout(clearMesagges, 5000)
            }
        }
        setConfirmDelete(false)
    }

    return (
        <div>

                <div className={confirmDelete ? "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" : "hidden"}>
                    <Modal funct={deleteShelfConfirm}  />
                </div>

            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none"
                onClick={() => {
                    funct(false);
                    clearMesagges()
                }}>
                <div className="relative w-72 extraSmall:mx-8 my-6 max-w-3xl mx-2" onClick={(e) => {
                    e.stopPropagation()
                }}>
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between  border-b border-solid border-slate-200 rounded-t-lg bg-red-600">
                            <h3 className="text-2xl font-semibold text-white py-3 pl-5">
                                Estantes de {rack ? rack.id_rack : ''}
                            </h3>

                            <button
                                className=" ml-auto bg-transparent border-0 text-black opacity-3 float-right text-3xl leading-none font-semibold outline-none focus:outline-none mr-2 "
                                onClick={() => {
                                    funct(false)
                                    clearMesagges()
                                }}>
                                <span className="bg-transparent text-white  h-6 w-6 text-2xl block outline-none focus:outline-none ">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative flex-auto py-2">
                            <div>
                                <table className="table-auto w-full ">
                                    <tbody>
                                    {shelves[0] ? (
                                            shelves.map((shelf) => (
                                                <tr key={shelf.id}>
                                                    <td className=" py-2 pl-6
                                                    extraSmall:pl-7  pr-4 text-base text-black whitespace-nowrap ">
                                                        Estante {shelf.code}
                                                    </td>
                                                    <td className=" pl-0 pr-5">
                                                        <button className="border px-5 py-1 extraSmall:ml-8 -ml-14 rounded-lg border-gray-300 font-semibold text-sm"
                                                            onClick={() => {
                                                                setIdShelf(shelf.id)
                                                                setConfirmDelete(true)
                                                        }}
                                                        >
                                                            Eliminar
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (<tr>
                                                <td className="p-3 text-lg text-red-500 font-bold whitespace-nowrap"> No se encontraron estantes.</td>
                                            </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-star p-3 border-t border-solid border-slate-200 rounded-b ">
                            <small className={errorMessage ? "text-lg text-red-600" : "hidden"}>Error al intentar eliminar el estante.</small>                        
                            <small className={successMessage ? "text-lg text-green-500" : "hidden"}>El estante se eliminó con éxito.</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-30 bg-black">             
            
            </div>
        </div>
    );
    
}

export default Shelves
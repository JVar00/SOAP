import { useState } from 'react';
import UpdateRack from './UpdateRacks';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { WarehouseContext } from '../../../../contexts/WarehouseProvider';
import { Modal } from '../../../../layouts/confirmationModal';
import CreateShelf from '../Shelves/CreateShelf';
import Shelves from '../Shelves/Shelves';
const TableRacks = () => {
    const { numero } = useParams();
    const { racks, getSpecificRack, deleteRack, getSpecificsRacks} = useContext(WarehouseContext);
    const [updateRack, setUpdateRack] = useState(false)
    const [seeShelves, setSeeShelves] = useState(false)
    const [oldLocation, setOldLocation]= useState('')
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [addShelf, setAddShelf] = useState(false)
    const [idRack, setIdRack] = useState('')
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false)

    const deleteRackConfirm = async (confirm) => {
        if (confirm) {
            try {
                await deleteRack(idRack);
                clearMesagges() 
                setSuccessMessage(true);
                getSpecificsRacks(numero)
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
        if (numero) {
            getSpecificsRacks(numero)
        }
    }, []);
    
    return (
        
        <div className="flex flex-col justify-center h-full mb-3 pr-5 lg:mr-5 ">
            <div className={updateRack ? "" : "hidden"}>
                <UpdateRack funct={setUpdateRack} oldLocation={oldLocation} />
            </div>
            
            <div className={confirmDelete ? "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" : "hidden"}>
                <Modal funct={deleteRackConfirm}  />
            </div>

            <div className={addShelf ? "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none" : "hidden"}>
                <CreateShelf funct={setAddShelf} />
            </div>

            <div className={seeShelves ? "" : "hidden" }>
                <Shelves funct={setSeeShelves} idHeadbord={numero} />
            </div>

           <div className="mb-3">
                <small className={errorMessage ? "text-lg text-red-600" : "hidden"}>Error al intentar eliminar el rack.</small>                        
                <small className={successMessage ? "text-lg text-green-500" : "hidden"}>El rack se eliminó con éxito.</small>
            </div>

             {/*<!--table -->*/}
            
                <div className="overflow-x-auto rounded-lg shadow lg:mr-9 xl:w-full lg:w-3/4">
                    <table className="table-auto w-full ">
                        <thead className="bg-red-600 border-black text-white ">
                            <tr>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Ubicación</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Cant. Estantes</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Acciones</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-black">
                            {/*<!-- content 3 -->*/}
                            {racks[0]? (                                
                                 racks.map(rack => (
                                    <tr className="bg-white" key={rack.id}>
                                        <td className='p-3 text-sm text-black whitespace-nowrap text-center'>{ rack.id_rack}</td>
                                        <td className='p-3 text-sm text-black whitespace-nowrap text-center'>{rack.shelfs.length}</td>
                                        <td className='flex flex-row p-3 text-sm text-black whitespace-nowrap justify-center '>
                                            
                                            {/*boton agregar estante*/}
                                            <button onClick={() => {
                                                getSpecificRack(rack.id)
                                                setAddShelf(true)
                                            }}>
                                            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24px" height="24px"><path d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 15 10 L 15 15 L 10 15 L 10 17 L 15 17 L 15 22 L 17 22 L 17 17 L 22 17 L 22 15 L 17 15 L 17 10 Z" /></svg>
                                            </button>

                                            {/*boton ver estantes*/}
                                            <button onClick={() => {
                                                getSpecificRack(rack.id)
                                                setSeeShelves(true)
                                            }}>
                                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 50.000000 50.000000" preserveAspectRatio="xMidYMid meet">
                                                <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                                                fill="#000000" stroke="none">
                                                <path d="M190 476 c0 -24 -26 -60 -39 -54 -62 33 -61 33 -84 10 -21 -21 -21
                                                -23 -4 -51 9 -16 17 -31 17 -34 0 -15 -34 -37 -56 -37 -23 0 -25 -3 -22 -37 3
                                                -32 7 -38 34 -45 40 -10 48 -30 26 -68 -16 -28 -16 -30 5 -52 22 -22 24 -22
                                                52 -5 16 9 31 17 34 17 14 0 37 -34 37 -56 0 -21 5 -24 35 -24 28 0 35 -4 35
                                                -20 0 -19 7 -20 120 -20 l121 0 -3 102 -3 103 -55 5 -55 6 35 10 c31 9 35 14
                                                38 47 3 34 1 37 -22 37 -22 0 -56 22 -56 37 0 3 8 18 17 34 17 28 17 30 -5 52
                                                -22 21 -24 21 -52 5 -38 -22 -58 -14 -68 26 -7 27 -13 31 -45 34 -34 3 -37 1
                                                -37 -22z m65 -28 c13 -43 55 -60 85 -33 16 14 22 15 35 5 13 -11 13 -15 -2
                                                -41 -22 -38 -6 -74 36 -84 36 -8 45 -45 11 -45 -11 0 -29 -9 -40 -20 -13 -13
                                                -33 -20 -57 -20 -29 0 -34 3 -25 12 20 20 14 79 -10 105 -28 30 -83 31 -115 1
                                                -51 -47 -15 -138 54 -138 32 0 33 -1 33 -42 0 -61 -10 -88 -30 -88 -12 0 -21
                                                10 -25 31 -10 42 -46 58 -84 36 -26 -15 -30 -15 -41 -2 -10 13 -9 19 5 35 27
                                                30 10 72 -33 85 -42 12 -43 41 -1 50 42 10 58 46 36 84 -15 26 -15 30 -2 41
                                                13 10 19 9 35 -5 30 -27 71 -10 84 33 12 42 39 42 51 0z m17 -135 c22 -20 23
                                                -61 1 -85 -34 -38 -103 -11 -103 40 0 54 62 81 102 45z m161 -130 c-29 -2 -77
                                                -2 -105 0 -29 2 -6 3 52 3 58 0 81 -1 53 -3z m47 -93 l0 -70 -100 0 -100 0 0
                                                70 0 70 100 0 100 0 0 -70z"/>
                                                <path d="M350 135 c-7 -9 -21 -13 -31 -10 -23 8 -25 -8 -4 -25 13 -11 20 -9
                                                40 10 14 13 25 27 25 32 0 13 -17 9 -30 -7z"/>
                                                <path d="M350 85 c-7 -9 -21 -13 -31 -10 -23 8 -25 -8 -4 -25 13 -11 20 -9 40
                                                10 14 13 25 27 25 32 0 13 -17 9 -30 -7z"/>
                                                </g>
                                            </svg>
                                            </button>
                                           
                                            {/*boton actualizar rack*/}
                                            <button onClick={() => {
                                                setOldLocation(rack.id_rack)
                                                getSpecificRack(rack.id)
                                                setUpdateRack(true)
                                            }}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6 "
                                                >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                                />
                                            </svg>
                                           </button>

                                            {/*boton eliminar rack*/}
                                            <button onClick={() => {
                                                setIdRack(rack.id)
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
                                ) : <tr>
                                        <td className="p-3 text-lg text-red-500 font-bold whitespace-nowrap"> No se encontraron racks.</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>

        </div>
    
    )
    
}
export default TableRacks
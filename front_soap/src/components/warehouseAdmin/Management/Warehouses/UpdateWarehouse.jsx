import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { WarehouseContext } from "../../../../contexts/WarehouseProvider";
import { Modal } from "../../../../layouts/confirmationModal";
const UpdateWarehouse = ({funct, id, oldLocation}) => {
    const [location, setLocation] = useState('')
    const {updateWarehouse, getAllWarehouses} = useContext(WarehouseContext)
    const [emptyInputsMessage, setEmptyInputsMessage] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [confirmUpdate, setConfirmUpdate] = useState(false)
    const [locationPlaceholder, setLocationPlaceholder] = useState('')

    const update = async(confirm)=>{
        if (confirm) {
            const data = {"location": location };
            try{
                await updateWarehouse(data, id);
                setLocation('')
                clearMesagges()
                setLocationPlaceholder(location)
                setSuccessMessage(true)
                getAllWarehouses()
            }catch{
                clearMesagges()
                setDatabaseErrorMessage(true)
                
            }
        }
        setConfirmUpdate(false);
    }
    
    const cleanInputs = () => {
        setLocation('');
    }

    const clearMesagges = () => {
        setEmptyInputsMessage(false)
        setSuccessMessage(false)
        setErrorMessage(false)
    }

     const handleSubmit = () => {
         if (location === '') {
            clearMesagges()
            setEmptyInputsMessage(true)
        } else {
            setConfirmUpdate(true);
        }
    }

    useEffect(() => {
        setLocationPlaceholder(oldLocation)
    }, [oldLocation])
    
    return (
        <>
            <div className={
                confirmUpdate
                    ? "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[100] outline-none focus:outline-none"
                    : "hidden"
                }
                >
                <Modal funct={update} />
            </div>

            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                onClick={(e) => {
                    funct(false);
                    cleanInputs();
                    clearMesagges();
                }}   
            >
                <div className="relative sm:w-[35rem] my-6 mx-auto max-w-3xl"
                    onClick={e => {
                    e.stopPropagation();
                }}>
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between border-b border-solid border-slate-200 rounded-t-lg bg-red-600">
                            <h3 className="text-3xl font-semibold text-white py-3 pl-5">
                                Actualizar bodega
                            </h3>
                            <button
                                className="ml-auto bg-transparent border-0   float-right text-3xl leading-none font-semibold outline-none focus:outline-none "
                                onClick={() => {
                                    funct(false)
                                    cleanInputs()
                                    clearMesagges();

                                }}>
                                <span className="bg-transparent text-white  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">

                            <div className="w-full  mb-6  mr-5">
                                <div className="flex flex-row pt-4">
                                    <p className="text-red-600 mr-2">*</p>
                                    <label htmlFor="location"className="block text-lg font-medium">
                                        Descripción
                                    </label>
                                </div>
                                <input
                                    className="appearance-none block w-5/6 input leading-tight focus:outline-none focus:bg-white focus:border-red-600 h-9 placeholder-slate-300"
                                    id="location"
                                    type="text"
                                    autoComplete="off"
                                    value={location}
                                    placeholder={locationPlaceholder}
                                    onChange={e => {
                                        setLocation(e.target.value)
                                    }}
                                />
                            </div>
                                <div>
                                    <small className={emptyInputsMessage ? "text-lg text-red-600" : "hidden"}>Por favor, rellene el campo requerido.</small> 
                                    <small className={errorMessage ? "text-lg text-red-600" : "hidden"}>Error, no se ha podido actualizar la bodega, verifique la descripcion no se repita.</small> 
                                    <small className={successMessage ? "text-lg text-green-500" : "hidden"}>Actualización con éxito.</small>
                                </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                    funct(false)
                                    cleanInputs()
                                    clearMesagges();
                                }}>
                                Cancelar
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                    handleSubmit();
                                }}>
                                Actualizar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

        </>
    )
}

export default UpdateWarehouse
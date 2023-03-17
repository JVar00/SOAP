import { useContext, useEffect, useState} from "react";
import {Modal} from '../../layouts/confirmationModal'
import { AuthContext } from "../../contexts/authContext";
import http from '../../http-common'
const CreateReport = ({ funct }) => {
    const [report, setReport] = useState('');
    const [emptyInputsMessage, setEmptyInputsMessage] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [confirm, setConfirm] = useState(false)
    const {isAuthenticated} =useContext(AuthContext)

    const cleanInputs = () => {
        setReport('');
    }

    const clearMesagges = () => {
        setEmptyInputsMessage(false)
        setSuccessMessage(false)
        setErrorMessage(false)
    }

    const handleSubmit= () => {
        if (report === "") {
            clearMesagges()
            setEmptyInputsMessage(true)
        }else{
            setConfirm(true);
        }
    }

    const create = async (confirm) => {
        if (confirm) {
            const data = {
                "user": isAuthenticated.user,
                "description": report
            }
            try {
                const result = await http.post("/bug_reports", data);
                if (result.res === false) {
                    clearMesagges()
                    setErrorMessage(true)
                } else {
                    cleanInputs()
                    clearMesagges()
                    setSuccessMessage(true)
                }
            } catch {
                clearMesagges()
                setErrorMessage(true)
            }
        }
        setConfirm(false)
    }
 
    return (
        <>
            <div className={confirm? "overflow-x-hidden overflow-y-auto fixed inset-0 z-[100] outline-none focus:outline-none" : "hidden"}>
                <Modal funct={create} />
            </div>

            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                onClick={(e) => {
                    funct(false);
                    cleanInputs()
                    clearMesagges()
                }}   
            >
                <div className="relative extraSmall:w-[35rem] extraSmall:mx-8 my-6 max-w-3xl mx-2"
                    onClick={e => {
                    e.stopPropagation();
                }}>
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between border-b border-solid border-slate-200 rounded-t-lg bg-red-600">
                            <h3 className="text-2xl font-semibold text-white py-3 pl-5">
                                Reporte de error
                            </h3>
                            <button
                                className="ml-auto bg-transparent border-0   float-right text-3xl leading-none font-semibold outline-none focus:outline-none "
                                onClick={() => {
                                    funct(false)
                                    cleanInputs()
                                    clearMesagges()
                                }}>
                                <span className="bg-transparent text-white  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <div className="w-full mr-5">
                               <textarea
                                    className="resize-none border rounded-md py-2 px-3 w-full h-40 text-gray-700 
                                    focus:border-none
                                    focus:ring-red-600"
                                placeholder={'Descripción del problema'}
                                value={report}
                                onChange={e => {
                                    setReport(e.target.value)
                                }}
                                />
                            </div>
                            <div>
                                 <small className={emptyInputsMessage ? "text-lg text-red-600" : "hidden"}>Por favor, rellene el campo requerido.</small> 
                                    <small className={errorMessage ? "text-lg text-red-600" : "hidden"}>Algo ha salido mal, intente de nuevo.</small> 
                                    <small className={successMessage ? "text-lg text-green-700" : "hidden"}>Reporte creado con éxito.</small>
                                
                            </div>
                            
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                    funct(false)
                                    cleanInputs()
                                    clearMesagges()
                                }}>
                                Cancelar
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1  ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {
                                    handleSubmit()
                                }}>
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

export default CreateReport
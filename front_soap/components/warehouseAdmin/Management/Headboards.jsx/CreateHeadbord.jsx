import { useContext, useState } from "react"
import { WarehouseContext } from "../../../../contexts/WarehouseProvider";
import { Modal } from "../../../../layouts/confirmationModal";

const CreateHeardbord = () => {
  const {getSpecificWarehouse, addHeadbord, warehouse} = useContext(WarehouseContext);
  const [description, setDescription] = useState('')
  const [emptyInputsMessage, setEmptyInputsMessage] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const [databaseErrorMessage, setDatabaseErrorMessage] = useState(false)
  const [confirmAdd, setConfirmAdd] = useState(false)

  const createHeadbord = async (confirm) => {
    if (confirm) {
      const data = {
          "description": description,
          "warehouse_id" : warehouse.id
      }
      try {
        await addHeadbord(data);
        setDescription('')
        clearMessages();
        setSuccessMessage(true)
        getSpecificWarehouse(warehouse.id)
        setTimeout(clearMessages, 5000)
      } catch {
        clearMessages();
        setDatabaseErrorMessage(true);
        setTimeout(clearMessages, 5000)
      }
    }
    setConfirmAdd(false)
  }

  const clearMessages = () => {
    setSuccessMessage(false)
    setEmptyInputsMessage(false)
    setDatabaseErrorMessage(false)
  }

  const handleSubmit = () => {
    if (description === '') {
      clearMessages();
      setEmptyInputsMessage(true)
      setTimeout(clearMessages, 5000)
    } else {
      setConfirmAdd(true)
    }
  }

  return (
    <>
      <div className={ confirmAdd ? "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" : "hidden"}>
          <Modal funct={createHeadbord} />
      </div>

      <div className="flex flex-col extraSmall:flex-row mb-2 mt-2">
        <div className="md:w-[21rem] mb-6 md:mb-0 mr-5">
          <label htmlFor="description"className="block text-lg font-medium my-2">
            Agregar Cabecera
          </label>
          <div className="flex flex-row">
            <p className="text-red-600 mr-2">*</p>
            <input className="appearance-none block input leading-tight focus:outline-none focus:bg-white focus:border-red-600 border h-9 placeholder:text-lg placeholder:font-medium placeholder-slate-300"
              id="description"
              type="text"
              autoComplete="off"
              placeholder="Descripción"
              value={description}
              onChange={e => {
                setDescription(e.target.value)
              }}
          />
          </div>
        </div>

        <div>
          <button className="w-30 flex justify-center extraSmall:mt-8 mr-3 py-2 px-4 border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={() => {
            handleSubmit()
          }}>
            Agregar
          </button>
        </div>
      </div>
      <div className="mb-6">
        <small className={emptyInputsMessage ? "text-lg text-red-600" : "hidden"}>Por favor, rellene el campo requerido.</small>                        
        <small className={successMessage ? "text-lg text-green-500" : "hidden"}>Se agregó con éxito.</small>
        <small className={databaseErrorMessage ? "text-lg text-red-500" : "hidden"}>No se ha podido agregar, verifique que la cabecera a agregar no exista.</small>
      </div>
    </>
  )
}

export default CreateHeardbord
import { useContext, useState } from "react"
import { WarehouseContext } from "../../../../contexts/WarehouseProvider"
import { Modal } from "../../../../layouts/confirmationModal"

const CreateWarehouse = () => {
  const {addWarehouse, getAllWarehouses} = useContext(WarehouseContext)
  const [location, setLocation] = useState('')
  const [confirmAdd, setConfirmAdd] = useState(false)
  const [emptyInputsMessage, setEmptyInputsMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [databaseErrorMessage, setDatabaseErrorMessage] = useState(false)

  const createWarehouse = async(confirm)=>{
    if (confirm) {
      const data = {"location": location };
      try{
        await addWarehouse(data);
        setLocation('')
        clearMesagges()
        setSuccessMessage(true)
        getAllWarehouses()
        setTimeout(clearMesagges, 5000)
      }catch{
        setDatabaseErrorMessage(true);
        clearMesagges();
        setTimeout(clearMesagges, 5000)
        
      }
    }
    setConfirmAdd(false);
  }

  const handleSumbit = () => {
    if (location === '') {
      clearMesagges()
      setEmptyInputsMessage(true)
      setTimeout(clearMesagges, 5000)
    } else {
      setConfirmAdd(true)
    }
  }

  const clearMesagges = () => {
        setEmptyInputsMessage(false)
        setSuccessMessage(false)
        setDatabaseErrorMessage(false)
  }


  return (
    <>
      <div className={
          confirmAdd
            ? "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            : "hidden"
        }>
        <Modal funct={createWarehouse} />
      </div>

      <div className="flex flex-col extraSmall:flex-row mb-2">
        <div className=" md:w-[21rem]  mb-6 md:mb-0 mr-5">
          <label htmlFor="location" className="block text-lg font-medium mt-3">
            Agregar bodega
          </label>
          <div className="flex flex-row">
            <p className="text-red-600 mr-2">*</p>
            <input
              className="appearance-none block input leading-tight focus:outline-none focus:bg-white focus:border-red-600 border h-9 placeholder:text-lg placeholder:font-medium placeholder-slate-300 "
              id="location"
              type="text"
              autoComplete="off"
              placeholder="Descripción"
              value={location}
              onChange={e => {
                setLocation(e.target.value)
              }}
            />
          </div>
        </div>

        <div>
          <button className="w-30 flex justify-center extraSmall:mt-7 mr-3 py-2 px-4 border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            typeof="submit"
            onClick={() => {
              handleSumbit(); 
            }}>
              Agregar
            </button>
        </div>
  </div>

      <div className="mb-6">
        <small className={emptyInputsMessage ? "text-lg text-red-600" : "hidden"}>Por favor, rellene todos los campos requeridos.</small>                        
        <small className={successMessage ? "text-lg text-green-500" : "hidden"}>Se agregó con exito.</small>
        <small className={databaseErrorMessage ? "text-lg text-red-500" : "hidden"}>Fallo en el sistema, no se pudo agregar.</small>
      </div>
    </>
    )
}

export default CreateWarehouse
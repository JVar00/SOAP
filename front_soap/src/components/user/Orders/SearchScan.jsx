import PhotoCamera from "@mui/icons-material/PhotoCamera";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import React, { useContext, useState } from "react";
import { OrderContext } from '../../../contexts/OrderProvider'
import { Modal } from "../../../layouts/confirmationModal";


function SearchScan() {
  const [orderId, setOrderId] = useState('')
  const { getOrder, addOrder, checkRepeatOrder, orders } = useContext(OrderContext)
  const [emptyInputsMessage, setEmptyInputsMessage] = useState(false);
  const [databaseErrorMessage, setDatabaseErrorMessage] = useState(false)
  const [notFoundMessage, setNotFoundMessage] = useState(false)
  const [confirmAdd, setConfirmAdd] = useState(false)
  const [repeatOrderMessage, setRepeatOrderMessage] = useState(false)

  
  const searchOrder = async (confirm) => {
    if (confirm) {
      try {
          const correctOrderId = orderId.replace(/\s/g, "") //elimina los espacios en blanco
          const result = await getOrder(correctOrderId)
          const data = result.data
          if (data.res === false) {
            clearMessages()
            setNotFoundMessage(true)
            setTimeout(clearMessages, 5000)
          } else {
            const order = {
              id: correctOrderId.split(",").map(id => id.trim()).filter(id => id !== ""),//separa la cadena de ids por comas(,) y guardo lso ids en un array
              products : data
            }
            addOrder(order)
            setOrderId('')
          }
            
        } catch (error) {
          clearMessages()
          setDatabaseErrorMessage(true)
          setTimeout(clearMessages, 5000)
        }
    } 
    setConfirmAdd(false)
  }

   const clearMessages= ()=>{
    setEmptyInputsMessage(false)
     setDatabaseErrorMessage(false)
     setNotFoundMessage(false)
     setRepeatOrderMessage(false)
  }

    const handleSubmit = () => {
    if (orderId === "") {
      clearMessages()
      setEmptyInputsMessage(true)
      setTimeout(clearMessages, 5000)
    } else {
      setConfirmAdd(true)
    }
  }

  return (
    <>
      <div
        className={
          confirmAdd
            ? "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            : "hidden"
        }
      >
        <Modal funct={searchOrder} />
      </div>

    <Paper
      elevation={4}
      className="flex items-center justify-between px-2 align-middle mr-5 md:mr-0 md:w-1/2 lg:w-1/4"
    >
      <input
        className="appearance-none block w-5/6 text-sm input leading-tight focus:outline-none focus:bg-white focus:border-red-600 border-none"
        placeholder="Busca el código de la orden(s)"
        value={orderId}
        onChange={e => {
          setOrderId(e.target.value)
        }
      }
      />
      <IconButton
        variant=""
        type="button"
        color="error"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={e => { 
          handleSubmit()   
        }}
      >
        <SearchIcon />
      
        </IconButton>
        {/*
      <Divider
        className="lg:hidden"
        sx={{ height: 28, m: 0.5 }}
        orientation="vertical"
      />
      <div className="lg:hidden">
        <IconButton
          color="error"
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <PhotoCamera />
        </IconButton>
        </div>
      */}
      </Paper>
      <div className="mt-4">
        <small className={emptyInputsMessage ? "text-base text-red-600" : "hidden"}>Por favor, ingrese el identificador de una orden.</small>                        
        <small className={databaseErrorMessage ? "text-base text-red-500" : "hidden"}>Algo salio mal, intente de nuevo.</small>
        <small className={notFoundMessage ? "text-base text-red-500" : "hidden"}>El identificador ingresado no existe.</small>
        <small className={repeatOrderMessage ? "text-base text-red-500" : "hidden"}>Esta orden ya está escaneada.</small>
      </div>
    </>
  );
}

export default SearchScan;

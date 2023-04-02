import ClearIcon from "@mui/icons-material/Clear";
import * as locales from 'react-date-range/dist/locale';
import { useContext, useEffect, useRef, useState } from "react";
import { DateRange, DateRangePicker } from "react-date-range";

import { subDays } from "date-fns";
import format from "date-fns/format";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

///MUI
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
///
//import { OrderContext } from "../../../contexts/OrderProvider";

function Filter({username, searchOrders}) {


  // Filtrador de ordenes
  const [range, setRange] = useState([
    {
      startDate: subDays(new Date(), 7),
      endDate: new Date(),
      key: "selection",
    },
  ]);


  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
  };

  // Visibilidad de cada calendario
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Referencia de cada calendario
  const desktop = useRef(null);
  const mobile = useRef(null);

  useEffect(() => {
    // Listeners de cada evento
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // cerrar calendario al presionar ESC
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      handleClose();
    }
  };

  const handleClose = () => {

    

    searchOrders(username, range[0].startDate, range[0].endDate);
    hide();
  }

  const hide = () => {
    setDesktopOpen(false);
    setMobileOpen(false);
  };

  // Esconder al hacer click fuera del calendario
  const hideOnClickOutside = (e) => {
    if (!mobile.current && desktop.current && !desktop.current.contains(e.target)) {
      handleClose();
      // searchOrders(username, range.startDate, range.endDate);
      // setDesktopOpen(false);
    }
    if (!desktop.current && mobile.current && !mobile.current.contains(e.target)) {
      handleClose();
      // searchOrders(username, range.startDate, range.endDate);
      // setMobileOpen(false);
    }
  };
  return (
    <div className="sm:flex-col md:flex md:flex-row items-center mb-5 lg:ml-5 mr-8 md:mr-0 w-3/2">
      <div className="flex flex-row md:mt-0">
        <div className="text-sm font-bold text-red-600">
          <h2>Elegir Fechas: </h2>

          <input
            value={`${format(range[0].startDate, "dd/MM/yyyy")} to ${format(
              range[0].endDate,
              "dd/MM/yyyy"
            )}`}
            readOnly
            className="input text-black outline-none focus:border-red-600 hover:border-red-600"
            onClick={() => {
              setDesktopOpen((open) => !open);
              setMobileOpen((mobileOpen) => !mobileOpen);
            }}
          />

          <Modal
            ref={desktop}
            open={desktopOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="hidden lg:block"
          >
            <Box sx={style}>
              <div className="flex justify-between bg-red-600 pb-2 pt-3 text-white">
                <p className=""></p>
                <p className="font-bold">
                  Seleccione una fecha / rango de fechas
                </p>
                <div className="basis-1/3">
                  <button className="ml-64">
                    <ClearIcon onClick={handleClose}>Salir</ClearIcon>
                  </button>
                </div>
              </div>

              <DateRange
                onChange={(item) => setRange([item.selection])}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={range}
                rangeColors={["#fc7474"]}
                locale={locales.es}
                months={2}
                direction="horizontal"
                className="lg:w-auto border-8 border-red-400 text-red-600"
              />
            </Box>
          </Modal>

          <Modal
            ref={mobile}
            open={mobileOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="lg:hidden"
          >
            <Box sx={style}>
              <div className="flex justify-center bg-red-600 pb-3 pt-3 text-white">
                <p className="basis-2/4 pl-2">Seleccione las Fechas</p>
                <div className="ml-32 mr-2">
                  <button>
                    <ClearIcon onClick={handleClose}>Salir</ClearIcon>
                  </button>
                </div>
              </div>
              <DateRange
                onChange={(item) => setRange([item.selection])}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={1}
                locale={locales.es}
                color="#fc7474"
                direction="horizontal"
                className=" border-8 border-red-400 text-red-600"
              />
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Filter;

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useState } from "react";

export const Orders = ({ user }) => {
  //
  // infinity scroll implementation
  // Esto se implementa una vez la logica en el backend este lista
  //

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="grid grid-cols-1 gap-4 mr-7 lg:mr-72 xl:mr-7">
      <div className="bg-white space-y-3 p-4 rounded-lg shadow">
        <div className="flex items-center space-x-2 text-sm">
          <div>
            <a href="#" className="text-red-600 font-bold hover:underline">
              Numero de la orden
            </a>
          </div>
          <div>
            <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
              Fecha
            </span>
          </div>
        </div>

        <div className="text-sm font-medium text-black">Tiempo tomado</div>

        <div>
          <Accordion
            expanded={expanded === "Descripcion"}
            onChange={handleChange("Descripcion")} // Aqui se debe poner el id de la orden
            className="text-sm font-medium text-black"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="Descripcion-content"
              id="Descripcion-header"
            >
              <p>Detalles de la orden</p>
            </AccordionSummary>
            <AccordionDetails>
              <p>Detalles...</p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Orders;

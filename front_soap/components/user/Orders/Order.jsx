import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/authContext";

export const Order = ({ order }) => {
  const [expanded, setExpanded] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //agregar una key

  return (
    <div className="grid grid-cols-1 gap-4 mr-7 lg:mr-72 xl:mr-7">
      <div className="bg-white space-y-3 p-4 rounded-lg shadow">
        <div className="flex items-center space-x-2 text-sm">
          <div>
            <a href="#" className="text-red-600 font-bold hover:underline">
              Numero de la orden
              {/* { order.number } */}
            </a>
          </div>
          <div>
            <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
              Fecha
              {/* { order.date } */}
            </span>
          </div>
        </div>

        {isAuthenticated.role != "Alisto" ||
        isAuthenticated.role != "Acomodo" ? (
          <div className="text-sm font-medium text-black">
            Tiempo tomado
            {/* { order.time } */}
          </div>
        ) : (
          <></>
        )}

        <div>
          <Accordion
            expanded={expanded === "Descripcion"}
            onChange={handleChange("Descripcion")}
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

export default Order;

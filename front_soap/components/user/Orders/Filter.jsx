import { useEffect, useRef, useState } from "react";
import { DateRange, DateRangePicker } from "react-date-range";

import { subDays } from "date-fns";
import format from "date-fns/format";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function Filter() {
  // Filtrador de ordenes
  const [range, setRange] = useState([
    {
      startDate: subDays(new Date(), 7),
      endDate: new Date(),
      key: "selection",
    },
  ]);

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
      setDesktopOpen(false);
      setMobileOpen(false);
    }
  };

  // Esconder al hacer click fuera del calendario
  const hideOnClickOutside = (e) => {
    if (desktop.current && !desktop.current.contains(e.target)) {
      setDesktopOpen(false);
    }
    if (mobile.current && !mobile.current.contains(e.target)) {
      setMobileOpen(false);
    }
  };
  return (
    <div className="sm:flex-col md:flex md:flex-row items-center mb-5 lg:ml-5 mr-8 md:mr-0 w-3/2">
      <div className="flex flex-row md:mt-0 ">
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

          <div
            ref={desktop}
            className="hidden md:block md:absolute  lg:left-60 xl:left-72"
          >
            {desktopOpen && (
              <DateRangePicker
                onChange={(item) => setRange([item.selection])}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={2}
                direction="horizontal"
                className="calendarElement md:w-0.5 lg:w-auto"
              />
            )}
          </div>

          <div ref={mobile} className="absolute md:hidden">
            {mobileOpen && (
              <DateRange
                onChange={(item) => setRange([item.selection])}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={1}
                direction="horizontal"
                className="calendarElement"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;

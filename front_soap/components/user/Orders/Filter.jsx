import { useEffect, useRef, useState } from "react";
import { DateRange, DateRangePicker } from "react-date-range";

import { addDays } from "date-fns";
import format from "date-fns/format";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function Filter() {
  //Filtrador de ordenes
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);
  const refOneMobile = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
      setMobileOpen(false);
    }
  };

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
    if (refOneMobile.current && !refOneMobile.current.contains(e.target)) {
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
              setOpen((open) => !open);
              setMobileOpen((mobileOpen) => !mobileOpen);
            }}
          />

          <div
            ref={refOne}
            className="hidden md:block md:absolute  lg:left-60 xl:left-72"
          >
            {open && (
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

          <div ref={refOneMobile} className="absolute md:hidden">
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

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Filter() {
  //Filtrador de ordenes
  {
    /* Hay que modificar el calendario para que se despliegue en el centro */
  }
  return (
    <div className="sm:flex-col md:flex md:flex-row items-center mb-5 ml-5 mr-8 md:mr-0 w-1/2">
      <div className="flex flex-row md:mt-0 ">
        <div className="text-sm font-bold text-black">
          <h2>Fecha 1</h2>

          {/* <Calendar /> */}
        </div>
        <div className="md:ml-5">
          <h2 className="text-sm font-bold text-gray-900">Fecha 2</h2>
          {/* <Calendar /> */}
        </div>
      </div>
    </div>
  );
}

export default Filter;

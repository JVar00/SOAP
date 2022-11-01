export const Orders = ({ user }) => {
  //
  // infinity scroll implementation
  //
  return (
    <div className="grid grid-cols-1 gap-4 mr-7 lg:mr-72 xl:mr-7">
      {/* Este div es una orden completa, como tal se deberian de cargar de esta forma 
      para cada una de las ordenes con un map ademas de que los detalles se hacen con el acordeon */}
      <div className="bg-white space-y-3 p-4 rounded-lg shadow">
        <div className="flex items-center space-x-2 text-sm">
          <div>
            <a href="#" className="text-red-600 font-bold hover:underline">
              Numero de la orden
              {/* Numero de la orden */}
            </a>
          </div>
          <div>
            <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
              Fecha
              {/* Fecha de la orden*/}
            </span>
          </div>
        </div>

        <div className="text-sm text-gray-700">
          Descripcion{/* Descripcion Esto va en el acordeon*/}
        </div>
        <div className="text-sm font-medium text-black">
          Tiempo tomado{/* Tiempo */}
        </div>
      </div>
    </div>
  );
};

export default Orders;

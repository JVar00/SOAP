export const Orders = ({ user }) => {
  //
  // infinity scroll implementation
  // Esto se implementa una vez la logica en el backend este lista
  //
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

        <div className="text-sm text-gray-700">
          Descripcion {/* Esto va en el acordeon*/}
        </div>
      </div>
    </div>
  );
};

export default Orders;

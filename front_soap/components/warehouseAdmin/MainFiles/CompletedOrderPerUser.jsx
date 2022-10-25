export const Orders = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Este div es una orden completa, como tal se deberian de cargar de esta forma 
      para cada una de las ordenes con un map */}
      <div className="bg-white space-y-3 p-4 rounded-lg shadow">
        <div className="flex items-center space-x-2 text-sm">
          <div>
            <a href="#" className="text-red-600 font-bold hover:underline">
              {/* Numero de la orden */}
            </a>
          </div>
          <div className="text-black">{/* Fecha */}</div>
          <div>
            <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
              {/* Estado de la orden Verde se entrego, Rojo se cancelo, Azul en progreso*/}
            </span>
          </div>
        </div>
        <div className="text-sm text-gray-700">{/* Descripcion */}</div>
        <div className="text-sm font-medium text-black">{/* Tiempo */}</div>
      </div>
    </div>
  );
};

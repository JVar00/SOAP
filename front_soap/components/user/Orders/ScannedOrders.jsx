export default function ScannedOrders({ orders, setCurrentOrder }) {
  return (
    <>
      <div className="overflow-auto rounded-lg shadow block mr-7">
        <table className="w-full">
          <thead className="bg-red-600 border-b-2 border-black text-white">
            <tr>
              <th className="w-11/12 p-3 text-sm font-semibold tracking-wide text-left">
                # Orden
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black font-bold">
            {/* {orders.map((order) => (
                <tr className="bg-white" key={order.id}>
                  <td className="p-3 text-sm text-black whitespace-nowrap">
                    {order.number}
                  </td> 
                  </tr> ))}  */}
            <tr className="bg-white">
              <td className="p-3 text-sm text-black whitespace-nowrap">
                #######
              </td>
              <td className="p-3 text-sm text-black whitespace-nowrap">
                <button className="bg-red-600 text-white font-bold p-3 rounded-xl">
                  Desplegar datos
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* RUTAS ADMINISTRACION, PROTEGER */}
          <Route path="/administracion/" element={<Admin />}>
            <Route path="/administracion/empleados" element={<Admin />} />
            <Route path="/administracion/incluir" element={<IncludeUser />} />
            <Route path="/administracion/editar/:id" element={<UpdateUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

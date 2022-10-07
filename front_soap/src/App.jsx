import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../components/Login";
import Create from "../components/userAdmin/AdminCreate";
import Edit from "../components/userAdmin/AdminEdit";
import Main from "../components/userAdmin/AdminUI";
import Users from "../components/userAdmin/AdminUsers";
import { SessionProvider } from "../contexts/SessionProvider";
import AsideMenu from "../layouts/PureAsideMenu";

function App() {
  return (
    <SessionProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* RUTAS ADMINISTRACION, PROTEGER */}
            <Route path="/" element={<Login />} />
            <Route path="/administracion" element={<AsideMenu />}>
              <Route index element={<Main />} />
              <Route path="/administracion/empleados" element={<Users />} />
              <Route path="/administracion/incluir" element={<Create />} />
              <Route
                path="/administracion/editar/:username"
                element={<Edit />}
              />
              <Route
                path="*"
                element={<Navigate replace to="/administracion" />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </SessionProvider>
  );
}

export default App;

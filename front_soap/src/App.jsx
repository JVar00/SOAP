import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Create from "../components/userAdmin/AdminCreate";
import Edit from "../components/userAdmin/AdminEdit";
import Main from "../components/userAdmin/AdminUI";
import { SessionProvider } from "../contexts/sessionProvider";
import AsideMenu from "../layouts/PureAsideMenu";

function App() {
  return (
    <SessionProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* RUTAS ADMINISTRACION, PROTEGER */}
            <Route path="/administracion/" element={<AsideMenu />}>
              <Route index element={<Main />} />
              <Route path="incluir" element={<Create />} />
              <Route path="editar/:id" element={<Edit />} />
              <Route
                path="*"
                element={<Navigate replace to="/administracion/" />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </SessionProvider>
  );
}

export default App;

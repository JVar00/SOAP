import {Route } from "react-router-dom";
import RoutesNotFound from '../utilities/RoutesNotFound'
import Create from "../components/userAdmin/AdminCreate";
import Edit from "../components/userAdmin/AdminEdit";
import Main from "../components/userAdmin/AdminUI";
import Users from "../components/userAdmin/AdminUsers";
import AsideMenu from "../layouts/PureAsideMenu";

function App() {
  return (
          <RoutesNotFound>
            {/* RUTAS ADMINISTRACION, PROTEGER */}
            <Route index element={<AsideMenu />}>
              <Route index element={<Main />} />
              <Route path="empleados" element={<Users />} />
              <Route path="incluir" element={<Create />} />
              <Route
                path="editar/:username"
                element={<Edit />}
              />
            </Route>
          </RoutesNotFound>
  );
}

export default App;

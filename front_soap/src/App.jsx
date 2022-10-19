import { BrowserRouter, Route } from "react-router-dom";
import { AuthContextProvider } from "../contexts/authContext";
//Componentes Main
import AdminUI from "../components/userAdmin/AdminUI";
import AsideMenu from "../layouts/PureAsideMenu";
import RoutesNotFound from "../utilities/RoutesNotFound";
//chiefUI
//userUI
//Componentes de rutas, modularizar!
import Create from "../components/userAdmin/AdminCreate";
import AdminEdit from "../components/userAdmin/AdminEdit";
import AdminUI from "../components/userAdmin/AdminUI";
import AdminUsers from "../components/userAdmin/AdminUsers";
//Guards
import PrivateGuard from "../guards/PrivateGuard";
import PublicGuard from "../guards/PublicGuard";
//Login, eliminar AyA
import AyA from "../layouts/AyA";
import Login from "../layouts/Login";
//Roles y rutas
import { Role } from "../models/roles";
import { PrivateRoutes, PublicRoutes } from "../models/routes";

//
function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <BrowserRouter>
          <RoutesNotFound>
            {/*RUTAS PUBLICAS*/}
            <Route element={<PublicGuard />}>
              <Route index element={<Login />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
            </Route>

            {/*RUTAS PRIVADAS */}
            <Route element={<PrivateGuard rol={Role.ALISTO} />}>
              <Route path={PrivateRoutes.ALISTO} element={<AyA />} />
            </Route>

            <Route element={<PrivateGuard rol={Role.ACOMODO} />}>
              <Route path={PrivateRoutes.ACOMODO} element={<AyA />} />
            </Route>

            <Route element={<PrivateGuard rol={Role.JEFE} />}>
              <Route path={PrivateRoutes.JEFE} element={<AsideMenu />}>
                {/* <Route index element={<ChiefUI />} />
                <Route
                  path={`/${PrivateRoutes.JEFE}/empleados`}
                  element={<AdminUsers />}
                />
                <Route
                  path={`/${PrivateRoutes.JEFE}/bodega`}
                  element={<Create />}
                />
                <Route
                  path={`/${PrivateRoutes.JEFE}/bodega/editarBodega/:id`}
                  element={<AdminEdit />}
                />
                <Route
                  path={`/${PrivateRoutes.JEFE}/bodega/editarCabecera/:id`}
                  element={<AdminEdit />}
                />
                <Route
                  path={`/${PrivateRoutes.JEFE}/cabecera`}
                  element={<Create />}
                ></Route> */}
              </Route>
            </Route>

            <Route element={<PrivateGuard rol={Role.ADMIN} />}>
              <Route path={`${PrivateRoutes.ADMIN}/`} element={<AsideMenu />}>
                <Route index element={<AdminUI />} />
                <Route
                  path={`/${PrivateRoutes.ADMIN}/empleados`}
                  element={<AdminUsers />}
                />
                <Route
                  path={`/${PrivateRoutes.ADMIN}/incluir`}
                  element={<Create />}
                />
                <Route
                  path={`/${PrivateRoutes.ADMIN}/editar/:username`}
                  element={<AdminEdit />}
                />
              </Route>
            </Route>
          </RoutesNotFound>
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}

export default App;

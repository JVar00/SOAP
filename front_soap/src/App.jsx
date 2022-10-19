import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "../contexts/authContext";
//Componentes Main
import AdminUI from "../components/userAdmin/AdminUI";
//chiefUI
//userUI
//Layouts
import AsideMenu from "../layouts/PureAsideMenu";
import RoutesNotFound from "../utilities/RoutesNotFound";
//Componentes de rutas
import adminRoutes from "../routes/adminRoutes";
import chiefRoutes from "../routes/chiefRoutes";
//Guards
import PrivateGuard from "../guards/PrivateGuard";
import PublicGuard from "../guards/PublicGuard";
//Login, eliminar AyA
import AyA from "../layouts/AyA";
import Login from "../layouts/Login";
//Roles y rutas
import { Role } from "../models/roles";
import { PrivateRoutes, PublicRoutes } from "../models/routes";

//faltan titles para cada ruta
function App() {
  return (
    <AuthContextProvider>
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
              {chiefRoutes.map(({ path, component: Component, title }) => {
                console.log(`/${PrivateRoutes.ADMIN}${path}`);
                return (
                  <Route
                    title={title}
                    key={path}
                    path={`/${PrivateRoutes.ADMIN}${path}`}
                    element={<Component />}
                  />
                );
              })}
                <Route
                  path={`/${PrivateRoutes.JEFE}/empleados`}
                  element={<WarehouseEmployees />}
                />
                <Route
                  path={`/${PrivateRoutes.JEFE}/empleados/empleado/:username`}
                  element={<WarehouseEmployee />}
                />
                <Route
                  path={`/${PrivateRoutes.JEFE}/bodega`}
                  element={<Warehouse />}
                />
                <Route
                  path={`/${PrivateRoutes.JEFE}/bodega/editarBodega/:id`}
                  element={<WarehouseEdit />}
                />
                <Route
                  path={`/${PrivateRoutes.JEFE}/bodega/agregarCabecera`}
                  element={<HeadboardCreate />}
                />
                <Route
                  path={`/${PrivateRoutes.JEFE}/cabecera`}
                  element={<Headboard />}
                ></Route>
                <Route
                  path={`/${PrivateRoutes.JEFE}/cabecera/rack/:numero`}
                  element={<Rack />}
                ></Route> */}
            </Route>
          </Route>

          <Route element={<PrivateGuard rol={Role.ADMIN} />}>
            <Route path={`${PrivateRoutes.ADMIN}/`} element={<AsideMenu />}>
              <Route index element={<AdminUI />} />
              {adminRoutes.map(({ path, component: Component }) => {
                console.log(`/${PrivateRoutes.ADMIN}${path}`);
                return (
                  <Route
                    key={path}
                    path={`/${PrivateRoutes.ADMIN}${path}`}
                    element={<Component />}
                  />
                );
              })}
            </Route>
          </Route>
        </RoutesNotFound>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;

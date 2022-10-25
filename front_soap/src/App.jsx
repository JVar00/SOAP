import { BrowserRouter, Route } from "react-router-dom";
import { AuthContextProvider } from "../contexts/authContext";

//Componentes Main
import AdminUI from "../components/userAdmin/AdminUI";
import ChiefUI from "../components/warehouseAdmin/MainFiles/ChiefUI";
import Login from "../layouts/Login";
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

//Modelos
import { Role } from "../models/roles";
import { PrivateRoutes, PublicRoutes } from "../models/routes";

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
            <Route path={PrivateRoutes.ALISTO} element={<AsideMenu />}></Route>
          </Route>

          <Route element={<PrivateGuard rol={Role.ACOMODO} />}>
            <Route path={PrivateRoutes.ACOMODO} element={<AsideMenu />}></Route>
          </Route>

          <Route element={<PrivateGuard rol={Role.JEFE} />}>
            <Route path={PrivateRoutes.JEFE} element={<AsideMenu />}>
              <Route index element={<ChiefUI />} />
              {chiefRoutes.map(({ path, component: Component, title }) => {
                return (
                  <Route
                    title={title}
                    key={path}
                    path={`/${PrivateRoutes.JEFE}${path}`}
                    element={<Component />}
                  />
                );
              })}
            </Route>
          </Route>

          <Route element={<PrivateGuard rol={Role.ADMIN} />}>
            <Route path={`${PrivateRoutes.ADMIN}/`} element={<AsideMenu />}>
              <Route index element={<AdminUI />} />
              {adminRoutes.map(({ path, component: Component, title }) => {
                return (
                  <Route
                    title={title}
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

import { BrowserRouter, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/authContext";

//Componentes Main
import MainMenu from "./components/user/MainFiles/MainMenu";
import Login from "./layouts/Login";
import MainUI from "./layouts/mainUI";

//Layouts
import AsideMenu from "./layouts/PureAsideMenu";
import UserAsideMenu from "./layouts/UserSideMenu";
import RoutesNotFound from "./routes/RoutesNotFound";

//Componentes de rutas
import adminRoutes from "./routes/adminRoutes";
import chiefRoutes from "./routes/chiefRoutes";
import employeeRoutes from "./routes/employeeRoutes";

//Guards
import PrivateGuard from "./routes/guards/PrivateGuard";
import PublicGuard from "./routes/guards/PublicGuard";

//Modelos
import { Role } from "./routes/models/roles";
import { PrivateRoutes, PublicRoutes } from "./routes/models/routes";

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
            <Route path={PrivateRoutes.ALISTO} element={<UserAsideMenu />}>
              <Route index element={<MainMenu />} />
              {employeeRoutes.map(({ path, component: Component, title }) => {
                return (
                  <Route
                    title={title}
                    key={path}
                    path={`/${PrivateRoutes.ALISTO}${path}`}
                    element={<Component />}
                  />
                );
              })}
            </Route>
          </Route>

          <Route element={<PrivateGuard rol={Role.ACOMODO} />}>
            <Route path={PrivateRoutes.ACOMODO} element={<UserAsideMenu />}>
              <Route index element={<MainMenu />} />
              {employeeRoutes.map(({ path, component: Component, title }) => {
                return (
                  <Route
                    title={title}
                    key={path}
                    path={`/${PrivateRoutes.ACOMODO}${path}`}
                    element={<Component />}
                  />
                );
              })}
            </Route>
          </Route>

          <Route element={<PrivateGuard rol={Role.JEFE} />}>
            <Route path={PrivateRoutes.JEFE} element={<AsideMenu />}>
              <Route index element={<MainUI name="Jefe De Bodega" />} />
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
              <Route index element={<MainUI name="Administrador" />} />
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

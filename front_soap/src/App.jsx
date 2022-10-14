import { BrowserRouter, Route } from 'react-router-dom';
import { AuthContextProvider } from '../contexts/authContext';
import RoutesNotFound from '../utilities/RoutesNotFound';
import PublicGuard from '../guards/PublicGuard';
import PrivateGuard from '../guards/PrivateGuard';
import Login from '../layouts/Login';
import { PrivateRoutes, PublicRoutes } from '../models/routes';
import { Role } from "../models/roles"
import AyA from '../layouts/AyA';
import AsideMenu from '../layouts/PureAsideMenu';
import AdminUsers from '../components/userAdmin/AdminUsers';
import Create from '../components/userAdmin/AdminCreate';
import AdminEdit from '../components/userAdmin/AdminEdit';
import AdminUI from '../components/userAdmin/AdminUI';
function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <BrowserRouter>
          <RoutesNotFound>
            {/*RUTAS PUBLICAS*/}
            <Route element={<PublicGuard />}>
              <Route index element={<Login />} />
              <Route path={PublicRoutes.LOGIN} element={ <Login/>} />
            </Route>
            {/*RUTAS PRIVADAS */}
            <Route element={<PrivateGuard rol={Role.ALISTO} />}>
              <Route path={PrivateRoutes.ALISTO } element={<AyA/>}/>
            </Route>

            <Route element={<PrivateGuard rol={Role.ACOMODO} />}>
              <Route path={PrivateRoutes.ACOMODO } element={<AyA/>}/>
            </Route>
            
            <Route element={<PrivateGuard rol={Role.ADMIN} />}>
              <Route path={`${PrivateRoutes.ADMIN}/`} element={<AsideMenu />}>
               <Route index element={<AdminUI/>}/>
                <Route path={`/${PrivateRoutes.ADMIN}/empleados`} element={<AdminUsers />} />
                <Route path={`/${PrivateRoutes.ADMIN}/incluir`} element={<Create />} />
                <Route path={`/${PrivateRoutes.ADMIN}/editar/:username`} element={<AdminEdit />} />
            </Route>
            </Route>
          </RoutesNotFound>
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}

export default App;

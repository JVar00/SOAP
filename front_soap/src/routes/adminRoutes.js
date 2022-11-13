import Create from "../components/userAdmin/AdminCreate";
import AdminEdit from "../components/userAdmin/AdminEdit";
import AdminUsers from "../components/userAdmin/AdminUsers";

/*
Se deben incluir para cada ruta su respectivo componentes
su path y el titulo de la ruta Jeff
*/

const create = {
  path: "/incluir",
  component: Create,
  title: "Incluir Empleado",
};

const edit = {
  path: "/editar/:username",
  component: AdminEdit,
  title: "Editar Empleado",
};

const users = {
  path: "/colaboradores",
  component: AdminUsers,
  title: "Colaboradores",
};

export default [create, edit, users];

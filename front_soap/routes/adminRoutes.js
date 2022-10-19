import Create from "../components/userAdmin/AdminCreate";
import AdminEdit from "../components/userAdmin/AdminEdit";
import AdminUsers from "../components/userAdmin/AdminUsers";

const create = {
  path: "/incluir",
  title: "Incluir",
  component: Create,
};

const edit = {
  path: "/editar/:username",
  component: AdminEdit,
};

const users = {
  path: "/empleados",
  component: AdminUsers,
};

export default [create, edit, users];

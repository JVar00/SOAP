import WarehouseEmployee from "../components/warehouseAdmin/Employees/WarehouseEmployee";
import WarehouseEmployees from "../components/warehouseAdmin/Employees/WarehouseEmployees";
import HeadBoard from "../components/warehouseAdmin/HeadBoard";
import HeadBoardCreate from "../components/warehouseAdmin/Management/HeadBoardCreate";
import WarehouseEdit from "../components/warehouseAdmin/Management/WarehouseEdit";
import Rack from "../components/warehouseAdmin/Rack";
import Warehouse from "../components/warehouseAdmin/Warehouse";

/*
Se deben incluir para cada ruta su respectivo componentes
su path y el titulo de la ruta Jeff
*/

const employees = {
  path: "/empleados/",
  component: Create,
  title: "Empleados",
};

const employee = {
  path: "/empleados/empleado/:username",
  component: Edit,
  title: "Perfil de empleado",
};

const warehouse = {
  path: "/bodega",
  component: Warehouse,
  title: "Bodega",
};

const warehouseEdit = {
  path: "/bodega/editarBodega/:id",
  component: WarehouseEdit,
  title: "Editar Bodega",
};

const headBoard = {
  path: "/cabecera",
  component: HeadBoard,
  title: "Visualizar Cabecera",
};

const headBoardCreate = {
  path: "/bodega/agregarCabecera",
  component: HeadBoardCreate,
  title: "Agregar Cabecera",
};

const rack = {
  path: "/cabecera/rack/:numero",
  component: Rack,
  title: "Visualizar Rack",
};

export default [
  employee,
  employees,
  warehouse,
  warehouseEdit,
  headBoard,
  headBoardCreate,
  rack,
];

import WarehouseEmployee from "../components/warehouseAdmin/Employees/WarehouseEmployee";
import WarehouseEmployees from "../components/warehouseAdmin/Employees/WarehouseEmployees";
import HeadBoard from "../components/warehouseAdmin/Headboard";
import Rack from "../components/warehouseAdmin/Rack";
import Warehouse from "../components/warehouseAdmin/Warehouse";
/*
Se deben incluir para cada ruta su respectivo componentes
su path y el titulo de la ruta Jeff
*/

const employees = {
    path: "/colaboradores/",
    component: WarehouseEmployees,
    title: "Empleados",
};

const employee = {
    path: "/colaboradores/colaborador/:username",
    component: WarehouseEmployee,
    title: "Perfil de empleado",
};

const warehouse = {
    path: "/bodega",
    component: Warehouse,
    title: "Bodega",
};

const headBoard = {
    path: "/cabecera",
    component: HeadBoard,
    title: "Visualizar Cabecera",
};

const rack = {
    path: "/cabecera/rack/:numero",
    component: Rack,
    title: "Visualizar Rack",
};

export default [employee, employees, warehouse, headBoard, rack];

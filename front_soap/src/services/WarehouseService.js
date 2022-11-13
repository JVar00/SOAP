import http from "../http-common";

const getAll = () => {
  return http.get("/warehouses");
};

const get = (id) => {
  return http.get(`/warehouses/${id}`);
};

const create = (data) => {
  return http.post("/warehouses", data);
};

const update = (data, id) => {
  return http.put(`/warehouses/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/warehouses/${id}`);
};

const WarehouseServiceData = {
  getAll,
  get,
  remove,
  create,
  update,
};

export default WarehouseServiceData;

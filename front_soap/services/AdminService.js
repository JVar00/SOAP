import http from "../http-common";

//rutas de la api
const getAll = () => {
  return http.get("/users");
};

const get = (username) => {
  return http.get(`/users/${username}`);
};

const create = (data) => {
  return http.post("/users", data);
};

const update = (data, username) => {
  return http.put(`/users/${username}`, data);
};

const remove = (username) => {
  return http.delete(`/users/${username}`);
};

const AdminServiceData = {
  getAll,
  get,
  remove,
  create,
  update,
};

export default AdminServiceData;

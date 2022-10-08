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

const update = (data) => {
  return http.put(`/users`, data);
};

const remove = (username) => {
  return http.delete(`/users/${username}`);
};

const UserServiceData = {
  getAll,
  get,
  remove,
  create,
  update,
};

export default UserServiceData;

import http from "../http-common";

//rutas de la api
const getAll = () => {
  return http.get("/");
};

const get = (username) => {
  return http.get(`//${username}`);
};

const create = (data) => {
  return http.post("/", data);
};

const update = (data) => {
  return http.put(`/`, data);
};

const remove = (username) => {
  return http.delete(`//${username}`);
};

const UserServiceData = {
  getAll,
  get,
  remove,
  create,
  update,
};

export default UserServiceData;

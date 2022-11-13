import http from "../http-common";

const getAll = () => {
  return http.get("/shelfs");
};

const get = (id) => {
  return http.get(`/shelfs/${id}`);
};

const create = (data) => {
  return http.post("/shelfs", data);
};

const update = (data, id) => {
  return http.put(`/shelfs/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/shelfs/${id}`);
};

const ShelfServiceData = {
  getAll,
  get,
  remove,
  create,
  update,
};

export default ShelfServiceData;

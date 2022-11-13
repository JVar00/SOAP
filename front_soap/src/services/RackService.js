import http from "../http-common";

const getAll = () => {
    return http.get("/racks");
};

const get = (id) => {
    return http.get(`/racks/${id}`);
};

const create = (data) => {
    return http.post("/racks", data);
};

const update = (data, id) => {
    return http.put(`/racks/${id}`, data);
};

const remove = (id) => {
    return http.delete(`/racks/${id}`);
};

const RackServiceData = {
    getAll,
    get,
    remove,
    create,
    update,
};

export default RackServiceData;

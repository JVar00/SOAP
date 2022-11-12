import http from "../http-common";

const getAll = () => {
    return http.get("/hallways");
};

const get = (id) => {
    return http.get(`/hallways/${id}`);
};

const create = (data) => {
    return http.post("/hallways", data);
};

const update = (data, id) => {
    return http.put(`/hallways/${id}`, data);
};

const remove = (id) => {
    return http.delete(`/hallways/${id}`);
};

const HeardbordServiceData = {
    getAll,
    get,
    remove,
    create,
    update,
};

export default HeardbordServiceData;

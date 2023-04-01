import http from "../http-common";

const get = (id) => {
    return http.get(`/orders/${id}`);
};

const saveHistory = (data) => {
    return http.post("/historys", data);
};

const getHistory = (user) => {
    return http.get(`/historys?txtBuscar=${user}`);
};

const OrderServiceData = { get, saveHistory, getHistory };

export default OrderServiceData;

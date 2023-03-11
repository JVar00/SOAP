import http from "../http-common";

const get = (id) => {
    return http.get(`/orders/${id}`);
};

const saveHistory = (data) => {
    return http.post("/historys", data);
};

const OrderServiceData = { get, saveHistory };

export default OrderServiceData;

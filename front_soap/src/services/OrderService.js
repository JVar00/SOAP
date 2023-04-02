import http from "../http-common";

const get = (id) => {
    return http.get(`/orders/${id}`);
};

const saveHistory = (data) => {
    return http.post("/historys", data);
};

const getHistory = (user, startDate, endDate) => {
    return http.get(`/getBy_Date?txtFechaInicio=${startDate}&txtFechaFinal=${endDate}&txtBuscar=${user}`);
};

const OrderServiceData = { get, saveHistory, getHistory };

export default OrderServiceData;

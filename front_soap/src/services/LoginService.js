import http from "../http-common";

const getAuthentication = (userName, password) => {
  return http.get(`filtro_User?txtUser=${userName}&txtPassword=${password}`);
};

const LogingService = {
  getAuthentication,
};

export default LogingService;

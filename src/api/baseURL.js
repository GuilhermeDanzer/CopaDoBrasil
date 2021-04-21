import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.api-futebol.com.br/v1",
});
instance.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Bearer live_272b60b7722b9be34c3004a85ed0ad`;

    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

export default instance;

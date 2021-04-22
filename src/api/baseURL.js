import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.api-futebol.com.br/v1",
});
instance.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Bearer ${process.env.TOKEN}`;

    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

export default instance;

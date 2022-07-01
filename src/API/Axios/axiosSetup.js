import axios from "axios";

/**
 * @AxiosInterCeptors
 * @Intercept Data before then and catch
 */
const apiInstance = axios.create({
  baseURL: "https://devapi.buckone.org/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiInstance.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      accesstoken: localStorage.getItem("accessToken"),
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
apiInstance.interceptors.response.use((response) => response);
apiInstance.interceptors.response.use((error) => Promise.reject(error));

export default apiInstance;

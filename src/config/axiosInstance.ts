import axios from "axios";
const axiosInstance = axios.create({
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

axiosInstance.interceptors.request.use(
	function (config) {
		config.headers.Authorization = `Bearer ${localStorage.getItem(
			"token"
		)}`;
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default axiosInstance;

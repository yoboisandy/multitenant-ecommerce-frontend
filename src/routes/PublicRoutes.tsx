import Home from "../pages/LandingPage/Home";
import Login from "../pages/LandingPage/Login";
import Register from "../pages/LandingPage/Register";
import VerifyStore from "../pages/LandingPage/VerifyStore";

const publicRoutes = [
	{ path: "/", component: Home },
	{ path: "register", component: Register },
	{ path: "verify-store/:store_id/:token", component: VerifyStore },
	{ path: "/login", component: Login },
];

export default publicRoutes;

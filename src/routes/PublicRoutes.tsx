import Home from "../pages/LandingPage/Home";
import Register from "../pages/LandingPage/Register";
import VerifyStore from "../pages/LandingPage/VerifyStore";

const publicRoutes = [
	{ path: "/", component: Home },
	{ path: "register", component: Register },
	{ path: "verify-store/:store_id/:token", component: VerifyStore },
];

export default publicRoutes;

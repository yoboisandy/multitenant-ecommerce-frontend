import Home from "../pages/LandingPage/Home";
import Login from "../pages/LandingPage/Login";
import Register from "../pages/LandingPage/Register";
import VerifyStore from "../pages/LandingPage/VerifyStore";

const publicRoutes = [
	{ id: 1, path: "/", component: Home },
	{ id: 2, path: "register", component: Register },
	{
		id: 3,
		path: "verify-store/:store_id/:token",
		component: VerifyStore,
	},
];

export default publicRoutes;

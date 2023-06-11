import Home from "../pages/AdminPanel/Home";
import Stores from "../pages/AdminPanel/Stores";

const AdminRoutes = [
	{
		id: 1,
		path: "/admin",
		component: <Home />,
	},
	{
		id: 2,
		path: "/stores",
		component: <Stores />,
	},
];

export default AdminRoutes;

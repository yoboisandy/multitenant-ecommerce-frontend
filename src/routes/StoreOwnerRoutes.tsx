import Categories from "../pages/StoreOwnerDashboard/Categories";
import Home from "../pages/StoreOwnerDashboard/Home";

const StoreOwnerRoutes = [
	{
		id: 1,
		path: "/dashboard",
		component: <Home />,
	},
	{
		id: 2,
		path: "/categories",
		component: <Categories />,
	},
];

export default StoreOwnerRoutes;

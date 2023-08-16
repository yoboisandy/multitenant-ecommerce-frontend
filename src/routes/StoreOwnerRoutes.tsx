import Appearance from "../pages/StoreOwnerDashboard/Appearance/Appearance";
import Categories from "../pages/StoreOwnerDashboard/Categories/Categories";
import Home from "../pages/StoreOwnerDashboard/Home/Home";
import Orders from "../pages/StoreOwnerDashboard/Orders/Orders";
import ProductCreate from "../pages/StoreOwnerDashboard/Products/ProductCreate/ProductCreate";
import Products from "../pages/StoreOwnerDashboard/Products/Products/Products";
import Settings from "../pages/StoreOwnerDashboard/Settings/Settings";
import Subscription from "../pages/StoreOwnerDashboard/Subscriptions/Subscription";

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
	{
		id: 3,
		path: "/products",
		component: <Products />,
	},
	{
		id: 4,
		path: "/products/add",
		component: <ProductCreate />,
	},
	{
		id: 5,
		path: "/products/:productId/edit",
		component: <ProductCreate />,
	},
	{
		id: 6,
		path: "/settings",
		component: <Settings />,
	},
	{
		id: 7,
		path: "/customize",
		component: <Appearance />,
	},
	{
		id: 8,
		path: "/orders",
		component: <Orders />,
	},
	{
		id: 9,
		path: "/subscriptions",
		component: <Subscription />,
	},
];

export default StoreOwnerRoutes;

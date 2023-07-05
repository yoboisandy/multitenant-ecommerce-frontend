import Categories from "../pages/StoreOwnerDashboard/Categories/Categories";
import Home from "../pages/StoreOwnerDashboard/Home/Home";
import ProductCreate from "../pages/StoreOwnerDashboard/Products/ProductCreate/ProductCreate";
import Products from "../pages/StoreOwnerDashboard/Products/Products/Products";

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
];

export default StoreOwnerRoutes;

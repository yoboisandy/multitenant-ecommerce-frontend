import exp from "constants";
import ProductDetailPage from "../pages/StoreLandingPage/ProductDetailPage";
import ProductListPage from "../pages/StoreLandingPage/ProductListPages/ProductListPage";

const StorePublicRoutes = [
	{
		id: 1,
		path: "/products/:id",
		component: <ProductDetailPage />,
	},
	{
		id: 2,
		path: "/new-arrivals",
		component: <ProductListPage title={"New Arrivals"} />,
	},
];

export default StorePublicRoutes;

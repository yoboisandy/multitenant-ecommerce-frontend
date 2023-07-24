import exp from "constants";
import ProductDetailPage from "../pages/StoreLandingPage/ProductDetailPage";

const StorePublicRoutes = [
	{
		id: 1,
		path: "/products/:id",
		component: <ProductDetailPage />,
	},
];

export default StorePublicRoutes;

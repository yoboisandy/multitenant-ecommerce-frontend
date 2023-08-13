import exp from "constants";
import ProductDetailPage from "../pages/StoreLandingPage/ProductDetailPage";
import ProductListPage from "../pages/StoreLandingPage/ProductListPages/ProductListPage";
import ShopPage from "../pages/StoreLandingPage/ProductListPages/ShopPage";
import Checkout from "../pages/StoreLandingPage/Checkout/Checkout";
import TrackOrder from "../pages/StoreLandingPage/TrackOrderPage/TrackOrder";

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
	{
		id: 3,
		path: "/search",
		component: <ProductListPage title={"Search Results"} />,
	},
	{
		id: 4,
		path: "/categories/:id",
		component: <ProductListPage title={"Category"} />,
	},
	{
		id: 5,
		path: "/shop",
		component: <ShopPage />,
	},
	{
		id: 6,
		path: "/checkout",
		component: <Checkout />,
	},
	{
		id: 7,
		path: "/track/:id",
		component: <TrackOrder />,
	},
];

export default StorePublicRoutes;

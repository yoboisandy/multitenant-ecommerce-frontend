import React from "react";
import StoreFrontLayout from "../../components/LandingPage/Store/Shared/Layout/StoreFrontLayout";
import DefaultNav from "../../components/LandingPage/Store/Shared/Navbars/DefaultNav";
import StoreFooter from "../../components/LandingPage/Store/Shared/Footer/StoreFooter";
import ProductDetail from "../../components/LandingPage/Store/ProductPage/ProductDetail";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
	let { id } = useParams();
	return (
		<StoreFrontLayout>
			<DefaultNav />
			<ProductDetail id={id} />
			<StoreFooter />
		</StoreFrontLayout>
	);
};

export default ProductDetailPage;

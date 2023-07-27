import React from "react";
import ProductSection from "../../../components/LandingPage/Store/Shared/ProductSections/ProductSection";
import { useAppSelector } from "../../../app/hooks";
import StoreFrontLayout from "../../../components/LandingPage/Store/Shared/Layout/StoreFrontLayout";
import DefaultNav from "../../../components/LandingPage/Store/Shared/Navbars/DefaultNav";
import StoreFooter from "../../../components/LandingPage/Store/Shared/Footer/StoreFooter";

const ProductListPage = ({ title }: any) => {
	const productState = useAppSelector((store) => store.ProductSlice);
	let products = productState.newArrivals;
	return (
		<StoreFrontLayout>
			<DefaultNav />
			<div className="py-10">
				<ProductSection title={title} products={products} />
			</div>
			<StoreFooter />
		</StoreFrontLayout>
	);
};

export default ProductListPage;

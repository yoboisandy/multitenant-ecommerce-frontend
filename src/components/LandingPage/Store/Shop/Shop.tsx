import React from "react";
import ProductFilters from "../Shared/ProductFilters/ProductFilters";
import ProductSection from "../Shared/ProductSections/ProductSection";
import { useAppSelector } from "../../../../app/hooks";

const Shop = () => {
	const productState = useAppSelector((state) => state.ProductSlice);
	return (
		<div className="max-w-7xl mx-auto py-10">
			<div>
				{/* heading */}
				<div className="text-left text-gray-600 uppercase font-bold text-xl">
					Shop
				</div>
			</div>
			<div className="mt-8 flex gap-10">
				{/* filters */}
				<div className="w-1/6">
					<ProductFilters />
				</div>
				{/* products */}
				<div>
					<ProductSection products={productState.filteredProducts} />
				</div>
			</div>
		</div>
	);
};

export default Shop;

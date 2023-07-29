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
				<div className="text-left text-gray-600 uppercase font-bold text-xl md:px-4 px-2">
					Shop
				</div>
			</div>
			<div className="mt-8 flex lg:gap-10 gap-8 flex-col md:flex-row">
				{/* filters */}
				<div className="xl:w-1/6 lg:w-2/6 md:w-2/6 w-full md:px-4 px-2">
					<ProductFilters />
				</div>
				{/* products */}
				<div className="xl:w-5/6 lg:w-4/6 md:w-4/6 w-full">
					<ProductSection products={productState.filteredProducts} />
				</div>
			</div>
		</div>
	);
};

export default Shop;

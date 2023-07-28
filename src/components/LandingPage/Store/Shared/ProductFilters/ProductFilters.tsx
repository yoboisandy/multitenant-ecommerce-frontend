import React, { useEffect, useState } from "react";
import Checkbox from "../../../../Shared/Inputs/Checkbox";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { SearchBox } from "../../../../Shared/Inputs/TextFields";
import { filterProducts } from "../../../../../app/Feature/StoreOwner/Products/ProductSlice";

const ProductFilters = () => {
	const categoryState: any = useAppSelector((state) => state.CategorySlice);
	const productState: any = useAppSelector((state) => state.ProductSlice);
	const dispatch = useAppDispatch();
	const maxPrice = Math.max(
		...productState.products.map((p: any) => {
			if (p.variants.length > 0) {
				return Math.max(...p.variants.map((v: any) => v.selling_price));
			}
			return p.selling_price;
		})
	);
	const [filters, setFilters] = useState<any>({
		price: {
			min: 0,
			max: maxPrice,
		},
		category: [],
		search: "",
	});

	const onPriceChange = (e: any) => {
		setFilters({
			...filters,
			price: {
				...filters.price,
				max: e.target.value,
			},
		});
	};

	const clearFilter = () => {
		setFilters({
			price: {
				min: 0,
				max: maxPrice,
			},
			category: [],
			search: "",
		});
	};

	useEffect(() => {
		dispatch(filterProducts(filters));
	}, [filters]);

	return (
		<div className="space-y-4">
			<div className="flex justify-between items-center">
				<h3 className="text-xl">Filter By:</h3>
				<div>
					<button
						onClick={clearFilter}
						className="underline text-storeFrontClr"
					>
						<span>Clear</span>
					</button>
				</div>
			</div>
			<div className="space-y-4">
				<div>
					<SearchBox
						value={filters.search}
						onChange={(e: any) => {
							setFilters({
								...filters,
								search: e.target.value,
							});
						}}
						focusOutline={"focus:outline-storeFrontClr"}
						placeholder={"Search"}
					/>
				</div>
				<div className="flex justify-between items-center text-lg">
					<div className="">Price</div>
					<div className="text-gray-700">
						Rs. 0 - Rs. {filters.price.max}
					</div>
				</div>
				<div>
					<input
						value={filters.price.max}
						onChange={onPriceChange}
						type="range"
						className="w-full"
						min={0}
						max={maxPrice}
					/>
				</div>
			</div>
			<div className="space-y-4">
				<h4 className="text-lg">Category</h4>
				<div>
					{categoryState.categories.map((category: any) => (
						<div key={category.id}>
							<Checkbox
								checked={filters.category.includes(category.id)}
								onChange={(e: any) => {
									if (e.target.checked) {
										setFilters({
											...filters,
											category: [
												...filters.category,
												category.id,
											],
										});
									} else {
										setFilters({
											...filters,
											category: filters.category.filter(
												(c: any) => c !== category.id
											),
										});
									}
								}}
								text={category.name}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductFilters;

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { getProductById } from "../../../../app/Feature/StoreOwner/Products/ProductApi";
import { Link, useParams } from "react-router-dom";
import ProductImages from "../Shared/ProductImages/ProductImages";
import parse from "html-react-parser";
import {
	FilterButton,
	StoreFrontButton,
} from "../../../Shared/Buttons/Buttons";
import ProductSection from "../Shared/ProductSections/ProductSection";

const ProductDetail = ({ id }: any) => {
	console.log(id);
	const productState: any = useAppSelector((state) => state.ProductSlice);
	const [product, setProduct] = useState<any>(null);
	const [selectedVariant, setSelectedVariant] = useState<any>(null);
	const [price, setPrice] = useState<any>(null);
	const [crossedPrice, setCrossedPrice] = useState<any>(null);
	const [savingPercentage, setSavingPercentage] = useState<any>(null);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getProductById({ productId: id })).then((res: any) => {
			if (res.payload?.success) {
				setProduct(res.payload.data);
				setSelectedVariant(res.payload.data.variants[0]);
			}
		});
	}, []);

	const handleVariantChange = (variant: any) => {
		setSelectedVariant(variant);
	};

	const hasVariants = product?.variants && product?.variants?.length > 0;

	useEffect(() => {
		// set price, crossed price and saving price based on selected variant
		if (hasVariants && selectedVariant) {
			setPrice(selectedVariant.selling_price);
			setCrossedPrice(selectedVariant.crossed_price);
			setSavingPercentage(() => {
				if (
					selectedVariant?.crossed_price &&
					selectedVariant?.selling_price
				) {
					return Math.round(
						((selectedVariant?.crossed_price -
							selectedVariant?.selling_price) /
							selectedVariant?.crossed_price) *
							100
					);
				} else {
					return null;
				}
			});
		} else {
			setPrice(product?.selling_price);
			setCrossedPrice(product?.crossed_price);
			setSavingPercentage(() => {
				if (product?.crossed_price && product?.selling_price) {
					return (
						((product?.crossed_price - product?.selling_price) /
							product?.crossed_price) *
						100
					);
				} else {
					return null;
				}
			});
		}
	}, [selectedVariant]);

	return (
		<div className="my-8 max-w-7xl mx-auto">
			{product && (
				<div className="flex flex-col gap-6">
					<div className="grid grid-cols-2 gap-6">
						{/* Product Image */}
						<div className="col-span-1">
							<ProductImages
								images={product?.product_images}
								selected={selectedVariant}
							/>
						</div>

						{/* Product Details */}
						<div className="col-span-1 space-y-4">
							<h2 className="text-3xl font-semibold">
								{product.name}
							</h2>

							{/* category: Category Name */}
							<div className="text-gray-600">
								<h3>
									Category:{" "}
									<Link
										to={`/categories/${product.category.id}`}
										className="text-storeFrontClr"
									>
										{product.category.name}
									</Link>
								</h3>
							</div>

							{/* Variant Selection */}
							{product.variants.length > 1 && (
								<div>
									<h3 className="text-lg font-medium">
										Select Variant:
									</h3>
									<div className="flex space-x-4 flex-wrap">
										{product.variants.map(
											(variant: any) => (
												<FilterButton
													className="tracking-wider"
													key={variant.id}
													selected={
														selectedVariant ===
														variant
													}
													onClick={() =>
														handleVariantChange(
															variant
														)
													}
												>
													{variant.name}
												</FilterButton>
											)
										)}
									</div>
								</div>
							)}

							{/* Price and Add to Cart */}
							<div className="flex gap-4 items-center justify-between">
								<div className="flex gap-4 items-center">
									{crossedPrice ? (
										<div className="text-gray-600 line-through">
											Rs. {crossedPrice}
										</div>
									) : null}
									<div className="text-storeFrontClr text-lg font-semibold ">
										Rs. {price}
									</div>
								</div>
								{savingPercentage && savingPercentage > 0 && (
									<div className="text-sm bg-storeFrontClr text-white px-2 py-2 rounded-full">
										Save {savingPercentage}%
									</div>
								)}
							</div>
							<div className="flex flex-col gap-4">
								{/* Quantity Selector */}
								<div className="flex gap-4 items-center">
									<div className="text-lg font-semibold">
										Quantity:
									</div>
									<div className="flex gap-2 items-center">
										<button className="border border-gray-300 px-2 py-1 rounded">
											-
										</button>
										<div className="border border-gray-300 px-3 py-1 rounded">
											1
										</div>
										<button className="border border-gray-300 px-2 py-1 rounded">
											+
										</button>
									</div>
								</div>
								<StoreFrontButton
									className="w-full rounded"
									onClick={() => {}}
								>
									Add to Cart
								</StoreFrontButton>
							</div>
							<div>
								<h3 className="text-lg font-semibold mt-4">
									Description:
								</h3>
								<div className="mt-2 prose">
									{parse(product.description)}
								</div>
							</div>
						</div>
					</div>
					<div>
						<ProductSection
							title="You may also like"
							products={productState.products}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDetail;

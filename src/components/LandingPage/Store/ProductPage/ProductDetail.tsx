import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
	getProductById,
	getProductsByCategory,
} from "../../../../app/Feature/StoreOwner/Products/ProductApi";
import { Link, useParams } from "react-router-dom";
import ProductImages from "../Shared/ProductImages/ProductImages";
import parse from "html-react-parser";
import {
	FilterButton,
	MutedButton,
	StoreFrontButton,
} from "../../../Shared/Buttons/Buttons";
import ProductSection from "../Shared/ProductSections/ProductSection";

const ProductDetail = ({ id }: any) => {
	console.log(id);
	const [product, setProduct] = useState<any>(null);
	const [selectedVariant, setSelectedVariant] = useState<any>(null);
	const [price, setPrice] = useState<any>(null);
	const [crossedPrice, setCrossedPrice] = useState<any>(null);
	const [savingPercentage, setSavingPercentage] = useState<any>(null);
	const [quantity, setQuantity] = useState<any>(1);
	const [relatedProducts, setRelatedProducts] = useState<any>([]);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getProductById({ productId: id })).then((res: any) => {
			if (res.payload?.success) {
				setProduct(res.payload.data);
				setSelectedVariant(res.payload.data.variants[0]);
				dispatch(getProductsByCategory(product?.category?.id)).then(
					(res) => {
						if (res.payload?.success) {
							setRelatedProducts(res.payload.data);
						}
					}
				);
			}
		});
	}, []);

	const handleVariantChange = (variant: any) => {
		setSelectedVariant(variant);
	};

	const hasVariants = product?.variants && product?.variants?.length > 0;

	useEffect(() => {
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
					return Math.round(
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

	const updateQuantiy = (value: number) => {
		if (quantity + value > 0) {
			setQuantity(quantity + value);
		}
	};
	return (
		<div className="my-14 max-w-7xl mx-auto">
			{product && (
				<div className="flex flex-col gap-6">
					<div className="grid grid-cols-2 gap-6">
						<div className="col-span-1">
							<ProductImages
								images={product?.product_images}
								selected={selectedVariant}
							/>
						</div>

						<div className="col-span-1 space-y-4">
							<h2 className="text-3xl font-semibold">
								{product.name}
							</h2>

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
									<div className="text-sm bg-storeFrontClr text-white px-4 py-2 rounded-full">
										Save {savingPercentage}%
									</div>
								)}
							</div>
							<div className="flex flex-col gap-4">
								<div className="flex gap-4 items-center">
									<div className="text-lg font-semibold">
										Quantity:
									</div>
									<div className="flex gap-2 items-center">
										<button
											onClick={() => updateQuantiy(-1)}
											className="border border-storeFrontClr px-8 py-1 rounded font-semibold text-lg text-gray-700"
										>
											-
										</button>
										<div className="border border-storeFrontClr px-8 py-1 rounded font-semibold text-lg text-gray-700">
											{quantity}
										</div>
										<button
											onClick={() => updateQuantiy(1)}
											className="border border-storeFrontClr px-8 py-1 rounded font-semibold text-lg text-gray-700"
										>
											+
										</button>
									</div>
								</div>
								{(selectedVariant &&
									quantity > selectedVariant?.quantity) ||
									(quantity > product?.quantity ? (
										<FilterButton
											className="w-full rounded"
											onClick={() => {}}
											disabled
										>
											<span className="flex text-white items-center justify-center text-sm tracking-wider font-bold transition-all duration-100 cursor-not-allowed">
												Out of Stock
											</span>
										</FilterButton>
									) : (
										<StoreFrontButton
											className="w-full rounded"
											onClick={() => {}}
										>
											Add to Cart
										</StoreFrontButton>
									))}

								<div className="text-gray-600 -mt-2">
									* Total price will be calculated at checkout
								</div>
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
					{relatedProducts?.length > 0 && (
						<div>
							<ProductSection
								title="You may also like"
								products={relatedProducts}
							/>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default ProductDetail;

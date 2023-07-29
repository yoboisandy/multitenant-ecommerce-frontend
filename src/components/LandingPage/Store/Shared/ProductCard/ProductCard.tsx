import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: any) => {
	const {
		id,
		name,
		selling_price,
		crossed_price,
		product_images,
		variants,
	}: any = product;
	const image = product_images[0].image;

	const hasVariants = product.variants && product.variants.length > 0;
	const hasDifferentPrices =
		hasVariants &&
		!product.variants.every(
			(v: any) => v.selling_price === product.variants[0].selling_price
		);

	const getProductSellingPrice: any = () => {
		if (!hasVariants) {
			return `Rs. ${selling_price}`;
		} else if (!hasDifferentPrices) {
			return `Rs. ${variants[0].selling_price}`;
		} else {
			const prices = product.variants.map((v: any) => v.selling_price);
			const lowestPrice = Math.min(...prices);
			const highestPrice = Math.max(...prices);
			return `Rs. ${lowestPrice} - Rs. ${highestPrice}`;
		}
	};

	const getSavingPrice: any = () => {
		if (!hasVariants && crossed_price) {
			const saving = crossed_price - selling_price;
			if (saving > 0) {
				return `Rs. ${saving}`;
			}
		}
		return null;
	};

	const price = getProductSellingPrice();
	const savingPrice = getSavingPrice();
	return (
		<Link to={`/products/${id}`} className="">
			<div className="relative bg-white group font-poppins">
				{savingPrice && (
					<span className="absolute z-10 right-0 bg-storeFrontClr text-white text-sm px-2 py-1 rounded-tr-md">
						Save {savingPrice}
					</span>
				)}
				<div className="h-40 md:h-48 lg:h-56 bg-gray-200 rounded-md overflow-hidden">
					<img
						src={image}
						alt=""
						className="w-full h-full object-cover group-hover:scale-110
						transition-all duration-300"
					/>
				</div>
				<div className="md:p-4 p-1 space-y-2">
					<div className="text-gray-600 font-bold text-sm md:text-lg">
						{name.length > 36 ? name.slice(0, 36) + "..." : name}
					</div>
					<div className="flex gap-2 text-xs md:text-lg font-semibold">
						{!hasVariants &&
						crossed_price &&
						crossed_price > selling_price ? (
							<div className=" text-gray-600 line-through">
								Rs. {crossed_price}
							</div>
						) : null}
						<div className="text-storeFrontClr">{price}</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;

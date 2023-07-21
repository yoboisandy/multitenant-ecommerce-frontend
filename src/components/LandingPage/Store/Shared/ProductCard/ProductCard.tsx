import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
	return (
		<Link to="/">
			<div className="relative bg-white rounded-md shadow-md group font-poppins">
				<span className="absolute right-0 bg-storeFrontClr text-white text-sm px-2 py-1 rounded-tr-md">
					Save Rs. 250
				</span>
				<div className="h-[200px] bg-gray-200 rounded-t-md overflow-hidden">
					<img
						src="https://wsrv.nl/?w=300&h=300&url=https://cdn.blanxer.com/uploads/63faec89fb0ba7c738538c2c/product_image-akdb3055-3993.png"
						alt=""
						className="w-full h-full object-cover group-hover:scale-110
						transition-all duration-300"
					/>
				</div>
				<div className="p-4">
					<div className="text-gray-600 font-bold text-lg">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit.
					</div>
					<div className="flex gap-2 text-lg">
						<div className="text-storeFrontClr  line-through">
							Rs. 500
						</div>
						<div className="text-gray-600 ">Rs. 250</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;

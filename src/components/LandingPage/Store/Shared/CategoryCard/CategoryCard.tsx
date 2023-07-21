import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = () => {
	return (
		// category card with a image and category name on center of the image
		<Link to={"/"} className="relative bg-black group">
			<img
				src={`https://wsrv.nl/?w=300&h=300&url=https://cdn.blanxer.com/uploads/649a5e746d8fbbdc51460d31/product_image-product-image-0018.png`}
				alt=""
				className="w-full h-full object-cover opacity-50 group-hover:scale-110
                 transition-all duration-300"
			/>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl text-center font-bold">
				Category Name
			</div>
		</Link>
	);
};

export default CategoryCard;

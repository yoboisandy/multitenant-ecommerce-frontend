import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }: any) => {
	return (
		<Link
			to={`/categories/${category.id}`}
			className="relative bg-black group rounded-md overflow-hidden"
		>
			<img
				src={category.image}
				alt={category.name}
				className="w-full h-full object-cover opacity-50 group-hover:scale-110
                 transition-all duration-300"
			/>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl text-center font-bold tracking-wider">
				{category.name}
			</div>
		</Link>
	);
};

export default CategoryCard;

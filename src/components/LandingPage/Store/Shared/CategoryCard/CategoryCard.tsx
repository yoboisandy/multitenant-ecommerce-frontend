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
				className="w-full object-cover opacity-50 group-hover:scale-110
                 transition-all duration-300 h-40 md:h-48 lg:h-56"
			/>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white sm:text-sm md:text-2xl text-center font-bold tracking-wider px-2 lg:px-0">
				{category.name}
			</div>
		</Link>
	);
};

export default CategoryCard;

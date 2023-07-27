import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../../app/hooks";

const CategoryDropdown = () => {
	const categoryState: any = useAppSelector((state) => state.CategorySlice);
	return (
		<div className="flex flex-col">
			{categoryState.categories.map((category: any) => (
				<Link
					key={category.id}
					className="p-2 hover:bg-gray-100"
					to={`/categories/${category.id}`}
				>
					{category.name}
				</Link>
			))}
		</div>
	);
};

export default CategoryDropdown;

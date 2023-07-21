import React from "react";
import { Link } from "react-router-dom";

const CategoryDropdown = () => {
	return (
		<div className="flex flex-col">
			<Link className="p-2 hover:bg-gray-100" to="/store/category/1">
				Category 1
			</Link>
			<Link className="p-2 hover:bg-gray-100" to="/store/category/2">
				Category 2
			</Link>
			<Link className="p-2 hover:bg-gray-100" to="/store/category/3">
				Category 3
			</Link>
		</div>
	);
};

export default CategoryDropdown;

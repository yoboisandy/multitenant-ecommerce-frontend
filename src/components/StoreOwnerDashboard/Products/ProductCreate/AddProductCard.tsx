import React from "react";

const AddProductCard = ({ children }: any) => {
	return (
		<div className="w-full border-2 p-3 bg-gray-50">
			<div>{children}</div>
		</div>
	);
};

export default AddProductCard;

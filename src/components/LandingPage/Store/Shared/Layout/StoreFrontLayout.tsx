import React from "react";
import Cart from "../Cart/Cart";

const StoreFrontLayout = ({ children }: any) => {
	return (
		<div className="bg-white relative scroll">
			{children}
			<Cart />
		</div>
	);
};

export default StoreFrontLayout;

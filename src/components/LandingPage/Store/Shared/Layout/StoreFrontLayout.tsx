import React from "react";
import Cart from "../Cart/Cart";
import DefaultNav from "../Navbars/DefaultNav";
import StoreFooter from "../Footer/StoreFooter";

const StoreFrontLayout = ({ children }: any) => {
	return (
		<div className="bg-white relative scroll">
			<DefaultNav />
			{children}
			<StoreFooter />
			<Cart />
		</div>
	);
};

export default StoreFrontLayout;

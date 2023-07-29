import React from "react";
import CheckoutComp from "../../../components/LandingPage/Store/Checkout/CheckoutComp";
import StoreFrontLayout from "../../../components/LandingPage/Store/Shared/Layout/StoreFrontLayout";

const Checkout = () => {
	return (
		<StoreFrontLayout>
			<div className="my-10 max-w-7xl mx-auto px-4">
				<CheckoutComp />
			</div>
		</StoreFrontLayout>
	);
};

export default Checkout;

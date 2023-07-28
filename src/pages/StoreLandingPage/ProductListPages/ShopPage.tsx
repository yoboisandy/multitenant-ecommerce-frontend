import React from "react";
import Shop from "../../../components/LandingPage/Store/Shop/Shop";
import StoreFrontLayout from "../../../components/LandingPage/Store/Shared/Layout/StoreFrontLayout";
import DefaultNav from "../../../components/LandingPage/Store/Shared/Navbars/DefaultNav";

const ShopPage = () => {
	return (
		<StoreFrontLayout>
			<Shop />
		</StoreFrontLayout>
	);
};

export default ShopPage;

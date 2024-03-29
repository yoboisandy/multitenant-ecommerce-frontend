import React from "react";
import DashboardLayout from "../../../components/Shared/Layouts/DashboardLayout";
import OrderComp from "../../../components/StoreOwnerDashboard/Orders/Orders";

const Orders = () => {
	return (
		<DashboardLayout>
			<OrderComp />
		</DashboardLayout>
	);
};

export default Orders;

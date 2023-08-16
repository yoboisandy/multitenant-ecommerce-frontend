import React from "react";
import DashboardLayout from "../../../components/Shared/Layouts/DashboardLayout";
import SubscriptionsComp from "../../../components/StoreOwnerDashboard/Subscriptions/SubscriptionsComp";

const Subscription = () => {
	return (
		<DashboardLayout>
			<SubscriptionsComp />
		</DashboardLayout>
	);
};

export default Subscription;

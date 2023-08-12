import { useEffect } from "react";
import DashboardLayout from "../../../components/Shared/Layouts/DashboardLayout";
import DashboardHome from "../../../components/StoreOwnerDashboard/Home/DashboardHome";
const Home = () => {
	return (
		<DashboardLayout>
			<DashboardHome />
		</DashboardLayout>
	);
};

export default Home;

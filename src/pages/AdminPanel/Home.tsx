import { useAppSelector } from "../../app/hooks";
import DashboardLayout from "../../components/Shared/Layouts/DashboardLayout";

const Home = () => {
	const authState: any = useAppSelector((state) => state.AuthSlice);

	return (
		<DashboardLayout>
			<div>
				<div>
					<h1 className="text-xl font-semibold">
						Welcome, {authState.current_user?.name}
					</h1>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default Home;

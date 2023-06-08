import { useAppSelector } from "../../app/hooks";
import { Navigate, Outlet } from "react-router-dom";

const PrivateAdminRoute = () => {
	const authState = useAppSelector((store) => store.AuthSlice);
	if (authState.current_user?.roles?.includes("admin")) {
		return <Outlet />;
	} else {
		return <Navigate to="/" />;
	}
};

export default PrivateAdminRoute;

import { useAppSelector } from "../../app/hooks";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
	const authState = useAppSelector((store) => store.AuthSlice);
	if (
		authState.current_user &&
		authState.current_user.roles.includes("admin")
	) {
		return <Navigate to="/admin" />;
	} else if (
		authState.current_user &&
		authState.current_user.roles.includes("owner")
	) {
		return <Navigate to="/dashboard" />;
	} else {
		return <Outlet />;
	}
};

export default AuthRoute;

import { useAppSelector } from "../../app/hooks";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
	const authState = useAppSelector((store) => store.AuthSlice);
	if (authState.current_user) {
		return <Navigate to="/dashboard" />;
	} else {
		return <Outlet />;
	}
};

export default AuthRoute;

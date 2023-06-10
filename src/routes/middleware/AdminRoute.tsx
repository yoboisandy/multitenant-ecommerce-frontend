import React from "react";
import { useAppSelector } from "../../app/hooks";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
	const authState = useAppSelector((store) => store.AuthSlice);
	if (
		authState.current_user &&
		authState.current_user.roles.includes("admin")
	) {
		return <Outlet />;
	} else {
		return <Navigate to="/login" />;
	}
};

export default AdminRoute;

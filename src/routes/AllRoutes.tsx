import { Route, Routes } from "react-router-dom";
import publicRoutes from "./PublicRoutes";
import authRoutes from "./AuthRoutes";
import { useLayoutEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { getMe } from "../app/Feature/Auth/AuthApi";
import AuthRoute from "./middleware/AuthRoute";
import FullPageLoader from "../components/Shared/Loaders/FullPageLoader";
import adminRoutes from "./AdminRoutes";
import AdminRoute from "./middleware/AdminRoute";
import StoreOwnerRoute from "./middleware/StoreOwnerRoute";
import storeOwnerRoutes from "./StoreOwnerRoutes";

const AllRoutes = () => {
	const dispatch = useAppDispatch();
	const [loading, setLoading] = useState(true);
	const getLoggedUser = async () => {
		await dispatch(getMe());
	};
	useLayoutEffect(() => {
		getLoggedUser();
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, []);

	return (
		<>
			{loading ? (
				<FullPageLoader />
			) : (
				<Routes>
					{publicRoutes.map((route) => (
						<Route
							key={route.id}
							path={route.path}
							element={<route.component />}
						/>
					))}
					<Route element={<AuthRoute />}>
						{authRoutes.map((route) => (
							<Route
								key={route.id}
								path={route.path}
								element={route.component}
							/>
						))}
					</Route>
					<Route element={<AdminRoute />}>
						{adminRoutes.map((route) => (
							<Route
								key={route.id}
								path={route.path}
								element={route.component}
							/>
						))}
					</Route>
					<Route element={<StoreOwnerRoute />}>
						{storeOwnerRoutes.map((route) => (
							<Route
								key={route.id}
								path={route.path}
								element={route.component}
							/>
						))}
					</Route>
				</Routes>
			)}
		</>
	);
};

export default AllRoutes;

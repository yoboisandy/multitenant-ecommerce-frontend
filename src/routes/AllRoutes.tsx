/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes, useNavigate } from "react-router-dom";
import publicRoutes from "./PublicRoutes";
import authRoutes from "./AuthRoutes";
import { useLayoutEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getConfigs, getMe } from "../app/Feature/Auth/AuthApi";
import AuthRoute from "./middleware/AuthRoute";
import FullPageLoader from "../components/Shared/Loaders/FullPageLoader";
import adminRoutes from "./AdminRoutes";
import AdminRoute from "./middleware/AdminRoute";
import StoreOwnerRoute from "./middleware/StoreOwnerRoute";
import storeOwnerRoutes from "./StoreOwnerRoutes";
import { currentDomain } from "../config/urlConfig";
import { Helmet } from "react-helmet";

const AllRoutes = () => {
	const dispatch = useAppDispatch();
	const [loading, setLoading] = useState(true);
	const storeState: any = useAppSelector((state) => state.StoreSlice);
	const getLoggedUser = async () => {
		await dispatch(getMe());
	};
	useLayoutEffect(() => {
		if (currentDomain.isTenant) {
			dispatch(getConfigs()).then((res: any) => {
				if (!res.payload.success) {
					setLoading(true);
					window.location.href = `${process.env.REACT_APP_URL!}`;
				}
			});
		}
		getLoggedUser();
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, []);

	return (
		<>
			<Helmet>
				<title>
					{storeState?.current_store?.store_name ??
						"Mecomm - Build Your Online Store Today"}
				</title>
				<link
					rel="apple-touch-icon"
					href={storeState.current_store?.customization?.favicon}
				/>
				<link
					rel="icon"
					href={storeState.current_store?.customization?.favicon}
				/>
			</Helmet>
			{loading ? (
				<FullPageLoader />
			) : (
				<Routes>
					{publicRoutes.map((route) => (
						<Route
							key={route.id}
							path={route.path}
							element={route.component}
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

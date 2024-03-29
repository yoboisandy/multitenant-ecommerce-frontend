/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes, useNavigate } from "react-router-dom";
import publicRoutes from "./PublicRoutes";
import authRoutes from "./AuthRoutes";
import { useEffect, useLayoutEffect, useState } from "react";
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
import StorePublicRoutes from "./StorePublicRoutes";

const AllRoutes = () => {
	const dispatch = useAppDispatch();
	const [loading, setLoading] = useState(true);
	const storeState: any = useAppSelector((state) => state.StoreSlice);
	const authState: any = useAppSelector((state) => state.AuthSlice);
	const getLoggedUser = async () => {
		await dispatch(getMe());
	};
	const theme = storeState.current_store?.customization?.theme;
	const themeClass =
		theme === "Default"
			? "theme-default"
			: theme === "Purple"
			? "theme-purple"
			: theme === "Green"
			? "theme-green"
			: theme === "Yellow"
			? "theme-yellow"
			: theme === "Black"
			? "theme-black"
			: "theme-default";

	const getConfiguration = async () => {
		await dispatch(getConfigs()).then((res: any) => {
			if (!res.payload?.success) {
				setLoading(true);
				window.location.href = `${process.env.REACT_APP_URL!}`;
			}
		});
	};
	useLayoutEffect(() => {
		if (currentDomain.isTenant) {
			getConfiguration();
		}
		getLoggedUser();
	}, []);

	useEffect(() => {
		if (currentDomain.isTenant) {
			if (authState.getConfigs.success && authState.getMe.loading) {
				setLoading(false);
			}
		} else {
			if (authState.getMe.success || authState.getMe.error) {
				setLoading(false);
			}
		}
	}, [authState.getConfigs.loading, authState.getMe.loading]);

	return (
		<>
			<Helmet>
				<title>
					{storeState?.current_store?.store_name ??
						"Mecomm - Build Your Online Store Today"}
				</title>
				<link
					rel="apple-touch-icon"
					href={
						storeState.current_store?.customization?.favicon ||
						"/favicon-32x32.png"
					}
				/>
				<link
					rel="icon"
					href={
						storeState.current_store?.customization?.favicon ||
						"/favicon-32x32.png"
					}
				/>
			</Helmet>
			{loading ? (
				<FullPageLoader />
			) : (
				<div className={themeClass}>
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
						{StorePublicRoutes.map((route) => (
							<Route
								key={route.id}
								path={route.path}
								element={route.component}
							/>
						))}
					</Routes>
				</div>
			)}
		</>
	);
};

export default AllRoutes;

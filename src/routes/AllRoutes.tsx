import { Route, Routes } from "react-router-dom";
import publicRoutes from "./PublicRoutes";
const AllRoutes = () => {
	return (
		<Routes>
			<Route>
				{publicRoutes.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component />}
					/>
				))}
			</Route>
		</Routes>
	);
};

export default AllRoutes;

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllStores } from "../../app/Feature/Store/StoreApi";
import DashboardLayout from "../../components/Shared/Layouts/DashboardLayout";

const Stores = () => {
	const dispatch = useAppDispatch();
	const storeState: any = useAppSelector((store) => store.StoreSlice);

	useEffect(() => {
		dispatch(getAllStores());
	}, [dispatch]);

	return (
		<DashboardLayout>
			<div></div>
		</DashboardLayout>
	);
};

export default Stores;

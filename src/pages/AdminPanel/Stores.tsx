import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllStores } from "../../app/Feature/Store/StoreApi";
import DashboardLayout from "../../components/Shared/Layouts/DashboardLayout";
import {
	DashboardButton,
	PrimaryButton,
} from "../../components/Shared/Buttons/Buttons";
import {
	TBody,
	THead,
	Table,
	TableActions,
	TableLayout,
} from "../../components/Shared/Table/Table";

const Stores = () => {
	const dispatch = useAppDispatch();
	const storeState: any = useAppSelector((store) => store.StoreSlice);

	useEffect(() => {
		dispatch(getAllStores());
	}, [dispatch]);

	const headingLeft = (
		<>
			<DashboardButton className={`rounded`}>New Store</DashboardButton>
		</>
	);

	return (
		<DashboardLayout>
			<TableLayout heading="Stores" headingLeft={headingLeft}>
				<Table>
					<THead>
						<tr>
							<th>Store Name</th>
							<th>Category</th>
							<th>Store Website</th>
							<th>Plan</th>
							<th>Action</th>
						</tr>
					</THead>
					<TBody>
						{storeState.stores.map((store: any) => (
							<tr key={store.id}>
								<td>{store.store_name}</td>
								<td>{store.store_category.name}</td>
								<td>{store.subdomain}</td>
								<td>{store.plan}</td>
								<TableActions />
							</tr>
						))}
					</TBody>
				</Table>
			</TableLayout>
		</DashboardLayout>
	);
};

export default Stores;

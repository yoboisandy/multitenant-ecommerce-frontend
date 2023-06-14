import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllStores } from "../../app/Feature/Store/StoreApi";
import DashboardLayout from "../../components/Shared/Layouts/DashboardLayout";
import { DashboardButton } from "../../components/Shared/Buttons/Buttons";
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
	return (
		<DashboardLayout>
			<TableLayout searchable heading="Stores">
				<Table>
					<THead>
						<tr>
							<th>Store</th>
							<th>Owner</th>
							<th>Phone</th>
							<th>Email</th>
							<th>Category</th>
							<th>Website</th>
							<th>Plan</th>
							<th>Action</th>
						</tr>
					</THead>
					<TBody>
						{storeState.stores.map((store: any) => (
							<tr key={store.id}>
								<td>{store.store_name}</td>
								<td>{store.user_name}</td>
								<td>{store.phone}</td>
								<td>{store.email}</td>
								<td>{store.store_category}</td>
								<td>
									<a
										href={`http://${store.url}`}
										target="_blank"
										rel="noreferrer"
									>
										{store.url}
									</a>
								</td>
								<td>{store.plan}</td>
								<TableActions onDelete={() => {}} />
							</tr>
						))}
					</TBody>
				</Table>
			</TableLayout>
		</DashboardLayout>
	);
};

export default Stores;

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllStores } from "../../app/Feature/Store/StoreApi";
import DashboardLayout from "../../components/Shared/Layouts/DashboardLayout";
import {
	TBody,
	THead,
	Table,
	TableActions,
	TableLayout,
} from "../../components/Shared/Table/Table";
import Pagination from "../../components/Shared/Pagination/Pagination";
import {
	paginateStores,
	searchStores,
} from "../../app/Feature/Store/StoreSlice";
import { SearchBox } from "../../components/Shared/Inputs/TextFields";

const Stores = () => {
	const dispatch = useAppDispatch();
	const [search, setSearch] = useState("");
	const storeState: any = useAppSelector((store) => store.StoreSlice);

	const handlePagination = (pageNumber: number) => {
		dispatch(paginateStores(pageNumber));
	};

	const onSearch = (e: any) => {
		setSearch(e.target.value);
		dispatch(searchStores(e.target.value));
	};

	const headingLeft = (
		<SearchBox
			onChange={onSearch}
			placeholder="Search..."
			className="w-[200px] h-[30px]"
		/>
	);

	useEffect(() => {
		dispatch(getAllStores());
	}, [dispatch]);
	return (
		<DashboardLayout>
			<TableLayout heading="Stores" headingLeft={headingLeft}>
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
			{search === "" && (
				<Pagination
					totalRows={storeState.all_stores.length}
					paginate={handlePagination}
				/>
			)}
		</DashboardLayout>
	);
};

export default Stores;

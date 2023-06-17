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
import DeleteModal from "../../components/Shared/Modals/DeleteModal";
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
} from "../../components/Shared/Modals/Modal";
import SelectField from "../../components/Shared/Inputs/SelectField";
import {
	DashboardButton,
	MutedButton,
} from "../../components/Shared/Buttons/Buttons";

const Stores = () => {
	const dispatch = useAppDispatch();
	const [search, setSearch] = useState("");
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showPlanUpdateModal, setShowPlanUpdateModal] = useState(false);
	const [selectedStore, setSelectedStore] = useState<any>({});
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
								<td>
									<button
										className={`${
											store?.plan === "free"
												? `bg-orange-200`
												: `bg-green-200`
										} px-3 py-1 rounded-full font-semibold`}
										onClick={() => {
											setShowPlanUpdateModal(true);
											setSelectedStore(store);
										}}
									>
										{store.plan}
									</button>
								</td>
								<TableActions
									onDelete={() => {
										setShowDeleteModal(true);
										setSelectedStore(store);
									}}
								/>
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
			<DeleteModal show={showDeleteModal} setShow={setShowDeleteModal} />
			{showPlanUpdateModal && (
				<Modal>
					<ModalBody>
						<ModalHeader>Update Plan</ModalHeader>
						<SelectField
							label="Plan"
							selected={selectedStore?.plan}
							options={[
								{
									value: "paid",
									text: "Paid",
								},
								{
									value: "free",
									text: "Free",
								},
							]}
						/>

						<ModalFooter className="flex justify-end gap-4">
							<MutedButton
								onClick={() => setShowPlanUpdateModal(false)}
							>
								Cancel
							</MutedButton>
							<DashboardButton> Update </DashboardButton>
						</ModalFooter>
					</ModalBody>
				</Modal>
			)}
		</DashboardLayout>
	);
};

export default Stores;

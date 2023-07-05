import React, { useState } from "react";
import {
	TBody,
	THead,
	Table,
	TableActions,
	TableLayout,
} from "../../../Shared/Table/Table";
import { SearchBox } from "../../../Shared/Inputs/TextFields";
import { DashboardButton, FilterButton } from "../../../Shared/Buttons/Buttons";
import { useNavigate } from "react-router-dom";

const ProductsTable = () => {
	const navigate = useNavigate();
	const statuses = ["Active", "Draft"];
	const [selectedStatus, setSelectedStatus] = useState(statuses[0]);
	const headingLeft = (
		<>
			<SearchBox placeholder="Search..." className="w-[200px] h-[30px]" />
			<DashboardButton
				onClick={() => navigate("/products/add")}
				className={"w-full rounded"}
			>
				Add Product
			</DashboardButton>
		</>
	);

	const filterButtons = (
		<div className="flex items-center gap-2">
			{statuses.map((status) => (
				<FilterButton
					onClick={() => setSelectedStatus(status)}
					selected={selectedStatus == status}
					key={status}
				>
					{status}
				</FilterButton>
			))}
		</div>
	);

	return (
		<TableLayout
			heading="Products"
			headingLeft={headingLeft}
			belowHeading={filterButtons}
		>
			<Table>
				<THead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Price</th>
						<th>Inventory</th>
						<th>Status</th>
						<th>Created</th>
						<th>Actions</th>
					</tr>
				</THead>
				<TBody>
					<tr>
						<td>1</td>
						<TableActions onEdit={() => {}} onDelete={() => {}} />
					</tr>
				</TBody>
			</Table>
		</TableLayout>
	);
};

export default ProductsTable;

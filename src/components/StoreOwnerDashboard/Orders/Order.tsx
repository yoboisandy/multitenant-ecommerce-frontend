import React, { useState } from "react";
import { TBody, THead, Table, TableLayout } from "../../Shared/Table/Table";
import { SearchBox } from "../../Shared/Inputs/TextFields";
import { DashboardButton, FilterButton } from "../../Shared/Buttons/Buttons";

const Order = () => {
	const statuses = [
		"All",
		"Pending",
		"Processing",
		"Dispatched",
		"Delivered",
		"Cancelled",
		"Returned",
	];
	const [selectedStatus, setSelectedStatus] = useState(statuses[0]);
	const headingLeft = (
		<>
			<SearchBox
				focusOutline={"focus:outline-storeFrontClr"}
				placeholder="Search..."
				className="w-[200px] h-[30px]"
			/>
			<DashboardButton onClick={() => {}} className={"w-full rounded"}>
				Create Order
			</DashboardButton>
		</>
	);

	const filterButtons = (
		<div className="flex items-center gap-2">
			{statuses.map((status) => (
				<FilterButton
					onClick={() => setSelectedStatus(status)}
					selected={selectedStatus === status}
					key={status}
				>
					{status}
				</FilterButton>
			))}
		</div>
	);
	return (
		<TableLayout
			heading="Orders"
			headingLeft={headingLeft}
			belowHeading={filterButtons}
		>
			<Table>
				<THead>
					<tr>
						<th>#</th>
						<th>Customer</th>
						<th>Quantity</th>
						<th>Total Price</th>
						<th>Payment Status</th>
						<th>Payment Method</th>
						<th>Status</th>
						<th>Created</th>
						<th>Actions</th>
					</tr>
				</THead>
				<TBody></TBody>
			</Table>
		</TableLayout>
	);
};

export default Order;

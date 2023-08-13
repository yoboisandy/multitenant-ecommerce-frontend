import React, { useEffect, useState } from "react";
import { TBody, THead, Table, TableLayout } from "../../Shared/Table/Table";
import { SearchBox } from "../../Shared/Inputs/TextFields";
import {
	DashboardButton,
	FilterButton,
	MutedButton,
} from "../../Shared/Buttons/Buttons";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getOrders, updateOrder } from "../../../app/Feature/Order/OrderApi";
import { filterByStatus } from "../../../app/Feature/Order/OrderSlice";
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
} from "../../Shared/Modals/Modal";
import SingleOrderView from "./SingleOrderView";
import SelectField from "../../Shared/Inputs/SelectField";
import { useForm } from "react-hook-form";

const Orders = () => {
	const orderState: any = useAppSelector((state) => state.OrderSlice);
	const dispatch = useAppDispatch();
	const statuses = [
		"all",
		"pending",
		"processing",
		"dispatched",
		"delivered",
		"cancelled",
		"returned",
	];
	const [selectedStatus, setSelectedStatus] = useState(statuses[0]);
	const [showOrderDetails, setShowOrderDetails] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);
	const [selectedOrder, setSelectedOrder] = useState<any>({});
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
					className="capitalize"
				>
					{status}
				</FilterButton>
			))}
		</div>
	);

	useEffect(() => {
		dispatch(getOrders());
	}, [dispatch]);

	useEffect(() => {
		dispatch(filterByStatus(selectedStatus));
	}, [dispatch, selectedStatus, orderState.allOrders]);

	useEffect(() => {
		console.log(selectedOrder);
	}, [selectedOrder]);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			payment_status: selectedOrder.payment_status || "",
			order_status: selectedOrder.order_status || "",
		},
		mode: "onChange",
	});

	const onSubmit = (data: any) => {
		console.log(data);
		data.id = selectedOrder.id;
		data.order_status = data.order_status || selectedOrder.order_status;
		data.payment_status =
			data.payment_status || selectedOrder.payment_status;
		dispatch(updateOrder(data)).then(() => {
			setShowEditModal(false);
			setSelectedOrder({});
			dispatch(getOrders());
		});
	};

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
				<TBody>
					{orderState.orders?.map((order: any, index: number) => (
						<tr key={order._id}>
							<td>{index + 1}</td>
							<td>{order.customer_name}</td>
							<td>{order.total_quantity}</td>
							<td>{order.total_price}</td>
							<td className="capitalize">
								<button
									onClick={() => {
										setSelectedOrder(order);
										setShowEditModal(true);
									}}
									className={`${
										order.payment_status === "pending"
											? "bg-yellow-500"
											: order.payment_status === "paid"
											? "bg-green-500"
											: order.payment_status === "unpaid"
											? "bg-red-500"
											: ""
									} capitalize text-white rounded-full px-2 py-1`}
								>
									{order.payment_status}
								</button>
							</td>
							<td className={`uppercase`}>
								{order.payment_method}
							</td>
							<td className={`capitalize`}>
								<button
									onClick={() => {
										setSelectedOrder(order);
										setShowEditModal(true);
									}}
									className={`${
										order.order_status === "pending"
											? "bg-yellow-500"
											: order.order_status ===
											  "processing"
											? "bg-blue-500"
											: order.order_status ===
											  "dispatched"
											? "bg-green-500"
											: order.order_status === "delivered"
											? "bg-green-500"
											: order.order_status === "cancelled"
											? "bg-red-500"
											: order.order_status === "returned"
											? "bg-red-500"
											: ""
									} capitalize text-white rounded-full px-2 py-1`}
								>
									{order.order_status}
								</button>
							</td>
							<td>{order.created_at}</td>
							<td>
								<DashboardButton
									className={"w-full rounded"}
									onClick={() => {
										setShowOrderDetails(true);
										setSelectedOrder(order);
									}}
								>
									View
								</DashboardButton>
							</td>
						</tr>
					))}
				</TBody>
			</Table>
			{showOrderDetails && (
				<SingleOrderView
					setShowEditModal={setShowEditModal}
					open={showOrderDetails}
					setOpen={setShowOrderDetails}
					order={selectedOrder}
				/>
			)}
			<Modal show={showEditModal} setOpen={setShowEditModal}>
				<form
					className="flex flex-col gap-3"
					onSubmit={handleSubmit(onSubmit)}
				>
					<ModalHeader>Update Order Status</ModalHeader>
					<ModalBody>
						<div className="flex flex-col gap-2">
							<SelectField
								text="Payment Status"
								name="payment_status"
								register={register}
								options={[
									{ value: "pending", text: "Pending" },
									{ value: "paid", text: "Paid" },
									{ value: "unpaid", text: "Unpaid" },
								]}
								selected={selectedOrder?.payment_status}
							/>
							<SelectField
								text="Order Status"
								name="order_status"
								register={register}
								options={[
									{ value: "pending", text: "Pending" },
									{ value: "processing", text: "Processing" },
									{ value: "dispatched", text: "Dispatched" },
									{ value: "delivered", text: "Delivered" },
									{ value: "cancelled", text: "Cancelled" },
									{ value: "returned", text: "Returned" },
								]}
								selected={selectedOrder?.order_status}
							/>
						</div>
					</ModalBody>
					<ModalFooter>
						<div className="flex gap-2 justify-end">
							<MutedButton
								onClick={() => setShowEditModal(false)}
							>
								Cancel
							</MutedButton>
							<DashboardButton type="submit">
								Save
							</DashboardButton>
						</div>
					</ModalFooter>
				</form>
			</Modal>
		</TableLayout>
	);
};

export default Orders;
